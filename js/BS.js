
function setLink() {
  const userAgent = navigator.userAgent;

  let link = "d/BSS/PC/BSS2.exe";
if (userAgent.includes('WOW64') || userAgent.includes('Win64')) {
    link = 'd/BSS/PC/BSS2.exe';
  } else {
    link = 'd/BSS/PC/BSS2(x86).exe';;
  }

  const linkElement = document.getElementById('my-link');
  linkElement.href = link;
  downloadGame(link);
}

function setLinkMob() {
  let link = "d/BSS/v2/BSS2.apk";
  const linkElement = document.getElementById('my-link');
  
  linkElement.href = link;
  downloadGame(link);
}

function downloadGame(_link,){
  window.location.replace(_link)
}

function myFunction(imgs) {
  var trailer = document.getElementById("trailer");
  trailer.style.display = "none";
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  expandImg.style.display = "block";
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;

  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}

function myVid(vids) {
  var trailer = document.getElementById("trailer");
  var expandImg = document.getElementById("expandedImg");
  expandImg.style.display = "none";
  trailer.style.display = "block";
}
let totalDownload = 0;

function increaseDownload(){
  totalDownload ++;
  console.log("Downloads = " + totalDownload);
  SaveDownloads();
}

function SaveDownloads(){
  console.log("This is a Dummy")
}

function LoadDownload(){
  document.getElementById("downloadsText") = totalDownload;
}