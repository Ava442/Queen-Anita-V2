//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348189862145";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTURONFdXYXBIeHdESnJwSTVPblQ3OTBUT0szQ2srVWZZVnA5eUE4M2pGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaW1GZkhGZVNqUzIzeGlnbnpNNWNITW42dzYwQTNCdmdlcTFKM21KUnhnQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHQ2owOVBxYTV6bjdncHJKMCtENXdCeE1sQStjRUFtTEo3YzBkaURKWjFRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2MGd2KzdnT3FhZEM0dFh4allNUVpOKzcycUFacGtMdjJ3NVlFaE1nYkFzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdLVU80TEVjZHBDcStoUjM1OUo5Z2VsODAyWGQyd29GV3hLSDFXTTVWVkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik55Mnh2MFBUYlJvNHJZTEJQR041MTJpczAwazZPUmp1RGVLZzk5L3ArMXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUsyN3JkUU1saHNFQnorVzV3TG5VOStBK3JRUXNaTXhaRTJWQ09FRytIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSldpVmcvZUoyS1dkRUhZUFhVN01RQWVWQzZiWGdFUnZMaG9Nd2pzZTAxST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklGbzVYWE45TU5jdGNTd0lLaDNNNUgwUk9Ja3N1dytRR1VQV3ErMGFWdEg2Z3hGSHlnckdpMTMxNGdpeFRPSEZPNG43REQzcEdjUHRoU3dJR0doYmlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODQsImFkdlNlY3JldEtleSI6IkpwSVViaGduM2JGRFRKekJaSk9UQXA4UzhiY0dNaTgvd1lQQ2I0V0xDV289IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODE0MzQ2NDc0NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5RDQ1MTU2NTE2RTg0NUE3QjY5OTVBREUxNjcwOUQxQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI5NzY0MDA5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJNQmtvbDNRSlNYT19QX0dUSHg1RUZRIiwicGhvbmVJZCI6IjY2OWI5YzA2LTY2YjMtNGVjNS05NmUxLTFiZjFlYzUyYWQ5NiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUNUVYTEN2YmtmSXdZOTV3OXVlMkZnYXJDZTg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiblloZi9xZzh4UERMNE5CZTlDNnFwdVJNNXlBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJINU1DWEw5IiwibWUiOnsiaWQiOiIyMzQ4MTQzNDY0NzQ0OjJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tiNS9mQUVFSm0xNkxnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InpWWDdQUGRDNEtlQzhCeWpjWmJDMUxrdGJvSEtoMmxicWkzVFh1NmJlQVE9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImdiaVZSa2ltaE1ibVMxWUF1UnIxMk1NZlMwWWlDbGVWSUU2LzEvbVVVQzlBT1c3VktQeFRlVVcrOFh0YzVuc3o4S3d6TXRIU1FYQ0JJTXNMSFFaK0JBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJGaU1VT09Uc0FWYTJnaTA5NGh5aUVlT1JxQmRWVE0xVytWWnZWOUV6bjE5eW5jVzRuSW1reC94a05COHI4NkZvTGplK1pmQmQ1cHhLY0hjdFo4UkFoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxNDM0NjQ3NDQ6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjMVYrenozUXVDbmd2QWNvM0dXd3RTNUxXNkJ5b2RwVzZvdDAxN3VtM2dFIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5NzY0MDA1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNnLyJ9",
  ""
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "null",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "ᴸᴼᴿᴰꪜ_ᨶꫀꫀ°𝐌𝐃",
  author: process.env.PACK_AUTHER || "ᴸᴼᴿᴰꪜ_ᨶꫀꫀ°𝐌𝐃",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "ᴸᴼᴿᴰꪜ_ᨶꫀꫀ°𝐌𝐃",
  ownername: process.env.OWNER_NAME || "ꪜ_ᨶꫀꫀ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
