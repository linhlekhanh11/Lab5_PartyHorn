

document.getElementById("volume-number").addEventListener("change", slideChange); 
document.getElementById("volume-slider").addEventListener("change", numberChange);
document.getElementById("radio-air-horn").addEventListener("change", airHornChange);
document.getElementById("radio-car-horn").addEventListener("change", carHornChange);
document.getElementById("radio-party-horn").addEventListener("change", partyHornChange);
document.getElementById("honk-btn").addEventListener("click", playSound);

//change number value by changing slide
function numberChange(){
  var number = document.getElementById("volume-number");
  var slide = document.getElementById("volume-slider");
  var audio = document.getElementById("horn-sound");

  audio.volume = parseInt(number.value)/100;
  number.value = slide.value;
  iconChange(slide.value);
}

//change slide bar by changing number
function slideChange(){
  var number = document.getElementById("volume-number");
  var slide = document.getElementById("volume-slider");
  var audio = document.getElementById("horn-sound");

  audio.volume = parseInt(number.value)/100;
  slide.value = number.value;
  iconChange(number.value);

}

//Volume icon that change depending on the sound level
function iconChange(value) {
  var volume = document.getElementById("volume-image");
  var honkbutton = document.getElementById("honk-btn");

  if (value <= 0) {
    volume.setAttribute("src","./assets/media/icons/volume-level-0.svg");
    honkbutton.disabled = true;
  }
  else {
    honkbutton.disabled=false; 

    if (volume < 34) {
      volume.attributes("src","./assets/media/icons/volume-level-1.svg");
    }
    else if (volume < 67) {
      volume.attributes("src","./assets/media/icons/volume-level-2.svg");
    }
    else {
      volume.attributes("src","./assets/media/icons/volume-level-3.svg");
    }
  }
}

function airHornChange () {
  var audio = document.getElementById("horn-sound");
  var soundImg = document.getElementById("sound-image");
  audio.setAttribute("src","./asset/media/audio/air-horn.mp3");
  soundImg.setAttribute("src","./assets/media/images/air.horn.svg")
  soundImg.setAttribute("alt", "Air Horn");
}

function carHornChange () {
  var audio = document.getElementById("horn-sound");
  var soundImg = document.getElementById("sound-image");
  audio.setAttribute("src","./asset/media/audio/car-horn.mp3");
  soundImg.setAttribute("src","./assets/media/images/car.horn.svg")
  soundImg.setAttribute("alt", "Car Horn");
}

function partyHornChange () {
  var audio = document.getElementById("horn-sound");
  var soundImg = document.getElementById("sound-image");
  audio.setAttribute("src","./asset/media/audio/party-horn.mp3");
  soundImg.setAttribute("src","./assets/media/images/party.horn.svg")
  soundImg.setAttribute("alt", "Party Horn");
}

function playSound(e) {
  e.preventDefault();
  document.getElementById("horn-sound").play();
}
