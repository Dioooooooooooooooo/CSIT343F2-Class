document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("registerForm");

  if (registerForm) {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById(
      "confirmPasswordError"
    );
    const successModal = document.getElementById("successModal");
    const okBtn = document.getElementById("okBtn");

    function validateEmail() {
      const emailValue = email.value.trim();
      const isValid = emailValue.includes("@");

      if (!isValid) {
        emailError.style.display = "block";
      } else {
        emailError.style.display = "none";
      }

      return isValid;
    }

    function validatePassword() {
      const passwordValue = password.value;
      const isValid = passwordValue.length >= 8;

      if (!isValid) {
        passwordError.style.display = "block";
      } else {
        passwordError.style.display = "none";
      }

      return isValid;
    }

    function validateConfirmPassword() {
      const passwordValue = password.value;
      const confirmValue = confirmPassword.value;
      const isValid = passwordValue === confirmValue;

      if (!isValid) {
        confirmPasswordError.style.display = "block";
      } else {
        confirmPasswordError.style.display = "none";
      }

      return isValid;
    }

    email.addEventListener("input", validateEmail);
    password.addEventListener("input", validatePassword);
    confirmPassword.addEventListener("input", validateConfirmPassword);

    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const isEmailValid = validateEmail();
      const isPasswordValid = validatePassword();
      const isConfirmValid = validateConfirmPassword();

      if (isEmailValid && isPasswordValid && isConfirmValid) {
        const userData = {
          email: email.value.trim(),
          password: password.value,
        };

        fetch("https://movieapp-api-lms1.onrender.com/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);

            if (data.message === "Registered Successfully") {
              successModal.style.display = "flex";
            } else {
              alert(
                "Registration failed: " + (data.message || "Unknown error")
              );
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            alert("Registration failed: " + error.message);
          });
      }
    });

    if (okBtn) {
      okBtn.addEventListener("click", function () {
        successModal.style.display = "none";
        registerForm.reset();
      });
    }
  }

  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    const loginEmail = document.getElementById("loginEmail");
    const loginPassword = document.getElementById("loginPassword");

    const loginEmailError = document.createElement("div");
    loginEmailError.className = "error-message";
    loginEmailError.id = "loginEmailError";
    loginEmailError.textContent = "Enter a valid email address.";
    loginEmailError.style.display = "none";

    const loginPasswordError = document.createElement("div");
    loginPasswordError.className = "error-message";
    loginPasswordError.id = "loginPasswordError";
    loginPasswordError.textContent = "Password must be at least 8 characters.";
    loginPasswordError.style.display = "none";

    loginEmail.parentNode.appendChild(loginEmailError);
    loginPassword.parentNode.appendChild(loginPasswordError);

    const loginSuccessModal = document.createElement("div");
    loginSuccessModal.id = "loginSuccessModal";
    loginSuccessModal.className = "modal";
    loginSuccessModal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h2>This page says</h2>
          <p>Login Successful!</p>
        </div>
        <button id="loginOkBtn" class="btn btn-ok">OK</button>
      </div>
    `;
    document.body.appendChild(loginSuccessModal);

    document
      .getElementById("loginOkBtn")
      .addEventListener("click", function () {
        loginSuccessModal.style.display = "none";
        window.location.href = "movies.html";
      });

    function validateLoginEmail() {
      const emailValue = loginEmail.value.trim();
      const isValid = emailValue.includes("@");

      if (!isValid) {
        loginEmailError.style.display = "block";
        loginEmail.classList.add("error");
      } else {
        loginEmailError.style.display = "none";
        loginEmail.classList.remove("error");
      }

      return isValid;
    }

    function validateLoginPassword() {
      const passwordValue = loginPassword.value;
      const isValid = passwordValue.length >= 8;

      if (!isValid) {
        loginPasswordError.style.display = "block";
        loginPassword.classList.add("error");
      } else {
        loginPasswordError.style.display = "none";
        loginPassword.classList.remove("error");
      }

      return isValid;
    }

    loginEmail.addEventListener("input", validateLoginEmail);
    loginPassword.addEventListener("input", validateLoginPassword);

    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const isEmailValid = validateLoginEmail();
      const isPasswordValid = validateLoginPassword();

      if (isEmailValid && isPasswordValid) {
        const userData = {
          email: loginEmail.value.trim(),
          password: loginPassword.value,
        };

        fetch("https://movieapp-api-lms1.onrender.com/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);

            if (data.access) {
              localStorage.setItem("token", data.access);

              loginSuccessModal.style.display = "flex";

              alert("Login Successful!");
            } else {
              alert("Login failed: " + (data.message || "Invalid credentials"));
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            alert("Login failed: " + error.message);
          });
      }
    });
  }

  const style = document.createElement("style");
  style.textContent = `
    input.error {
      border-color: #d9534f !important;
    }
    
    .form-group input:focus {
      border-color: #007bff;
      outline: none;
    }
    
    .btn-primary:hover {
      background-color: #0069d9;
    }
    
    .error-message {
      color: #d9534f;
      font-size: 0.875rem;
      margin-top: 0.25rem;
      animation: fadeIn 0.3s;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;
  document.head.appendChild(style);
});
