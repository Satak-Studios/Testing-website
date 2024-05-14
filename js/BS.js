function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
function setLink() {
  const userAgent = navigator.userAgent;

  //let link = "d/BSS/PC/BSS2.exe";
  let link = '#';
if (userAgent.includes('WOW64') || userAgent.includes('Win64')) {
    link = 'd/BSS/PC/BSS2.exe';
    //let link = "#";
  } else {
    link = 'd/BSS/PC/BSS2.exe';
    //link = 'd/BSS/PC/BSS2(x86).exe';
    //let link = "#";
  }

  const linkElement = document.getElementById('my-link');
  linkElement.href = link;
  downloadGame(link);
}

function setLinkMob() {
  let link = "d/BSS/v2/BSS2.apk";
  //let link = "#";
  const linkElement = document.getElementById('my-link');
  
  linkElement.href = link;
  downloadGame(link);
}

function downloadGame(_link,){
  window.location.replace(_link)
}

function myFunction(imgs) {
  var trailer;
  var expandImg;
  if (isMobileDevice()) {
    trailer = document.getElementById("trailer-m");
  }else{
    trailer = document.getElementById('trailer')
  }
  trailer.style.display = "none";
  if (isMobileDevice()) {
    expandImg = document.getElementById("expandedImg-m");
  }else{
    expandImg = document.getElementById('expandedImg')
  }
  expandImg.style.display = "block";
  expandImg.src = imgs.src;

  expandImg.parentElement.style.display = "block";
}

function myVid(vids) {
  var trailer;
  var expandImg;
  if (isMobileDevice()) {
    trailer = document.getElementById("trailer-m");
  }else{
    trailer = document.getElementById('trailer')
  }
  if (isMobileDevice()) {
    var expandImg = document.getElementById("expandedImg-m");
  }else{
    var expandImg = document.getElementById('expandedImg')
  }
  expandImg.src = vids.src;
  expandImg.style.display = "none";
  trailer.style.display = "block";
}

//IMportant
var downloads = 8;

function countup(to, element, interval) {
  let from = 0;
  let step = to > from ? 1 : -1;

  let counter = setInterval(function(){
    if ((from + step) * step > to * step) {
      from = to;
      element.innerText = from;
      clearInterval(counter);
    } else {
      from += step;
      element.innerText = from;
    }
  }, interval);
}

function handleScroll() {
  var element;
  var a, b, c, d;

  if (isMobileDevice()) {
    a = document.getElementById('data-galaxy-m');
    b = document.getElementById('data-amazon-m');
    c = document.getElementById('data-itch-m');
    d = document.getElementById('data-web-m');
    element = document.getElementById('downloads-m');
  } else {
    a = document.getElementById('data-galaxy');
    b = document.getElementById('data-amazon');
    c = document.getElementById('data-itch');
    d = document.getElementById('data-web');
    element = document.getElementById('downloads');
  }

  var bounding = element.getBoundingClientRect();
  var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  if (
    bounding.top >= -bounding.height / 2 &&
    bounding.bottom <= viewportHeight + bounding.height / 2
  ) {
    countup(688, a, 8);
    countup(5, b, 500);
    countup(76, c, 50);
    countup(downloads, d, 350);
    
    window.removeEventListener('scroll', handleScroll);
  }
}
window.addEventListener('scroll', handleScroll);

function popUp(){
  var modal = document.getElementById('modal')

  modal.style.display = "block";
}
