const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputArea = document.querySelector("#output-area");

function compareValues(sum,luckyNumber){
    if(sum % luckyNumber === 0 ){
       outputArea.innerText ="Your Birthday is Lucky 🎉";
    }else{
        outputArea.innerText ="Your Birthday is not Lucky 🤐";
    }
}

checkNumberButton.addEventListener('click', function checkBirthdayIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum && dob){
    compareValues(sum,luckyNumber.value);
    }
    else{
    outputArea.innerText ="Please Enter Birth Date and Lucky Number 🤔";
    }
} )

function checkBirthDateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum && dob)
    compareValues(sum,luckyNumber.value);
    else
    outputArea.innerText ="Please Enter Birth Date and Lucky Number 🤔";
}

function calculateSum(dob){
    dob = dob.replaceAll("-", " ");
    let sum = 0;
    for(let i = 0; i < dob.length; i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}