// Add event listener for keydown event
document.addEventListener("keydown", function (event) {
    if (event.code === "ArrowLeft") {
      // Decrement the slider value
      let currentValue = Number(tempo.value);
      tempo.value = currentValue - 0.01;
      setTempo(tempo.value);
    } else if (event.code === "ArrowRight") {
      // Increment the slider value
      let currentValue = Number(tempo.value);
      tempo.value = currentValue + 0.01;
      setTempo(tempo.value);
    }
 
    if (event.code === "ArrowLeft" || event.code === "ArrowRight") {
      event.preventDefault();
    }
  });
  
const tempoDiv = document.getElementById("tempo");

function setTempo(value) {
  audio.playbackRate = value;
  document.getElementById("tempo-value").innerHTML = value;
}

