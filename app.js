// =====================
// NORD APP.JS (PRO SIMPLE)
// =====================

// 👑 Owner
let ownerName = localStorage.getItem("ownerName") || "NORD OWNER";

// 🧊 Team
let team = JSON.parse(localStorage.getItem("team")) || [
  "aliakbar.seyed",
  "ali rahimi",
  "fatemezahra",
  "member4",
  "member5"
];

// 📢 Load announcements
document.addEventListener("DOMContentLoaded", () => {
  let ann = localStorage.getItem("ann");
  if (ann) {
    document.getElementById("announcements").innerText = ann;
  }

  renderChat();
});

// 💬 Send chat message
function sendMsg() {
  let msg = document.getElementById("msg").value;
  if (!msg) return;

  let chat = JSON.parse(localStorage.getItem("chat") || "[]");

  chat.push(msg);
  localStorage.setItem("chat", JSON.stringify(chat));

  renderChat();
  document.getElementById("msg").value = "";
}

// 💬 Render chat
function renderChat() {
  let chatBox = document.getElementById("chat");
  if (!chatBox) return;

  chatBox.innerHTML = "";

  let chat = JSON.parse(localStorage.getItem("chat") || "[]");

  chat.forEach(m => {
    let div = document.createElement("div");
    div.innerText = "🧊 " + m;
    chatBox.appendChild(div);
  });
}

// 👑 Show owner
function showOwner() {
  document.getElementById("ownerBox").innerText = "👑 " + ownerName;
}

// 🧊 Show team
function showTeam() {
  let box = document.getElementById("teamBox");
  box.innerHTML = "";

  team.forEach(t => {
    let div = document.createElement("div");
    div.innerText = "🧊 " + t;
    box.appendChild(div);
  });
}
