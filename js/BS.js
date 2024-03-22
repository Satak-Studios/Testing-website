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
  var expandImg = document.getElementById("expandedImg");
  expandImg.style.display = "block";
  expandImg.src = imgs.src;

  expandImg.parentElement.style.display = "block";
}

function myVid(vids) {
  var trailer = document.getElementById("trailer");
  var expandImg = document.getElementById("expandedImg");
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
  var element = document.getElementById('downloads');
  var a = document.getElementById('data-galaxy');
  var b = document.getElementById('data-amazon');
  var c = document.getElementById('data-itch');
  var d = document.getElementById('data-web');
  var bounding = element.getBoundingClientRect();
  var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  if (
    bounding.top >= -bounding.height &&
    bounding.bottom <= viewportHeight + bounding.height
  ) {
    countup(688, a, 8);
    countup(4, b, 500);
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