// ======================
// NORD ADMIN PANEL
// ======================

const ADMIN_PASSWORD =
"NordOwner_2026";

// ورود

function login(){

const password =
document.getElementById(
"adminPassword"
).value;

if(password === ADMIN_PASSWORD){

localStorage.setItem(
"nordAdmin",
"true"
);

showPanel();

}else{

alert(
"رمز اشتباه است"
);

}

}

// نمایش پنل

function showPanel(){

document
.getElementById(
"loginPage"
).style.display =
"none";

document
.getElementById(
"adminPanel"
).style.display =
"block";

loadSettings();

}

// خروج

function logout(){

localStorage.removeItem(
"nordAdmin"
);

location.reload();

}

// ذخیره تنظیمات

function saveSettings(){

const data = {

serverIp:
document.getElementById(
"serverIp"
).value,

baleChannel:
document.getElementById(
"baleChannel"
).value,

announcement:
document.getElementById(
"announcement"
).value,

aboutText:
document.getElementById(
"aboutText"
).value,

ownerName:
document.getElementById(
"ownerName"
).value,

admins:[
document.getElementById("admin1").value,
document.getElementById("admin2").value,
document.getElementById("admin3").value,
document.getElementById("admin4").value,
document.getElementById("admin5").value
]

};

localStorage.setItem(
"nordSettings",
JSON.stringify(data)
);

alert(
"تنظیمات ذخیره شد"
);

}

// بارگذاری

function loadSettings(){

const saved =
localStorage.getItem(
"nordSettings"
);

if(!saved) return;

const data =
JSON.parse(saved);

document.getElementById(
"serverIp"
).value =
data.serverIp || "";

document.getElementById(
"baleChannel"
).value =
data.baleChannel || "";

document.getElementById(
"announcement"
).value =
data.announcement || "";

document.getElementById(
"aboutText"
).value =
data.aboutText || "";

document.getElementById(
"ownerName"
).value =
data.ownerName || "mohammadamin";

if(data.admins){

document.getElementById(
"admin1"
).value =
data.admins[0] || "";

document.getElementById(
"admin2"
).value =
data.admins[1] || "";

document.getElementById(
"admin3"
).value =
data.admins[2] || "";

document.getElementById(
"admin4"
).value =
data.admins[3] || "";

document.getElementById(
"admin5"
).value =
data.admins[4] || "";

}

}

// دانلود جدید

function addDownload(){

alert(
"در نسخه GitHub Pages باید دانلودها را داخل downloads.json اضافه کنی."
);

}

// تصویر جدید

function addGalleryImage(){

alert(
"در نسخه GitHub Pages باید عکس را داخل پوشه images قرار دهی."
);

}

// بررسی ورود

window.onload = () => {

if(
localStorage.getItem(
"nordAdmin"
) === "true"
){

showPanel();

}

};
