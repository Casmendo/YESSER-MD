const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid05SelZLd3puNkpmcHdmZ1huZTZ2UW5IQXhjOGdFeHFkNGdDazRYa2dGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWc2OGN2elIxZmM1V0lZNWV4dFBIdi8xbER1eUs5OVBxeTBhNkYvZjJnOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTHNRMFF4ZG02TnZUUWZtMTc5Qk52dThHYTRDN0Z2bFlTR1RpN3NBK1ZrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6czE5VGI2ZHBVKzJaZGg3dFFFcVJBU2p2VXlZREdoNUo2cWlRZGN5VUhvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRHNUlNM2hHc3FRNXVTaTZWWEl5Mlc3UFpIUnBXblZTUW1DdVI5MUZ6bDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im8zL2R1QTdaWnh1QnVDekVxNXljczFaOGNib0wxVlJlakFUVnBnUUpVeUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0dPWmw1Q3lsNDE4eHBLbG1qTk5FeEYwbVpkaEZuN3FJbUdsV0EzM0EzTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0FVeXNOck82bzNBejRRSWc1RHdQR2NsMHU0dTJycHFqeVBrSnZ0eDR3Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxKSHY4ang3dTBpOExUSWtkNHExeUhId1BKa0lDYUloOE1nUFE2Y2JZdnBUUE8vZEtRS3ZlblRHWVFWdVZ3SkVjQ040Y3daYXZDQm13amI0ZHlVTmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAxLCJhZHZTZWNyZXRLZXkiOiIzWmg0Y0R4UnQybHZlaWUxMVVHTFdobnN1U2tzK0tFVTNHQmpZVys4VW5jPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJyVkRYUU5nZVNvYUI5QWMyVmpjMTNBIiwicGhvbmVJZCI6IjJlMmNmMTQzLWE0NTQtNGQ1Yi05YzdiLTRiZWY1NDU4NmRjZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TUxadDNXTkdOdXlYR28wN2hiV3BKeS9rems9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFBkcnR1d2xNYmltZnlvUFdDSW41bVhNamNjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlE1RFpWSzJNIiwibWUiOnsiaWQiOiIyMzQ5MTMzNjI2MTEwOjE2QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQQ0ZqTzRDRVBMMm1iMEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJidmk2cWlpWjYzcVQrcmV1MWtTRGR0TDdXOVhqcy9TUkYxTTdDZlZHNkJnPSIsImFjY291bnRTaWduYXR1cmUiOiIyZ2RJZnMwRTlUanZjZ1phclN1U2FVWFBBYVVoSWVGUHR2NzdoVlRYdUozQnVIWjkvZHpyTVFNTVZ0N1YrSWt2VmRKdmNGdi85dTdkNzdKbmY2eHRBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTTZyZmhBVGVybkxBMGdoMFRCREgweTFNSmsyc20zbWpJTU9ibnJzbVBRbndlcmRtL2hyS0w3NlFsaC9MRml3ZXI5L2k2QUxQUy85THZtbTU4Vy92Z0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTMzNjI2MTEwOjE2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlc3NHVxb29tZXQ2ay9xM3J0WkVnM2JTKzF2VjQ3UDBrUmRUT3duMVJ1Z1kifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mzg5NjM4NDB9",
    CAPTION: process.env.CAPTION || "code by yessertech ",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "true", // Added auto-read configuration
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/3kdkf6.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M YESSER-MD WHATSAPP BOT 👍🤠",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    FAKE_TYPING: process.env.FAKE_TYPING || "false",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_REACT: process.env.OWNER_REACT || "true",
    BOT_NAME: process.env.BOT_NAME || "yessertech",
    STATUS_REPLY: process.env.STATUS_REPLY || "`✅ your status seen 👀`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
