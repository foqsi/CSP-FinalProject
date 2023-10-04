"use strict";
//Global Variables

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~ Chapter 11: Updating Web Pages with AJAX ~~~~~~~~~~~~~~~~ */
// The JavaScript code is located in ajax.js

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~ Chapter 12: Introduction to JQuery ~~~~~~~~~~~~~~~ */
// The JavaScript code is located in jqueryplugin.js

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~ Chapter 10 - Touchscreen and Mobile Devices ~~~~~~~~~~~~~~~ */
//The JavaScript code is located in touch.js

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~ Chapter 9 - Managing State Information & Security - Cookies ~~~~~~~ */
// The JavaScript code is located in state.js

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~ Chapter 8: Manipulating Data in Strings and Arrays - Guessing Game ~~~ */
// The JavaScript code is located in strings.js

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~ Chapter 6: Enhancing and Validating Forms - Order Form ~~~~~~~~~ */
// The JavaScript code is located in objects.js
function getLastModifled() {
    let lastModifiedDate = new Date(document.lastModified);
    let formattedDate = lastModifiedDate.getDate() + " - " +
        lastModifiedDate.toLocaleString("en-us", { month: "long" }) + " - " +
        lastModifiedDate.getFullYear();

    return "Last Modified: " + formattedDate;
}
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~ Chapter 6: Enhancing and Validating Forms - Order Form ~~~~~~~~~ */
// The JavaScript code is located in snoot.js

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~ Chapter 5: DOM and DHTML - Photo Gallery ~~~~~~~~~~~~~~~~~ */
// The JavaScript code is located in photos.js and photos.css

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~ Chapter 3: Control Flow - Prime Numbers ~~~~~~~~~~~~~~~~~ */
function validateInput() {
    let firstNum = parseInt(document.getElementById("firstNum").value);
    let secondNum = parseInt(document.getElementById("secondNum").value);

    if (isNaN(firstNum) || isNaN(secondNum)) {
        alert("Error: Both inputs must be a number.");
        return;
    }
    else if (firstNum < 0 || secondNum < 0) {
        alert("Error: All input must be a positive number.");
        return;
    }
    else if (secondNum < firstNum) {
        alert("Error: Second number must be greater than first number.");
        return;
    }

    displayPrimeNumbers(firstNum, secondNum);
}

