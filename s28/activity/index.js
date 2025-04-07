console.log("Hello World");

const txtFirstName = document.getElementById("txt-first-name");
const txtLastName = document.getElementById("txt-last-name");
const txtEmail = document.getElementById("txt-email");
const txtPhone = document.getElementById("txt-mobile-number");

const spanFullName = document.getElementById("span-full-name");
const spanEmail = document.getElementById("span-email");
const spanPhone = document.getElementById("span-mobile-number");
const spanFullDetails = document.getElementById("span-full-details");

txtFirstName.addEventListener("keyup", () => {
  spanFullName.innerHTML = `${txtFirstName.value} ${txtLastName.value}`;
});

txtLastName.addEventListener("keyup", () => {
  spanFullName.innerHTML = `${txtFirstName.value} ${txtLastName.value}`;
});

txtEmail.addEventListener("keyup", () => {
  spanEmail.innerHTML = `${txtEmail.value}`;
});

txtPhone.addEventListener("keyup", () => {
  const phoneValue = txtPhone.value;

  if (phoneValue.length > 0 && phoneValue[0] !== "0") {
    spanPhone.innerHTML = `Invalid Number mobile number!`;
    spanPhone.style.color = "red";
  } else if (phoneValue.length === 11) {
    spanPhone.innerHTML = `${txtPhone.value}`;
    spanPhone.style.color = "black";
  }
});

const updateFullDetails = () => {
  if (
    txtFirstName.value.length > 0 &&
    txtLastName.value.length > 0 &&
    txtEmail.value.length > 0 &&
    txtPhone.value.length > 0
  ) {
    spanFullDetails.innerHTML = ` Hello, I am ${txtFirstName.value} ${txtLastName.value}, you can contact me on this number ${txtPhone.value}`;
  } else {
    spanFullDetails = "";
  }
};

txtFirstName.addEventListener("keyup", updateFullDetails);
txtLastName.addEventListener("keyup", updateFullDetails);
txtEmail.addEventListener("keyup", updateFullDetails);
txtPhone.addEventListener("keyup", updateFullDetails);
