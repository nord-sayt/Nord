function addDownload(){

const title =
document.getElementById("title").value;

const image =
document.getElementById("image").value;

const link =
document.getElementById("link").value;

const desc =
document.getElementById("desc").value;

alert(
"برای GitHub Pages باید این اطلاعات را داخل downloads.json قرار بدهی."
);

console.log({
title,
image,
link,
desc
});

}
