// Declare a variable for count and initialize it to 0.



let count = 0;
let countNumber = document.getElementById("number-count");
let sum = Number(countNumber.innerHTML) + count;

// A function for every click on the increment button increase count by 1

function increment() {
    count += 1;
    countNumber.innerHTML = count;
    
    
}
// A function for every click on the increment button increase count by 1

function decrement() {
    count -= 1;
    countNumber.innerHTML = count;
}
// A function for every click on the save button and it saves/ adds the incremented number to the entries paragraph

let saveCount = document.getElementById("save-btn")

function save() {
    let countStr = document.getElementById("para");
    countStr.textContent += count + " - ";
    countNumber.innerHTML = 0;
    count = 0; 
    
}

let totalPara = document.getElementById("total");

function increTen() {
    count += 10;
    countNumber.innerHTML = count;
}

function decreTen() {
    count -= 10;
    countNumber.innerHTML = count;
}

