fetch("downloads.json")
.then(response => response.json())
.then(data => {

window.allDownloads = data;

renderDownloads(data);

});

function renderDownloads(downloads){

const container =
document.getElementById("downloads-container");

container.innerHTML =
downloads.map(item => `

<div class="download-card">

<img src="${item.image}" alt="${item.title}">

<h2>${item.title}</h2>

<p>${item.description}</p>

<a href="${item.link}">

<button>
دانلود
</button>

</a>

</div>

`).join("");

}

function searchDownloads(){

const text =
document.getElementById("search")
.value
.toLowerCase();

const result =
window.allDownloads.filter(item =>

item.title
.toLowerCase()
.includes(text)

);

renderDownloads(result);

}
