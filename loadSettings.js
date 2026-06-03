window.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch("/api/nord/settings");
    const data = await res.json();

    const ip = document.getElementById("server-ip");
    if (ip) ip.textContent = data.serverIp || "play.nord.ir";

    const channel = document.getElementById("bale-channel");
    if (channel) channel.textContent = data.baleChannel || "@minecraft_nord";

    const news = document.getElementById("announcement-text");
    if (news) news.textContent = data.announcement || "به Nord خوش آمدید";

    const about = document.getElementById("about-text");
    if (about) about.textContent = data.aboutText || "درباره سرور";

  } catch (e) {
    console.error("خطا در بارگذاری تنظیمات", e);
  }
});
