// Create an audio element to play the audio file
const tempoDiv = document.getElementById("tempo");

const audio = new Audio();
// Get the file input element
const fileInput = document.getElementById("fileInput");
// Get the button elements
const openFileButton = document.getElementById("openFileButton");




// Open the file input element when the button is clicked 
openFileButton.addEventListener("click", function () { 
  fileInput.click(); 
}); 
// Set the audio source to the selected file when a file is chosen 
fileInput.addEventListener("change", function () { 
  audio.src = URL.createObjectURL(fileInput.files[0]); 
  audioElement.src = URL.createObjectURL(fileInput.files[0]); 

  audio.playbackRate = 1; 
  audio.volume = 0.5; 
  // Set the text content of the fileName div to the file name 
  fileName.textContent = fileInput.files[0].name; 
  // volumeDiv.innerHTML = Math.floor(audio.volume * 100) + "%"; 
  tempoDiv.innerHTML = audio.playbackRate; 
  // Enable all buttons 
  // Hide the file input element and remove focus from the button 
  fileInput.style.display = "none"; 
  openFileButton.blur(); 
 
  // audio.play(); // Start playing the audio when a file is chosen 
}); 
// Look for keypress O as shortcut to File Open dialog 
document.addEventListener("keydown", function (event) { 
  if (event.code === "KeyO") { 
    openFileButton.click(); 
  } 
});