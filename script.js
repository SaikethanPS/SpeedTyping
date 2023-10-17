let countElement = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let resultElement = document.getElementById("result");
let quoteInputElement = document.getElementById("quoteInput");
let submitButton = document.getElementById("submitBtn");
let resetButton = document.getElementById("resetBtn");
let spinnerElement = document.getElementById("spinner");

let url = "https://apis.ccbp.in/random-quote";
let options = {
    method: "GET"
};
let countedseconds = 0;
let uniqueId = setInterval(function() {
    countedseconds += 1;
    countElement.textContent = countedseconds;
}, 1000);


fetch(url, options)
    .then(function(response) {
        return response.json()
    })
    .then(function(jsonData) {
        quoteDisplay.textContent = jsonData.content
    });

function submitfunction() {
    spinnerElement.classList.remove("d-none");
    let givenpara = quoteDisplay.textContent;
    let typedpara = quoteInputElement.value;
    if (givenpara === typedpara) {
        clearInterval(uniqueId);
        spinnerElement.classList.add("d-none");
        resultElement.textContent = "You typed in " + countedseconds + " seconds";
    } else {
        spinnerElement.classList.add("d-none");
        resultElement.textContent = "You typed incorrect sentence";
    }
}

function resetfunction() {
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            quoteDisplay.textContent = jsonData.content
        });
    countedseconds = 0;
    resultElement.textContent = null;
    quoteInputElement.value = null;
    let uniqueId = setInterval(function() {
        countedseconds += 1;
        countElement.textContent = countedseconds;
    }, 1000);
}



submitButton.addEventListener('click', submitfunction);
resetButton.addEventListener('click', resetfunction);