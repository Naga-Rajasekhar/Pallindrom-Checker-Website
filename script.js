const pallindromeInput = document.querySelector(".input-field input"),
  pallindromeCheckButton = document.querySelector(".checkButton button"),
  resulttext = document.querySelector(".output");

let filterInput;

pallindromeCheckButton.addEventListener("click", () => {
  let reverseInput = filterInput.split("").reverse().join("");
  resulttext.style.display = "block";
  if (filterInput != reverseInput) {
    return (resulttext.innerHTML = `No, ${pallindromeInput.value} isn't a palindrome!`);
  }
  resulttext.innerHTML = `Yes, ${pallindromeInput.value} is a palindrome!`;
});

pallindromeInput.addEventListener("keyup", () => {
  filterInput = pallindromeInput.value.toLowerCase().replace(/[^A-Z0-9]/gi, "");
});
