let owner = "mohammadamin";

// ---------------- NAV ----------------
function show(id){
document.querySelectorAll("section").forEach(s=>s.classList.add("hidden"));
document.getElementById(id).classList.remove("hidden");
load();
}

// ---------------- AUTH ----------------
function register(){
localStorage.setItem("user", user.value);
localStorage.setItem("pass", pass.value);
alert("ثبت شد");
}

function login(){
if(localStorage.getItem("user")==user.value &&
localStorage.getItem("pass")==pass.value){
alert("وارد شدی");
} else alert("اشتباه");
}

// ---------------- LOAD ----------------
function load(){

// announcements
document.getElementById("announcements").innerHTML =
JSON.parse(localStorage.getItem("ann")||"[]")
.map(a=>"📢 "+a).join("<br>");

// server info
document.getElementById("ip").innerText =
localStorage.getItem("ip") || "Not Set";

document.getElementById("bale").innerText =
localStorage.getItem("bale") || "Not Set";

// profile
document.getElementById("me").innerText =
localStorage.getItem("user") || "مهمان";

// team
loadTeam();
}

// ---------------- ANNOUNCEMENT ----------------
function addAnn(){
let arr = JSON.parse(localStorage.getItem("ann")||"[]");
arr.push(annText.value);
localStorage.setItem("ann", JSON.stringify(arr));
alert("ثبت شد");
load();
}

// ---------------- SETTINGS ----------------
function saveSettings(){
localStorage.setItem("ip", ipInput.value);
localStorage.setItem("bale", baleInput.value);
alert("ذخیره شد");
load();
}

// ---------------- TEAM ----------------
function saveTeam(){
let team = [t1.value,t2.value,t3.value,t4.value,t5.value];
localStorage.setItem("team", JSON.stringify(team));
alert("تیم ذخیره شد");
loadTeam();
}

function loadTeam(){
let team = JSON.parse(localStorage.getItem("team")||"["","","","",""]");

document.getElementById("teamList").innerHTML =
team.map((t,i)=>`
<div>عضو ${i+1}: ${t || "خالی"}</div>
`).join("");
}

// اول اجرا
load();
