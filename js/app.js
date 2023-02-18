//const audioElement = document.getElementById("audio");

// set the initial values of the x, y and z values ...
let xValue = 0;
let yValue = 0;
let zValue = 0;

// ... and display them
document.getElementById("xValue").innerHTML = "X = " + xValue.toFixed(2);
document.getElementById("yValue").innerHTML = "Y = " + yValue.toFixed(2);
document.getElementById("zValue").innerHTML = "Z = " + zValue.toFixed(2);
document.getElementById("motion-sensor-value").innerHTML =
  "motion-sensor-value = " + yValue.toFixed(2);

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
      " prevY: " +
      prevY.toFixed(2) +
      " Vol: " +
      currentVolume +
      " Slider: " +
      volumeSlider.value;
    // alert("Passed first if - Y: "+ y +" prevY: " + prevY.toFixed(2));

    /*
    if (Date.now() - prevTime <= 1000) {
        // alert("Threshold");
        // Update the previous y value and time
        prevY = y;
        prevTime = Date.now();

        // Increase the volume if it is less than 1
        if (currentVolume < 1) {
        currentVolume += 0.1;
        }
        // Set the volume of the audio element
        audioElement.volume = currentVolume;
        // Update the volume slider value
        volumeSlider.value = currentVolume;
    }
    */

    // Increase the volume if it is less than 1
    if (Date.now() - prevTime <= 10000000) {
      // alert(currentVolume);
      if (currentVolume <= 1.5) {
        // currentVolume += 0.1;
        //currentVolume=currentVolume+.1
        //alert(currentVolume);
        // Increment the volume value
        let currentValue = Number(volumeSlider.value);
        //let currentVolume = Number(volumeSlider.value);
        if (y > prevY) {
          volumeSlider.value = Math.min(currentValue + 0.1, 1);
          currentVolume = Math.min(currentVolume + 0.1, 1);
          document.getElementById("motion-sensor-value").innerHTML =
            "Y: " +
            y.toFixed(2) +
            " prevY: " +
            prevY.toFixed(2) +
            " Vol: " +
            currentVolume +
            " Slider: " +
            volumeSlider.value +
            " UP";
        }
        if (y < prevY) {
          volumeSlider.value = Math.min(currentValue - 0.1, 1);
          currentVolume = Math.min(currentVolume - 0.1, 1);
          document.getElementById("motion-sensor-value").innerHTML =
            "Y: " +
            y.toFixed(2) +
            " prevY: " +
            prevY.toFixed(2) +
            " Vol: " +
            currentVolume +
            " Slider: " +
            volumeSlider.value +
            " DOWN";
        }

        //if (y<prevY) {
        //  volumeSlider.value = Math.min(currentValue - 0.01, 1);
        //}
        setVolume(volumeSlider.value);
      }
    }

    prevY = y;

    // Set the volume of the audio element
    // audioElement.volume = currentVolume;
    // Update the volume slider value
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


function detectShake(event) {
  const { acceleration } = event;
  if (!acceleration) {
    return;
  }

  const yAcceleration = acceleration.y;

  if (Math.abs(yAcceleration) > shakeThreshold) {
    // Change the volume based on the yAcceleration value
    // For example:
    const volumeChange = Math.sign(yAcceleration) * volumeStep;
    setVolume(currentVolume + volumeChange);
  }
}
