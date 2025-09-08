const inputValue = document.getElementById("user-input");
const numbers = document.querySelectorAll(".numbers");
const operations = document.querySelectorAll(".operations");


numbers.forEach(item => {
  item.addEventListener("click", e => {
    if (inputValue.innerText === "0" || inputValue.innerText === "NaN") {
      inputValue.innerText = "";
    }
    inputValue.innerText += e.target.innerText.trim();
  });
});


operations.forEach(item => {
  item.addEventListener("click", e => {
    let value = e.target.innerText;
    let lastChar = inputValue.innerText.slice(-1);

    if (value === "=" && !isNaN(lastChar)) {
      inputValue.innerText = eval(inputValue.innerText);
    } 
    else if (value === "AC") {
      inputValue.innerText = "0";
    } 
    else if (value === "DEL") {
      inputValue.innerText = inputValue.innerText.slice(0, -1) || "0";
    } 
    else if (!isNaN(lastChar)) {
      inputValue.innerText += value;
    }
  });
});
