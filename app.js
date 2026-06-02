// ===== NORD PRO MAX APP =====

// ثبت نام کاربر
function register() {
    const u = document.getElementById("user").value;
    const p = document.getElementById("pass").value;

    if (!u || !p) {
        document.getElementById("msg").innerText = "همه فیلدها رو پر کن ❌";
        return;
    }

    localStorage.setItem("nord_user_" + u, p);
    document.getElementById("msg").innerText = "ثبت نام موفق ✔";
}

// ورود کاربر
function login() {
    const u = document.getElementById("user").value;
    const p = document.getElementById("pass").value;

    const saved = localStorage.getItem("nord_user_" + u);

    if (saved === p) {
        document.getElementById("msg").innerText = "خوش آمدی " + u + " 👋";
        localStorage.setItem("current_user", u);
    } else {
        document.getElementById("msg").innerText = "نام کاربری یا رمز اشتباه ❌";
    }
}

// کپی IP سرور
function copyIP() {
    const ip = document.getElementById("ip").innerText;

    navigator.clipboard.writeText(ip).then(() => {
        alert("IP کپی شد ✔");
    });
}

// نمایش کاربر فعلی (اختیاری)
function getCurrentUser() {
    return localStorage.getItem("current_user");
}

// خروج کاربر
function logout() {
    localStorage.removeItem("current_user");
    alert("خارج شدی ✔");
}

// گرفتن IP ذخیره شده (اگر خواستی ارتقا بدی)
function loadIP() {
    const savedIP = localStorage.getItem("server_ip");
    if (savedIP) {
        document.getElementById("ip").innerText = savedIP;
    }
}

// اجرا هنگام لود سایت
window.onload = function () {
    loadIP();
};
