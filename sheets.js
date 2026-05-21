// ============================================================
// Google Sheets integration — saves leads & student signups
// ============================================================

const { google } = require("googleapis");
const path = require("path");

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

const HEADERS = {
  "Consultation Leads":    ["Timestamp", "Name", "Business", "City", "Service Interest", "WhatsApp"],
  "Student Registrations": ["Timestamp", "Name", "Email",    "City", "Course",           "WhatsApp"]
};

async function getSheets() {
  const auth = new google.auth.GoogleAuth({
    keyFile: path.join(__dirname, "credentials.json"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
  });
  return google.sheets({ version: "v4", auth });
}

async function ensureHeaders(sheets, tab) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: `${tab}!A1:Z1`
  });
  const firstRow = res.data.values?.[0];
  if (!firstRow || firstRow.length === 0) {
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `${tab}!A1`,
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [HEADERS[tab]] }
    });
  }
}

function pkTime() {
  return new Date().toLocaleString("en-PK", { timeZone: "Asia/Karachi" });
}

async function appendLead(data, whatsapp) {
  try {
    const sheets = await getSheets();
    await ensureHeaders(sheets, "Consultation Leads");
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Consultation Leads!A:F",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[pkTime(), data.fullName, data.businessName, data.city, data.service, whatsapp]]
      }
    });
    console.log("✅ Lead saved to Google Sheet");
  } catch (err) {
    console.error("❌ Sheet error (lead):", err.message);
  }
}

async function appendStudent(data, whatsapp) {
  try {
    const sheets = await getSheets();
    await ensureHeaders(sheets, "Student Registrations");
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Student Registrations!A:F",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[pkTime(), data.fullName, data.email, data.city, data.course, whatsapp]]
      }
    });
    console.log("✅ Student saved to Google Sheet");
  } catch (err) {
    console.error("❌ Sheet error (student):", err.message);
  }
}

module.exports = { appendLead, appendStudent };
