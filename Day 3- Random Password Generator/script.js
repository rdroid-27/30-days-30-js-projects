const passBox = document.querySelector("#pass");
const length = 16;
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const specialSymbols = "!@#$%^&*()_+-={}[]|~?/<>";

const allCharacters = upperCase + lowerCase + number + specialSymbols;

const genBtn = document.querySelector("#genBtn");

genBtn.addEventListener("click", () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += specialSymbols[Math.floor(Math.random() * specialSymbols.length)];

  while (length > password.length) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  passBox.value = password;
  copyPassword.style.cursor = "pointer";
});

// function to copy password
function copyPassword() {
    passBox.select();  
    navigator.clipboard.writeText(passBox.value);
    alert("PASSWORD COPIED TO CLIPBOARD!");
}
