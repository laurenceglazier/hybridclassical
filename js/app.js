window.addEventListener("deviceorientation", handleOrientation);
window.addEventListener("devicemotion", handleMotion);

function handleOrientation(event) {
var orientationOutput = document.getElementById("orientationOutput");
var orientationProperties = "";
orientationProperties += "alpha: " + event.alpha.toFixed(1) + "<br>";
orientationProperties += "beta: " + event.beta.toFixed(1) + "<br>";
orientationProperties += "gamma: " + event.gamma.toFixed(1) + "<br>";
orientationProperties +=
    "timeStamp (ms): " + event.timeStamp.toFixed(1) + "<br>";
orientationOutput.innerHTML = orientationProperties;
}

function handleMotion(event) {
var motionOutput = document.getElementById("motionOutput");
var motionProperties = "";
motionProperties += "<br>acceleration:<br>";
motionProperties += "x: " + event.acceleration.x.toFixed(1) + "<br>";
motionProperties += "y: " + event.acceleration.y.toFixed(1) + "<br>";
motionProperties += "z: " + event.acceleration.z.toFixed(1) + "<br>";
motionProperties += "<br>accelerationIncludingGravity:<br>";
motionProperties +=
    "x: " + event.accelerationIncludingGravity.x.toFixed(1) + "<br>";
motionProperties +=
    "y: " + event.accelerationIncludingGravity.y.toFixed(1) + "<br>";
motionProperties +=
    "z: " + event.accelerationIncludingGravity.z.toFixed(1) + "<br>";
motionProperties += "<br>rotationRate:<br>";
motionProperties +=
    "alpha: " + event.rotationRate.alpha.toFixed(1) + "<br>";
motionProperties +=
    "beta: " + event.rotationRate.beta.toFixed(1) + "<br>";
motionProperties +=
    "gamma: " + event.rotationRate.gamma.toFixed(1) + "<br>";
motionProperties +=
    "timeStamp (ms): " + event.timeStamp.toFixed(1) + "<br>";
motionOutput.innerHTML = motionProperties;
}
   