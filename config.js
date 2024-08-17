const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = [""];
global.OwnerNumber = ["2349124114857"];
global.ownertag = [""]; 
global.OwnerName =  "Beekeeper 🐝🐝";
global.BotName = "🐦Makino-md-v2";
global.packname = "Beekeeper 🐝🐝";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || "{"noiseKey":{"private":{"type":"Buffer","data":"cDbJwwgW/3ifIHtZHJXsCxV93KtJE/dtIemUvqIc/Hg="},"public":{"type":"Buffer","data":"uCgMAx5DZY8U1OdHVxwXNjN6/4T6bFAltaiy/nUn7UE="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"qCeDb0tZKwGO8IRavNsjxETYaFpET8bjMeFl//8M21Q="},"public":{"type":"Buffer","data":"a0W2shgSxfd2YxB8ydP3l/8c1LWNEvevHgE8/t7zLxY="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"GF74rLoDmgFNn/k75GX5aDq7ImCKq2N0GN3lveLuzFU="},"public":{"type":"Buffer","data":"QpbTKvlDjvGlAazBeg0pXEmYoe1zNo/gKn/qFtyodik="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"CFcImmz4QfHrujzY2ZeRPpkRwaG20pTgV3bBfsLas2Q="},"public":{"type":"Buffer","data":"Nl3w7XpRzqiWlIn2O1CHpBjXsF/QL8ZitXDQgznBXx0="}},"signature":{"type":"Buffer","data":"OJWlS4ZYPR1vTss04r2QdNzmcxiflWm0Jl3Y45/RHYDunR68NEtZezh12GnFreJI+GBPBkiV1zahWiukQpqMhA=="},"keyId":1},"registrationId":17,"advSecretKey":"6LrGteNs17KS+efQcw+k+UsycoOgR3aqxR2ZHVeB0do=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"o09vw67nQXyp1IS93-y4XQ","phoneId":"6bd6adfb-01e1-404f-882f-fb4e040d511b","identityId":{"type":"Buffer","data":"lH0HwEH2NHDO+rwEAo4oNpwrfhw="},"registered":true,"backupToken":{"type":"Buffer","data":"qN+r0rWTWGK9Rbl6mEQx6bNTbP8="},"registration":{},"pairingCode":"6CN5TXZ7","me":{"id":"2349124114857:60@s.whatsapp.net"},"account":{"details":"CP6y1o0FEOCpgrYGGAMgACgA","accountSignatureKey":"c23DTAClCgQb5VMh7+uMK5JYeiQZ3PrR/rSqUsB7GxI=","accountSignature":"+sRFdbtkv61bwHuCzv0KxF9hiWqfA+MKmqbSY1wxUm5JGilyk/vWX+dcNLw64cbbJT306ycxO4lndF4icPBLDA==","deviceSignature":"w539jMjWB8dC1WQXELx2KiK0npoUdPTGBdbLjuUgxvv4Cwiw24n2e7YN2eaYPfOsSJpANqgA2HpMj6MMfLx3gg=="},"signalIdentities":[{"identifier":{"name":"2349124114857:60@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BXNtw0wApQoEG+VTIe/rjCuSWHokGdz60f60qlLAexsS"}}],"platform":"android","lastAccountSyncTimestamp":1723897070,"myAppStateKeyId":"AAAAAEgX"}"
global.prefa = ["/"]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
