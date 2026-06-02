function download(name){
alert("در حال آماده‌سازی دانلود: " + name);
}

function copyIP(){
let ip = document.getElementById("ip").innerText;
navigator.clipboard.writeText(ip);
alert("IP کپی شد ✔");
}
