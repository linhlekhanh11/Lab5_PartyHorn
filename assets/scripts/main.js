document.getElementById("volume-number").addEventListener("change", slideChange); 
document.getElementById("volume-slider").addEventListener("input", numberChange);
document.getElementById("radio-air-horn").addEventListener("change", airHornChange);
document.getElementById("radio-car-horn").addEventListener("change", carHornChange);
document.getElementById("radio-party-horn").addEventListener("change", partyHornChange);
document.getElementById("honk-btn").addEventListener("click", playSound);

//change number value by changing slide
function numberChange() {
  var number = document.getElementById("volume-number");
  var slide = document.getElementById("volume-slider");
  var audio = document.getElementById("horn-sound");
  number.innerHTML = slider.value;

  audio.volume = parseInt(slide.value)/100;
  number.value = slide.value;
  slider.oninput = function() {
    number.innerHTML = this.value;
  }
  iconVolChange(number.value);
}

//change slide bar by changing number
function slideChange() {
  var number = document.getElementById("volume-number");
  var slide = document.getElementById("volume-slider");
  var audio = document.getElementById("horn-sound");

  audio.volume = parseInt(number.value)/100;
  slide.value = number.value;

  iconVolChange(slide.value);

}

//Volume icon that change depending on the sound level
function iconVolChange(value) {
  var volume = document.getElementById("volume-image");
  var honkbutton = document.getElementById("honk-btn");
  honkbutton.disabled=false;

  if (value == 0) {
    volume.setAttribute("src","./assets/media/icons/volume-level-0.svg");
    honkbutton.disabled = true;
  }
  else {
    if (volume < 34)
      volume.setAttribute("src","./assets/media/icons/volume-level-1.svg");
    else if (volume < 67)
      volume.setAttribute("src","./assets/media/icons/volume-level-2.svg");
    else 
      volume.setAttribute("src","./assets/media/icons/volume-level-3.svg");
  }
}

function airHornChange() {
  var audio = document.getElementById("horn-sound");
  var soundImg = document.getElementById("sound-image");
  audio.setAttribute("src","./assets/media/audio/air-horn.mp3");
  soundImg.setAttribute("src","./assets/media/images/air-horn.svg")
  soundImg.setAttribute("alt", "Air Horn");
}

function carHornChange() {
  var audio = document.getElementById("horn-sound");
  var soundImg = document.getElementById("sound-image");
  audio.setAttribute("src", "./assets/media/audio/car-horn.mp3");
  soundImg.setAttribute("src","./assets/media/images/car.svg")
  soundImg.setAttribute("alt", "Car Horn");
}

function partyHornChange() {
  var audio = document.getElementById("horn-sound");
  var soundImg = document.getElementById("sound-image");
  audio.setAttribute("src", "./assets/media/audio/party-horn.mp3");
  soundImg.setAttribute("src","./assets/media/images/party-horn.svg")
  soundImg.setAttribute("alt", "Party Horn");
}

function playSound(e) {
  e.preventDefault();
  document.getElementById("horn-sound").play();
}
