// Write your code here
const img1 = "https://images.unsplash.com/photo-1620766567920-ccb8cc5c8a87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80";
const img2 = "https://images.unsplash.com/photo-1583339835381-8f89b73c346e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=354&q=80";
const img3 = "https://images.unsplash.com/photo-1641490238587-6b35678fb28b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
const img4 = "https://images.unsplash.com/photo-1599311979600-a629977414ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
const img5 = "https://images.unsplash.com/photo-1647717830880-97983506c007?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";

const imagesOfCoolAnimals = [img1, img2, img3, img4, img5];

let imgIndex = 0;
let intervalVar;
let delayInterval = 2000;

const autoBackBtn = document.getElementById("auto-back-btn");
const backBtn = document.getElementById("back-btn");
const stopBtn = document.getElementById("stop-btn");
const forwardBtn = document.getElementById("forward-btn");
const autoForwardBtn = document.getElementById("auto-forward-btn");
const selectImage = document.getElementById("random-image");

autoBackBtn.addEventListener('click', autoBackEvent);
backBtn.addEventListener('click', backEvent);
stopBtn.addEventListener('click', stopEvent);
forwardBtn.addEventListener('click', forwardEvent);
autoForwardBtn.addEventListener('click', autoForwardEvent);

function showImage() {
  selectImage.src = imagesOfCoolAnimals[imgIndex];
}

function backEvent() {
  imgIndex = imgIndex == 0 ? imagesOfCoolAnimals.length - 1 : imgIndex - 1;
  showImage();
}

function forwardEvent() {
  imgIndex = imgIndex == imagesOfCoolAnimals.length - 1 ? 0 : imgIndex + 1;
  showImage();
}

function autoBackEvent() {
  resetInt(backEvent);
}

function autoForwardEvent() {
  resetInt(forwardEvent);
}

function stopEvent() {
  resetInt();
}

function resetInt(fnc) {
  if (intervalVar) clearInterval(intervalVar);
  if (typeof fnc === "function") {
    intervalVar = setInterval(fnc, delayInterval);
  }
}

showImage();