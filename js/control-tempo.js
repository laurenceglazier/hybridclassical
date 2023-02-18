// Initialize the slider and sensor data
var tempo = document.getElementById("tempo");
var xAccel = 0;
var yAccel = 0;
var zAccel = 0;
var xGyro = 0;
var yGyro = 0;
var zGyro = 0;
var revolutionCount = 0;
var direction = 0;

// Request permission to access the device's sensors
if (
  typeof DeviceMotionEvent !== "undefined" &&
  typeof DeviceMotionEvent.requestPermission === "function"
) {
  DeviceMotionEvent.requestPermission()
    .then((permissionState) => {
      if (permissionState === "granted") {
        window.addEventListener("devicemotion", handleMotionEvent, true);
      }
    })
    .catch(console.error);
} else {
  window.addEventListener("devicemotion", handleMotionEvent, true);
}

// Function to handle motion events and update slider position
function handleMotionEvent(event) {
  // Get accelerometer and gyroscope data
  xAccel = event.acceleration.x;
  yAccel = event.acceleration.y;
  zAccel = event.acceleration.z;
  xGyro = event.rotationRate.alpha;
  yGyro = event.rotationRate.beta;
  zGyro = event.rotationRate.gamma;

  // Determine if the device is undergoing a corkscrew motion
  //var corkscrewMotion = Math.abs(xAccel) > 5 && Math.abs(yGyro) > 5;
  var corkscrewMotion = Math.abs(yGyro) > 5 && Math.abs(zGyro) > 5;
  // continue from here ********** y>5, z<-5 is clockwise, y<-5, z>5 anticlockwise

  // Update slider position based on motion
  if (corkscrewMotion) {
    //console.log(`Values: yGyro: ${yGyro.toFixed(1)}, zGyro: ${zGyro.toFixed(1)}`);

    //console.log(`corkscrewMotion: ${corkscrewMotion}`);
    //console.log(`corkscrew motion`);
    // Determine the direction of the corkscrew motion
    var newDirection = yGyro > 0 ? 1 : -1;

    // Check if the direction has changed
    if (newDirection !== direction) {
      direction = newDirection;
      revolutionCount = 0;
    }

    // Update the revolution count
    var revolutionThreshold = 0.4505;
    var revolutionDelta = Math.abs(yGyro) / 100;
    revolutionCount += revolutionDelta;
// Log the current values of revolutionCount and revolutionThreshold
console.log(`revolutionCount: ${revolutionCount}, revolutionThreshold: ${revolutionThreshold}`);
    // If the revolution count has reached the threshold, update the slider position
    if (revolutionCount >= revolutionThreshold) {
      console.log('Corkscrew gesture detected!');
      // Update the slider position based on the direction
      var sliderDelta = direction * 0.02; // One revolution counts as one increment/decrement of 0.01
      var currentValue = Number(tempo.value);
      tempo.value = (currentValue + sliderDelta).toFixed(2);
      setTempo(tempo.value);

      // Reset the revolution count
      revolutionCount = 0;

      console.log(`tempo updated in handleMotionEvent: ${tempo.value}`);
    }
  }
}

// Add event listeners for left and right arrow keys
document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowLeft") {
    // Decrement the slider value
    var currentValue = Number(tempo.value);
    tempo.value = (currentValue - 0.01).toFixed(2);
    setTempo(tempo.value);
  } else if (event.code === "ArrowRight") {
    // Increment the slider value
    var currentValue = Number(tempo.value);
    tempo.value = (currentValue + 0.01).toFixed(2);
    setTempo(tempo.value);

    console.log(`tempo updated with arrow key: ${tempo.value}`);
  }

  if (event.code === "ArrowLeft" || event.code === "ArrowRight") {
    event.preventDefault();
  }
});

function setTempo(value) {
  audio.playbackRate = value;
  document.getElementById("tempo-value").innerHTML = value;
}
