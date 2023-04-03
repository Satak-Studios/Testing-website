
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
  let link;
  if (userAgent.includes('Android')) {
    link = `https://www.dropbox.com/s/m8rw2eramse8n8d/BALL_SURFERS.apk?dl=1`;
  } else if (cpuArchitecture === 'x86') {
    link = 'https://archive.satak.gq/d/BS/c/BALL SURFERS (X86).exe';
  } else {
    link = 'https://archive.satak.gq/d/BS/c/BALL SURFERS (X64).exe';
  }

  // Use the link variable to set the href attribute of an <a> element
  const linkElement = document.getElementById('my-link');
  linkElement.href = link;
  downloadGame(link);
}

function downloadGame(_link,){
  window.location.replace(_link)
}