function toggleLogin() {
    var loginOverlay = document.getElementById("login-overlay");
    var loginForm = document.getElementById("login-form");
    if (loginForm.style.display === "none") {
      loginOverlay.style.display = "block";
      loginForm.style.display = "block";
    } else {
      loginOverlay.style.display = "none";
      loginForm.style.display = "none";
    }
  }