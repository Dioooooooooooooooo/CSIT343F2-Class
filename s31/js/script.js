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
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      console.log("Login form submitted");
    });
  }
});
