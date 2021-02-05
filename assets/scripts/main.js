// main.js
var sound = document.getElementById("horn-sound");

document.getElementById("honk-btn").addEventListener("click", playSound);
document.getElementById("audio-selection").addEventListener("click", radioPath);
document.getElementById("volume-number").addEventListener("change", changeVolume);
document.getElementById("volume-slider").addEventListener("input", changeVolume);
sound.addEventListener("volumechange", updateVolume);


var airPath = "./assets/media/audio/air-horn.mp3";
var carPath = "./assets/media/audio/car-horn.mp3";
var partyPath = "./assets/media/audio/party-horn.mp3";

var vol0 = "./assets/media/icons/volume-level-0.svg";
var vol1 = "./assets/media/icons/volume-level-1.svg";
var vol2 = "./assets/media/icons/volume-level-2.svg";
var vol3 = "./assets/media/icons/volume-level-3.svg";

function playSound(event) {
    sound.play();
    event.preventDefault();
}

function radioPath(event) {
    if (event.target && event.target.matches("input[type='radio']")) {
        if(event.target.id == "radio-air-horn") sound.src = airPath;
        if(event.target.id == "radio-car-horn") sound.src = carPath;
        if(event.target.id == "radio-party-horn") sound.src = partyPath;
    }
}

function updateVolume(event) {
    document.getElementById("volume-number").value = sound.volume*100;
    document.getElementById("volume-slider").value = sound.volume*100;
}

function changeVolume(event) {
    sound.volume = event.target.value/100;
    var image = document.getElementById("volume-image");
    if(sound.volume == 0) {
        document.getElementById("honk-btn").disabled = true;
        image.src = vol0;
    } else {
        document.getElementById("honk-btn").disabled = false;
        if(sound.volume >= .67) image.src = vol3;
        else if(sound.volume >= .34) image.src = vol2;
        else if(sound.volume >= .01) image.src = vol1;
    }


}