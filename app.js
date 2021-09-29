const dob = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#message");

function calculateSum (dateValue) {
    dateValue = dateValue.replaceAll("-", "");
    let sum = 0;
    for (let i=0; i<dateValue.length; i++) {
        sum = sum + Number(dateValue.charAt(i));        
    }
    return sum;
};

function giveMessage (text) {
    message.innerText = text;
};

function compareValues (sum, numToCheck) {
    console.log(`sum ${sum} lucky num ${numToCheck}`);
    if (sum % numToCheck === 0) {
        giveMessage("Your birthday is lucky 🥳 🥳 🥳");
    } else {
        giveMessage("Your birthday is not lucky 😕");
    }   
};

function checkNumberHandler () {
    const dateValue = dob.value;
    const numToCheck = luckyNumber.value;
    if (dateValue && numToCheck) {
        const sum = calculateSum(dateValue);
        compareValues(sum, numToCheck);
    } else {
        giveMessage("Please enter valid Date of Birth and Lucky Number");
    }    
};

checkButton.addEventListener("click", checkNumberHandler);

function privacyFunction() {
    alert("Privacy Notice: This site does not store your data");
}