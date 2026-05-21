// ============================================================
// BITSOL MARKETING - WhatsApp Bot Flows (Text-based)
// ============================================================

const NAV = `\n\n_Type *0* or *menu* anytime for Main Menu_`;

const flows = {

  // ── MAIN MENU ─────────────────────────────────────────────
  mainMenu: (name) =>
    `🚀 *BITSOL MARKETING*\n\nHello ${name}! 👋 I am *BITSOL Bot*, Your Digital Growth Assistant 🚀\n\n_Clicks to Results — Smarter Marketing_\n\n🔒 Your privacy is our priority.\n\nHow may I help you today?\n\nReply with:\n*1* — 🌐 Our Services\n*2* — 📦 Packages\n*3* — 🤝 Free Consultation`,

  // ── SERVICES MENU ─────────────────────────────────────────
  servicesMenu: () =>
    `🌐 *Our Services*\n\nExplore what BITSOL MARKETING offers!\n\nReply with:\n*1* — 📱 Social Media Marketing\n*2* — 📣 Performance Ads\n*3* — 🎨 Branding & Content\n*4* — 🖥️ Website Development\n*5* — 🤖 AI Chatbots\n*6* — ⚙️ Marketing Automation${NAV}`,

  // ── SERVICE DETAILS ───────────────────────────────────────
  socialMedia: () =>
    `📱 *Social Media Marketing*\n\nWe manage your social presence across all platforms:\n\n✅ Daily posts & reels\n✅ Audience growth strategies\n✅ Hashtag & SEO optimization\n✅ Monthly analytics reports\n✅ Facebook, Instagram, TikTok & LinkedIn\n\nReply with:\n*1* — 📦 See Packages\n*2* — 🤝 Talk to Agent\n*3* — ⬅️ Back to Services${NAV}`,

  performanceAds: () =>
    `📣 *Performance Ads*\n\nWe run high-converting ad campaigns:\n\n✅ Meta Ads (Facebook & Instagram)\n✅ Google Ads (Search & Display)\n✅ TikTok Ads\n✅ Full campaign management\n✅ ROI-focused strategies\n\nReply with:\n*1* — 📦 See Packages\n*2* — 🤝 Talk to Agent\n*3* — ⬅️ Back to Services${NAV}`,

  branding: () =>
    `🎨 *Branding & Content Creation*\n\nBuild a powerful brand identity:\n\n✅ Logo & brand kit design\n✅ Social media graphics\n✅ Video content & reels\n✅ Copywriting & captions\n✅ Brand strategy consultation\n\nReply with:\n*1* — 📦 See Packages\n*2* — 🤝 Talk to Agent\n*3* — ⬅️ Back to Services${NAV}`,

  webDev: () =>
    `🖥️ *Website Development*\n\nWe build professional, fast & mobile-friendly websites:\n\n✅ Business / Portfolio websites\n✅ eCommerce stores\n✅ Landing pages & sales funnels\n✅ Admin panels & dashboards\n✅ Next.js / React / Node.js\n\nReply with:\n*1* — 📦 See Packages\n*2* — 🤝 Talk to Agent\n*3* — ⬅️ Back to Services${NAV}`,

  chatbot: () =>
    `🤖 *AI Chatbots & Automation*\n\nWe build custom bots just like this one!\n\n✅ WhatsApp Business bots\n✅ Website AI chatbots\n✅ Lead capture bots\n✅ Customer support bots\n✅ E-commerce order bots\n\nInterested in a bot for YOUR business?\n\nReply with:\n*1* — 📦 See Packages\n*2* — 🤝 Talk to Agent\n*3* — ⬅️ Back to Services${NAV}`,

  automation: () =>
    `⚙️ *Marketing Automation*\n\nAutomate your entire marketing pipeline:\n\n✅ Email marketing automation\n✅ CRM setup & integration\n✅ Sales funnel automation\n✅ Lead nurturing sequences\n✅ WhatsApp drip campaigns\n\nReply with:\n*1* — 📦 See Packages\n*2* — 🤝 Talk to Agent\n*3* — ⬅️ Back to Services${NAV}`,

  // ── PACKAGES MENU ─────────────────────────────────────────
  packagesMenu: () =>
    `📦 *Our Packages*\n\nChoose the right package for your business:\n\n🥉 *Starter* — Best for small businesses\n🥈 *Growth* — Best for scaling brands\n🥇 *Scale* — Best for established businesses\n💼 *Custom* — Tailored to your needs\n\nReply with:\n*1* — 🥉 Starter Package\n*2* — 🥈 Growth Package\n*3* — 🥇 Scale Package${NAV}`,

  // ── PACKAGE DETAILS ───────────────────────────────────────
  pkgStarter: () =>
    `🥉 *Starter Package*\n\n💰 Price: On Request\n\n✅ Social Media Management (1 platform)\n✅ 15 posts/month\n✅ Basic graphic design\n✅ Monthly report\n✅ WhatsApp support\n\nPerfect for startups & small businesses just getting started online!\n\nReply with:\n*1* — 🤝 Get Started (Free Consult)\n*2* — 📞 Talk to Agent\n*3* — ⬅️ Back to Packages${NAV}`,

  pkgGrowth: () =>
    `🥈 *Growth Package*\n\n💰 Price: On Request\n\n✅ Social Media Management (2 platforms)\n✅ 30 posts/month + reels\n✅ Meta/Google Ads management\n✅ Ad budget optimization\n✅ Bi-weekly reports\n✅ Priority WhatsApp support\n\nIdeal for growing brands ready to scale their digital presence!\n\nReply with:\n*1* — 🤝 Get Started (Free Consult)\n*2* — 📞 Talk to Agent\n*3* — ⬅️ Back to Packages${NAV}`,

  pkgScale: () =>
    `🥇 *Scale Package*\n\n💰 Price: On Request\n\n✅ Full social media management (all platforms)\n✅ Unlimited posts & reels\n✅ Full ad management (Meta + Google + TikTok)\n✅ Website development/maintenance\n✅ AI Chatbot setup\n✅ Weekly reports & strategy calls\n✅ Dedicated account manager\n\nFor businesses serious about dominating their market!\n\nReply with:\n*1* — 🤝 Get Started (Free Consult)\n*2* — 📞 Talk to Agent\n*3* — ⬅️ Back to Packages${NAV}`,

  // ── FREE CONSULTATION ─────────────────────────────────────
  consultation: () =>
    `🤝 *Free Consultation Request*\n\nGreat choice! Let's grow your business together 🚀\n\nPlease reply with your *Full Name* to get started:`,

  // ── TALK TO AGENT ─────────────────────────────────────────
  talkAgent: () =>
    `📞 *Connecting you to our team...*\n\n✅ A BITSOL MARKETING representative will respond shortly.\n\n🕘 Business Hours:\nMon–Sat | 9:00 AM – 6:00 PM (PKT)\n\n📱 Direct Contact:\n*WhatsApp:* +92-XXX-XXXXXXX\n🌐 *Website:* www.bitsolmarketing.com\n📧 *Email:* info@bitsolmarketing.com`,

  // ── INVALID RESPONSE ──────────────────────────────────────
  invalidResponse: () =>
    `❗ I didn't understand that.\n\nPlease reply with a number from the menu, or type *menu* to go back to the Main Menu.`,

  // ── SESSION TIMEOUT ───────────────────────────────────────
  sessionTimeout: (name) =>
    `⏰ Your session has timed out due to inactivity.\n\nWe trust our assistance was valuable, ${name}! Feel free to get in touch anytime.\n\nWishing you a fantastic day! 🌟\n\nType *menu* to start a new session.`,

  // ── CHAT END ──────────────────────────────────────────────
  chatEnd: () =>
    `✅ *Thank you for approaching BITSOL MARKETING!*\n\nThis chat has ended. We'll be in touch soon! 👋\n\nShould you have any more questions, feel free to reach out anytime.\n\nWishing you a fantastic day! 🚀\n\n_Type *menu* anytime to start again._`
};

module.exports = flows;
