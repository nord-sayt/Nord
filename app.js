
// 👑 OWNER
function saveOwner(){
  localStorage.setItem("owner", document.getElementById("ownerInput").value);
}

function showOwner(){
  document.getElementById("ownerBox").innerText =
    "👑 " + (localStorage.getItem("owner") || "No Owner");
}


// 🧊 TEAM
function saveTeam(){
  let arr = document.getElementById("teamInput").value.split("\n");
  localStorage.setItem("team", JSON.stringify(arr));
}

function showTeam(){
  let team = JSON.parse(localStorage.getItem("team") || "[]");

  let box = document.getElementById("teamBox");
  box.innerHTML = "";

  team.forEach(t=>{
    let div = document.createElement("div");
    div.innerText = "🧊 " + t;
    box.appendChild(div);
  });
}


// 📢 ANNOUNCEMENT
function saveAnn(){
  localStorage.setItem("ann", document.getElementById("annInput").value);
  showAnn();
}

function showAnn(){
  document.getElementById("announcements").innerText =
    localStorage.getItem("ann") || "No announcement";
}

showAnn();
