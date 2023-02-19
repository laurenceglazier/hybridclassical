function toggleButton(button) {
  if (button.classList.contains("pressed")) {
    button.classList.remove("pressed");
  } else {
    button.classList.add("pressed");
  }
}