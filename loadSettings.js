// loadSettings.js

window.addEventListener(
"DOMContentLoaded",
() => {

const saved =
localStorage.getItem(
"nordSettings"
);

if(!saved) return;

const data =
JSON.parse(saved);

// IP

const ip =
document.getElementById(
"server-ip"
);

if(ip){

ip.textContent =
data.serverIp || "play.nord.ir";

}

// کانال بله

const channel =
document.getElementById(
"bale-channel"
);

if(channel){

channel.textContent =
data.baleChannel ||
"@minecraft_nord";

}

// اطلاعیه

const news =
document.getElementById(
"announcement-text"
);

if(news){

news.textContent =
data.announcement ||
"به Nord خوش آمدید";

}

// درباره ما

const about =
document.getElementById(
"about-text"
);

if(about){

about.textContent =
data.aboutText ||
"درباره سرور";

}

});
