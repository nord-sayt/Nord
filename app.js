function show(id){
document.querySelectorAll("section").forEach(s=>s.classList.add("hidden"));
document.getElementById(id).classList.remove("hidden");
load();
}

// ---------------- LOAD ----------------
function load(){

document.getElementById("ip").innerText =
localStorage.getItem("ip") || "Not Set";

document.getElementById("bale").innerText =
localStorage.getItem("bale") || "Not Set";

// announcements
document.getElementById("announcements").innerHTML =
JSON.parse(localStorage.getItem("ann")||"[]")
.map(a=>`📢 ${a}`).join("<br>");

// team
let team = JSON.parse(localStorage.getItem("team")||"["","","","",""]");

document.getElementById("teamList").innerHTML =
team.map((t,i)=>`<div class="card">عضو ${i+1}: ${t || "خالی"}</div>`).join("");

// downloads
let dl = JSON.parse(localStorage.getItem("dl")||"[]");

document.getElementById("downloadList").innerHTML =
dl.map(d=>`
<div class="card">
<h3>${d.title}</h3>
<p>${d.desc}</p>
<a href="${d.link}" target="_blank">⬇ دانلود</a>
</div>
`).join("");
}

// ---------------- OWNER ----------------
function saveSettings(){
localStorage.setItem("ip", ipInput.value);
localStorage.setItem("bale", baleInput.value);
alert("ذخیره شد");
}

function addAnn(){
let arr = JSON.parse(localStorage.getItem("ann")||"[]");
arr.push(annText.value);
localStorage.setItem("ann", JSON.stringify(arr));
load();
}

function saveTeam(){
let team = [t1.value,t2.value,t3.value,t4.value,t5.value];
localStorage.setItem("team", JSON.stringify(team));
load();
}

function addDownload(){
let dl = JSON.parse(localStorage.getItem("dl")||"[]");

dl.push({
title:dTitle.value,
desc:dDesc.value,
link:dLink.value
});

localStorage.setItem("dl", JSON.stringify(dl));
load();
}

// first load
load();
