
function setLink() {
  // Get the user agent string
  const userAgent = navigator.userAgent;

  // Get the number of logical processors
  const logicalProcessors = navigator.hardwareConcurrency;

  // Determine the CPU architecture based on the user agent string and number of logical processors
  let cpuArchitecture;
  if (userAgent.includes('Android')) {
    if (logicalProcessors <= 2) {
      cpuArchitecture = 'armeabi-v7a';
    } else {
      cpuArchitecture = 'arm64-v8a';
    }
  } else if (userAgent.includes('WOW64') || userAgent.includes('Win64')) {
    cpuArchitecture = 'x64';
  } else {
    cpuArchitecture = 'x86';
  }

  // Modify the link based on the CPU architecture
  let link = "d/BSS/v2/BSS2.apk";
  if (cpuArchitecture === 'x86') {
    //link = 'https://archive.satak.gq/d/BS/c/BALL SURFERS (X86).exe';
    link = link;
  } else {
    //link = 'https://archive.satak.gq/d/BS/c/BALL SURFERS (X64).exe';
    link = "#";
  }

  // Use the link variable to set the href attribute of an <a> element
  const linkElement = document.getElementById('my-link');
  linkElement.href = link;
  downloadGame(link);
}

function setLinkMob() {
  let link = "d/BSS/v2/BSS2.apk";
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