function displayPrimeNumbers(firstNum, secondNum) {
    function isPrime(num) {
        if (num <= 1) {
            return false;
        }
        for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num !== 1;
    }

    //body
    let tableHTML = "<body style='font-family: Arial, sans-serif;background-color: #919FA7;display: flex;justify-content: center;align-items: center;'><main>";

    //button
    tableHTML += "<button onclick='window.location.reload()' onMouseOver='this.style.color=`#4b778d`' onMouseOut='this.style.color=`black`' style='padding: 5px;width: 200px;border-radius: 10px;cursor: pointer;font-size: large;transition: 0.3s;'>Back</button>";

    //table
    tableHTML += "<table style='display: flex;flex-direction: column;background-color: #C6CDD1;border-radius: 10px;box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);width: 200px;height: auto;'>";

    //table header
    tableHTML += "<thead style='color: #4b778d;font-size: 1.5rem;'>";
    tableHTML += "<tr><th style='padding: 8px;'>Prime Numbers</th></tr></thead>";

    //table body
    tableHTML += "<tbody style='display: flex;flex-direction: column;align-items: center;justify-content: center;height: 100%;text-align: center;'>"

    for (let i = firstNum; i <= secondNum; i++) {
        if (isPrime(i)) {
            tableHTML += `<tr><td style='padding: 8px;
            border-bottom: 1px solid #fff;'>${i}</td></tr>`;
        }
    }
    tableHTML += "</tbody></table></main></body>";
    document.write(tableHTML);
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~ Chapter 2: Functions - BMI Calculator ~~~~~~~~~~~~~~~~~~ */

//(weight * 703) / (height * height) = BMI

function calculateBMI() {
    const weight = parseInt(document.getElementById("weight").value);
    const height = parseInt(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height)) {
        alert("Error: Both weight and height values are required and must be a number.");
        return;
    }
    if (weight <= 0 || weight >= 750) {
        alert("Error: Weight value must be between 0 and 750.");
        return;
    }
    if (height <= 0 || height >= 100) {
        alert("Error. Height value must be between 0 and 100.");
        return;
    }

    const bmi = (weight * 703) / (height * height);
    document.getElementById("bmi-output").value = bmi.toFixed(2);

    console.log(bmi.toFixed(2));
    return bmi.toFixed(2);
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ EVENT LISTENERS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
function createEventListeners() {
    let bmiButton = document.getElementById("bmi");
    if (document.querySelector(".functions-page")) {
        bmiButton.addEventListener("click", calculateBMI);
    }
    let primeBtn = document.getElementById("prime-button");
    if (document.querySelector(".wrapper-control")) {
        primeBtn.addEventListener("click", validateInput);
    }
}

document.addEventListener("click", closeMenuOnClickOutside);
function closeMenuOnClickOutside(event) {
    const menuToggle = document.getElementById("menu-toggle");
    const slideMenu = document.querySelector(".slide-menu");

    if (!slideMenu.contains(event.target) && menuToggle.checked) {
        menuToggle.checked = false;
    }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SETUP PAGE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
function setUpPage() {
    displayHeader();
    displayNav();
    displayFooter();
    createEventListeners();
}

document.addEventListener("DOMContentLoaded", setUpPage);


/* ~~~~~~~~~~~~~~~~~~~~~~~~~ Header, Nav, Footer Code ~~~~~~~~~~~~~~~~~~~~~~~~ */
function displayHeader() {
    let headerContent = '<img src="images/flower.png" alt="Left Flower" class="nav-image left" width="100" height="75">';
    headerContent += "<h1>Edward's JavaScript Website</h1>";
    headerContent += '<img src="images/flower.png" alt="Right Flower" class="nav-image right" width="100" height="75">';
    let pageHeader = document.getElementsByTagName("header");
    pageHeader[0].innerHTML = headerContent;
}

function displayNav() {
    let navContent = '<ul class="hideMobile">';
    navContent += '<li><a href="index.html">Home</a></li>';
    navContent += '<li><a href="functions.html">Functions</a></li>';
    navContent += '<li><a href="controlflow.html">Control Flow</a></li>';
    navContent += '<li><a href="debug.html">Debug</a></li>';
    navContent += '<li><a href="dom.html">DOM</a></li>';
    navContent += '<li><a href="forms.html">Forms</a></li>';
    navContent += '<li><a href="objects.html">Objects</a></li>';
    navContent += '<li><a href="strings.html">Strings</a></li>';
    navContent += '<li><a href="state.html">State</a></li>';
    navContent += '<li><a href="touch.html">Touch</a></li>';
    navContent += '<li><a href="ajax.html">Ajax</a></li>';
    navContent += '<li><a href="jquery.html">jQuery</a></li>';
    navContent += '</ul>';

    let navElement = document.getElementsByTagName("nav")[0];
    navElement.innerHTML = navContent;

    let menuToggle = document.createElement("input");
    menuToggle.setAttribute("type", "checkbox");
    menuToggle.setAttribute("id", "menu-toggle");
    menuToggle.classList.add("hideDesktop");

    let menuIcon = document.createElement("label");
    menuIcon.setAttribute("for", "menu-toggle");
    menuIcon.classList.add("menu-icon", "hideDesktop");
    menuIcon.innerHTML = "<span class='hideDesktop'>&#9776;</span>";

    let navList = document.createElement("ul");
    navList.classList.add("slide-menu", "hideDesktop");
    navList.innerHTML = '<li><a href="index.html">Home</a></li>';
    navList.innerHTML += '<li><a href="functions.html">Functions</a></li>';
    navList.innerHTML += '<li><a href="controlflow.html">Control Flow</a></li>';
    navList.innerHTML += '<li><a href="debug.html">Debug</a></li>';
    navList.innerHTML += '<li><a href="dom.html">DOM</a></li>';
    navList.innerHTML += '<li><a href="forms.html">Forms</a></li>';
    navList.innerHTML += '<li><a href="objects.html">Objects</a></li>';
    navList.innerHTML += '<li><a href="strings.html">Strings</a></li>';
    navList.innerHTML += '<li><a href="state.html">State</a></li>';
    navList.innerHTML += '<li><a href="touch.html">Touch</a></li>';
    navList.innerHTML += '<li><a href="ajax.html">Ajax</a></li>';
    navList.innerHTML += '<li><a href="jquery.html">jQuery</a></li>';

    if (navElement) {
        navElement.appendChild(menuToggle);
        navElement.appendChild(menuIcon);
        navElement.appendChild(navList);
    }
}

function displayFooter() {
    let lastModifiedDate = getLastModifled();
    let footerContent = '<ul class="hideMobile">';
    footerContent += '<li><a href="index.html">Home</a></li>';
    footerContent += '<li><a href="functions.html">Functions</a></li>';
    footerContent += '<li><a href="controlflow.html">Control Flow</a></li>';
    footerContent += '<li><a href="debug.html">Debug</a></li>';
    footerContent += '<li><a href="dom.html">DOM</a></li>';
    footerContent += '<li><a href="forms.html">Forms</a></li>';
    footerContent += '<li><a href="objects.html">Objects</a></li>';
    footerContent += '<li><a href="strings.html">Strings</a></li>';
    footerContent += '<li><a href="state.html">State</a></li>';
    footerContent += '<li><a href="touch.html">Touch</a></li>';
    footerContent += '<li><a href="ajax.html">Ajax</a></li>';
    footerContent += '<li><a href="jquery.html">jQuery</a></li>';
    footerContent += '</ul>';
    footerContent += '<a href="mailto:edward@davis.com">edward@davis.com</a>';
    footerContent += '<p>Disclaimer: Oklahoma City Community College does not necessarily endorse the content or the respective links of this webpage.</p>';
    let pageFooter = document.getElementsByTagName("footer");
    pageFooter[0].innerHTML = footerContent + lastModifiedDate;


}