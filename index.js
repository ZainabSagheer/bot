// ============================================================
// BITSOL MARKETING - WhatsApp Bot
// Using Meta WhatsApp Cloud API (FREE)
// ============================================================

require("dotenv").config();
const express = require("express");
const axios = require("axios");
const flows = require("./flows");

const app = express();
app.use(express.json());

const {
  VERIFY_TOKEN,
  WHATSAPP_TOKEN,
  PHONE_NUMBER_ID,
  PORT
} = process.env;

// ── In-memory session store ───────────────────────────────
const sessions = {};

// ── TIMEOUT: 5 minutes of inactivity ─────────────────────
const SESSION_TIMEOUT = 5 * 60 * 1000;

// ──────────────────────────────────────────────────────────
// WEBHOOK VERIFICATION (Meta requirement)
// ──────────────────────────────────────────────────────────
app.get("/webhook", (req, res) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    console.log("✅ Webhook verified!");
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

// ──────────────────────────────────────────────────────────
// WEBHOOK — RECEIVE MESSAGES
// ──────────────────────────────────────────────────────────
app.post("/webhook", async (req, res) => {
  res.sendStatus(200);

  const body = req.body;
  if (body.object !== "whatsapp_business_account") return;

  const entry = body.entry?.[0];
  const changes = entry?.changes?.[0];
  const value = changes?.value;
  const messages = value?.messages;

  if (!messages || messages.length === 0) return;

  const msg = messages[0];
  const from = msg.from;
  const msgType = msg.type;
  const contacts = value?.contacts;
  const userName = contacts?.[0]?.profile?.name || "Valued Customer";

  let userInput = "";
  if (msgType === "text") {
    userInput = msg.text.body.trim().toLowerCase();
  } else if (msgType === "interactive") {
    const interactiveType = msg.interactive.type;
    if (interactiveType === "button_reply") {
      userInput = msg.interactive.button_reply.id;
    } else if (interactiveType === "list_reply") {
      userInput = msg.interactive.list_reply.id;
    }
  }

  console.log(`📩 Message from ${userName} (${from}): ${userInput}`);

  // Handle session timeout
  if (sessions[from]) {
    const timeSinceLast = Date.now() - sessions[from].lastActivity;
    if (timeSinceLast > SESSION_TIMEOUT && userInput !== "menu") {
      await sendMessage(from, flows.sessionTimeout(userName));
      delete sessions[from];
      return;
    }
  }

  if (!sessions[from]) {
    sessions[from] = { state: "main_menu", name: userName };
  }
  sessions[from].lastActivity = Date.now();

  await handleMessage(from, userInput, userName);
});

// ──────────────────────────────────────────────────────────
// MESSAGE ROUTER
// ──────────────────────────────────────────────────────────
async function handleMessage(from, input, name) {
  if (input === "menu" || input === "hi" || input === "hello" ||
      input === "start" || input === "helo" || input === "hey" ||
      input === "salam" || input === "assalam") {
    sessions[from] = { state: "main_menu", name, lastActivity: Date.now() };
    return await sendMessage(from, flows.mainMenu(name));
  }

  if (input === "refresh") {
    delete sessions[from];
    return await sendMessage(from, "✅ Session cleared. Type *menu* anytime to start again.");
  }

  if (sessions[from]?.state === "collecting_info") {
    return await handleConsultationInfo(from, input, name);
  }

  const state = sessions[from]?.state || "main_menu";

  // Number-based navigation per state
  if (state === "main_menu") {
    if (input === "1") input = "services";
    else if (input === "2") input = "packages";
    else if (input === "3") input = "consultation";
  } else if (state === "services_menu") {
    if (input === "1") input = "social_media";
    else if (input === "2") input = "performance_ads";
    else if (input === "3") input = "branding";
    else if (input === "4") input = "web_dev";
    else if (input === "5") input = "chatbot";
    else if (input === "6") input = "automation";
    else if (input === "0") input = "menu";
  } else if (state === "packages_menu") {
    if (input === "1") input = "pkg_starter";
    else if (input === "2") input = "pkg_growth";
    else if (input === "3") input = "pkg_scale";
    else if (input === "0") input = "menu";
  } else if (state === "service_detail") {
    if (input === "1") input = "packages";
    else if (input === "2") input = "talk_agent";
    else if (input === "3") input = "services";
    else if (input === "0") input = "menu";
  } else if (state === "package_detail") {
    if (input === "1") input = "consultation";
    else if (input === "2") input = "talk_agent";
    else if (input === "3") input = "packages";
    else if (input === "0") input = "menu";
  }

  switch (input) {
    case "services":
      sessions[from].state = "services_menu";
      return await sendMessage(from, flows.servicesMenu());
    case "packages":
      sessions[from].state = "packages_menu";
      return await sendMessage(from, flows.packagesMenu());
    case "consultation":
      sessions[from].state = "collecting_info";
      return await sendMessage(from, flows.consultation());
    case "social_media":
      sessions[from].state = "service_detail";
      return await sendMessage(from, flows.socialMedia());
    case "performance_ads":
      sessions[from].state = "service_detail";
      return await sendMessage(from, flows.performanceAds());
    case "branding":
      sessions[from].state = "service_detail";
      return await sendMessage(from, flows.branding());
    case "web_dev":
      sessions[from].state = "service_detail";
      return await sendMessage(from, flows.webDev());
    case "chatbot":
      sessions[from].state = "service_detail";
      return await sendMessage(from, flows.chatbot());
    case "automation":
      sessions[from].state = "service_detail";
      return await sendMessage(from, flows.automation());
    case "pkg_starter":
      sessions[from].state = "package_detail";
      return await sendMessage(from, flows.pkgStarter());
    case "pkg_growth":
      sessions[from].state = "package_detail";
      return await sendMessage(from, flows.pkgGrowth());
    case "pkg_scale":
      sessions[from].state = "package_detail";
      return await sendMessage(from, flows.pkgScale());
    case "talk_agent":
      await sendMessage(from, flows.talkAgent());
      await sendMessage(from, flows.chatEnd());
      delete sessions[from];
      return;
    default:
      await sendMessage(from, flows.invalidResponse());
      await sendMessage(from, flows.mainMenu(name));
      sessions[from].state = "main_menu";
  }
}

// ──────────────────────────────────────────────────────────
// CONSULTATION INFO COLLECTOR
// ──────────────────────────────────────────────────────────
async function handleConsultationInfo(from, input, name) {
  const session = sessions[from];
  if (!session.consultData) session.consultData = {};
  const data = session.consultData;

  if (!data.fullName) {
    data.fullName = input;
    return await sendMessage(from, {
      type: "text",
      text: { body: `✅ Got it! Now please share your *Business Name*:` }
    });
  }
  if (!data.businessName) {
    data.businessName = input;
    return await sendMessage(from, {
      type: "text",
      text: { body: `✅ Great! What *City* are you based in?` }
    });
  }
  if (!data.city) {
    data.city = input;
    return await sendMessage(from, {
      type: "text",
      text: { body: `✅ Almost done! Which *service* are you interested in?\n\n(e.g. Social Media, Website, Ads, Chatbot, etc.)` }
    });
  }
  if (!data.service) {
    data.service = input;
    console.log("🎯 New Lead:", data);
    await sendMessage(from, {
      type: "text",
      text: {
        body: `🎉 *Thank you, ${data.fullName}!*\n\nYour consultation request has been received:\n\n👤 Name: ${data.fullName}\n🏢 Business: ${data.businessName}\n📍 City: ${data.city}\n🎯 Service: ${data.service}\n\nOur team will contact you within *24 hours* ⏰\n\n_BITSOL MARKETING — Clicks to Results_ 🚀`
      }
    });
    await sendMessage(from, flows.chatEnd());
    delete sessions[from];
  }
}

// ──────────────────────────────────────────────────────────
// SEND MESSAGE via Meta API
// ──────────────────────────────────────────────────────────
async function sendMessage(to, messageData) {
  try {
    if (typeof messageData === "string") {
      messageData = { type: "text", text: { body: messageData } };
    }
    const payload = {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: to,
      ...messageData
    };
    await axios.post(
      `https://graph.facebook.com/v25.0/${PHONE_NUMBER_ID}/messages`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${WHATSAPP_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error("❌ Send error:", error.response?.data || error.message);
  }
}

// ──────────────────────────────────────────────────────────
// START SERVER
// ──────────────────────────────────────────────────────────
app.listen(PORT || 3000, () => {
  console.log(`🚀 BITSOL MARKETING Bot running on port ${PORT || 3000}`);
});
