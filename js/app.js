//const audioElement = document.getElementById("audio");

// set the initial values of the x, y and z values ...
let xValue = 0;
let yValue = 0;
let zValue = 0;

// Get the volume slider element
const volumeSlider = document.getElementById("volumeSlider");
volumeSlider.addEventListener("touchstart", function (event) {
  event.preventDefault();
});

// Get the current volume
let currentVolume = volumeSlider.value;
// Keep track of the previous y value
let prevY = 0;
// Keep track of the time when the previous y value was recorded
let prevTime = Date.now();

// Register the event listener for the accelerometer
window.addEventListener("devicemotion", function (event) {
  // Get the accelerometer values
  var x = event.accelerationIncludingGravity.x;
  var y = event.accelerationIncludingGravity.y;
  var z = event.accelerationIncludingGravity.z;
  // Update the HTML elements with the new values
  document.getElementById("xValue").innerHTML = "X: " + x.toFixed(2);
  document.getElementById("yValue").innerHTML = "Y: " + y.toFixed(2);
  document.getElementById("zValue").innerHTML = "Z: " + z.toFixed(2);
  // alert("Y: " + y +" prevY: " + prevY +" Date.now(): " + Date.now() + " prevTime: " + prevTime);
  // Check if y has changed by more than 1.0 in the last second
  if (Math.abs(y - prevY) > 1.0) {
    document.getElementById("motion-sensor-value").innerHTML =
      "Y: " +
      y.toFixed(2) +
      " Vol: " +
      currentVolume +
      " Slider: " +
      volumeSlider.value;

    volumeSlider.value = currentVolume;
  }
});

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

function toggleButton(button) {
  if (button.classList.contains("pressed")) {
    button.classList.remove("pressed");
  } else {
    button.classList.add("pressed");
  }
}
