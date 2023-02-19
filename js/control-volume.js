// Get the volume slider element
const volumeSlider = document.getElementById("volumeSlider");
volumeSlider.addEventListener("touchstart", function (event) {
  event.preventDefault();
});

// Get the current volume
let currentVolume = volumeSlider.value;

// Add event listener for keydown event
document.addEventListener("keydown", function (event) {
    if (event.code === "ArrowUp") {
      // Increment the volume value
      let currentValue = Number(volumeSlider.value);
      let currentVolume = Number(volumeSlider.value);
      volumeSlider.value = Math.min(currentValue + 0.01, 1);
      volumeSlider.value = Math.min(currentVolume + 0.01, 1);
      setVolume(volumeSlider.value);
    } else if (event.code === "ArrowDown") {
      // Decrement the volume value
      let currentValue = Number(volumeSlider.value);
      let currentVolume = Number(volumeSlider.value);
      volumeSlider.value = Math.max(currentValue - 0.01, 0);
      volumeSlider.value = Math.max(currentVolume - 0.01, 0);
      setVolume(volumeSlider.value);
    }
    if (event.code === "ArrowUp" || event.code === "ArrowDown") {
      event.preventDefault();
    }
  });
  
// Add event listeners for each button
const volumeDiv = document.getElementById("volume");

function setVolume(value) {
  audio.volume = value;
  audioElement.volume = value;
  currentVolume = value;
  // document.getElementById("volume-value").innerHTML = value;
}