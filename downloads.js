const downloads = [

{
title:"Nord Client",
description:"کلاینت اختصاصی نورد",
image:"https://picsum.photos/400/250?10",
video:"",
link:"#"
},

{
title:"Nord Texture Pack",
description:"تکسچرپک رسمی نورد",
image:"https://picsum.photos/400/250?11",
video:"",
link:"#"
},

{
title:"Nord Map",
description:"مپ اختصاصی سرور",
image:"https://picsum.photos/400/250?12",
video:"",
link:"#"
}

];

function renderDownloads(list){

const container =
document.getElementById("downloads-container");

container.innerHTML =
list.map(item=>`

<div class="download-card">

<img src="${item.image}">

<h2>${item.title}</h2>

<p>${item.description}</p>

<a href="${item.link}">
<button>دانلود</button>
</a>

</div>

`).join("");

}

function searchDownloads(){

const text =
document
.getElementById("search")
.value
.toLowerCase();

const result =
downloads.filter(item =>
item.title
.toLowerCase()
.includes(text));

renderDownloads(result);

}

renderDownloads(downloads);
