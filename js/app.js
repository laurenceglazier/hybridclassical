function toggleButton(button) {
  if (button.classList.contains("pressed")) {
    button.classList.remove("pressed");
  } else {
    button.classList.add("pressed");
    document.querySelectorAll(".toggle-button").forEach(function(btn) {
      if (btn !== button) {
        btn.classList.remove("pressed");
      }
    });
  }
}