let allDownloads = [];

async function loadDownloads() {
  const container = document.getElementById("downloadsContainer");
  try {
    container.innerHTML = `<div class="loading-box"><h2>⏳ در حال بارگذاری...</h2></div>`;
    const response = await fetch("/api/nord/downloads");
    const data = await response.json();
    allDownloads = data;
    renderDownloads(allDownloads);
  } catch (error) {
    container.innerHTML = `<div class="error-box"><h2>❌ خطا</h2><p>خطا در بارگذاری دانلودها</p></div>`;
  }
}

function renderDownloads(downloads) {
  const container = document.getElementById("downloadsContainer");
  if (downloads.length === 0) {
    container.innerHTML = `<div class="empty-box"><h2>🔍 فایلی پیدا نشد</h2></div>`;
    return;
  }
  container.innerHTML = downloads.map(item => `
    <div class="download-card">
      ${item.image ? `<img src="${item.image}" alt="${item.title}">` : ""}
      <div class="download-info">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <a href="${item.link}" class="download-btn" download>📥 دانلود</a>
      </div>
    </div>
  `).join("");
}

function searchDownloads() {
  const query = document.getElementById("searchInput").value.toLowerCase().trim();
  const filtered = allDownloads.filter(item =>
    item.title.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query)
  );
  renderDownloads(filtered);
}

document.addEventListener("DOMContentLoaded", loadDownloads);
