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

  const loginText = document.querySelector(".title-text .login");
      const loginForm = document.querySelector("form.login");
      const loginBtn = document.querySelector("label.login");
      const signupBtn = document.querySelector("label.signup");
      const signupLink = document.querySelector("form .signup-link a");
      signupBtn.onclick = (()=>{
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
      });
      loginBtn.onclick = (()=>{
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
      });
      signupLink.onclick = (()=>{
        signupBtn.click();
        return false;
      });