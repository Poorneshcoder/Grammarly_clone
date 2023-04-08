const charVal = document.getElementById("textarea");
let totalCount = document.getElementById("total-counter");
let remainingCounter = document.getElementById("remaining-counter");

let userChar = 0;

const updateCounter = () => {
   
    userChar = charVal.value.length;
    totalCount.innerHTML = userChar;
    remainingCounter.innerText = 9999-userChar;
}
charVal.addEventListener("keyup",()=> updateCounter());

// copy text code

const copytext = () => {
    charVal.select();
    charVal.setSelectionRange(0,9999); // for mobile devices 
    navigator.clipboard.writeText(charVal.value);
}