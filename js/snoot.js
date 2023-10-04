/*    JavaScript 6th Edition
 *    Chapter 6
 *    Chapter case

 *
 *    Variables and functions
 *    Author:
 *    Date:

 *    Filename: snoot.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

const SUBMIT = document.getElementById("orderButton");

/* create event listeners */
function createEventListeners() {

    var phnFields = document.getElementsByName("BillingPhone");
    for (var i = 0; i < phnFields.length; i++) {
        if (phnFields[i].addEventListener) {
            phnFields[i].addEventListener("input", advancePhone, false);
        } else if (phnFields[i].attachEvent) {
            phnFields[i].attachEvent("oninput", advancePhone);
        }
    }

    var delivphnFields = document.getElementsByName("DeliveryPhone");
    for (var i = 0; i < delivphnFields.length; i++) {
        if (delivphnFields[i].addEventListener) {
            delivphnFields[i].addEventListener("input", advanceDelivPhone, false);
        } else if (delivphnFields[i].attachEvent) {
            delivphnFields[i].attachEvent("oninput", advanceDelivPhone);
        }
    }

    var matchAddress = document.getElementById("sameAddr");
    if (matchAddress.addEventListener) {
        matchAddress.addEventListener("click", copyAddressInfo);
    }

    document.getElementById("delivMo").addEventListener("change", verifyDeliveryDate);
    document.getElementById("delivDay").addEventListener("change", verifyDeliveryDate);
    document.getElementById("delivYr").addEventListener("change", verifyDeliveryDate);
    document.getElementById("expMo").addEventListener("change", verifyExpirationDate);
    document.getElementById("expYr").addEventListener("change", verifyExpirationDate);

    // document.getElementById("myForm").addEventListener("submit", alertCreditCard);

}





function alertCreditCard(event) {
    if (!isCardSelected("PaymentType")) {
        alert("Please select a credit card type.");
        event.preventDefault();
    }
}

function isCardSelected() {
    let radioButtons = document.getElementsByName("PaymentType");

    for (let i = 0; i < radioButtons; i++) {
        if (radioButtons[i].checked) {
            return true;
        }
    }
    return false;
}

function verifyDeliveryDate() {
    let deliveryMonth = document.getElementById("delivMo");
    let deliveryDay = document.getElementById("delivDay");
    let deliveryYear = document.getElementById("delivYr");

    if (deliveryMonth.selectedIndex === 0) {
        deliveryMonth.setCustomValidity("Please select the delivery month.");
        console.log("invalid month");
    } else {
        deliveryMonth.setCustomValidity("");
        console.log("valid month");
    }
    if (deliveryDay.selectedIndex === 0) {
        deliveryDay.setCustomValidity("Please select the delivery day.");
    } else {
        deliveryDay.setCustomValidity("");
        console.log("valid day");

    }
    if (deliveryYear.selectedIndex === 0) {
        deliveryYear.setCustomValidity("Please select the delivery year.");
    } else {
        deliveryYear.setCustomValidity("");
        console.log("valid year");
    }
}

function verifyExpirationDate() {
    let expirationMonth = document.getElementById("expMo");
    let exiprationYear = document.getElementById("expYr");

    if (expirationMonth.selectedIndex === 0) {
        expirationMonth.setCustomValidity("Please select expiration month.");
        console.log("invalid exp month");
    } else {
        expirationMonth.setCustomValidity("");
        console.log("valid exp month");
    }
    if (exiprationYear.selectedIndex === 0) {
        exiprationYear.setCustomValidity("Please select expiration year.");
        console.log("invalid exp year");
    } else {
        exiprationYear.setCustomValidity("");
        console.log("valid exp year");
    }
}

function copyAddressInfo() {
    let billFName = document.getElementById("billFName");
    let billLName = document.getElementById("billLName");
    let billStreet = document.getElementById("billStreet");
    let billCity = document.getElementById("billCity");
    let billState = document.getElementById("billState");
    let billZip = document.getElementById("billZip");
    let billPhone1 = document.getElementById("billPhone1");
    let billPhone2 = document.getElementById("billPhone2");
    let billPhone3 = document.getElementById("billPhone3");
    let delivFName = document.getElementById("delivFName");
    let delivLName = document.getElementById("delivLName");
    let delivStreet = document.getElementById("delivStreet");
    let delivCity = document.getElementById("delivCity");
    let delivState = document.getElementById("delivState");
    let delivZip = document.getElementById("delivZip");
    let delivPhone1 = document.getElementById("delivPhone1");
    let delivPhone2 = document.getElementById("delivPhone2");
    let delivPhone3 = document.getElementById("delivPhone3");


    delivFName.value = billFName.value;
    delivLName.value = billLName.value;
    delivStreet.value = billStreet.value;
    delivCity.value = billCity.value;
    delivState.value = billState.value;
    delivZip.value = billZip.value;
    delivPhone1.value = billPhone1.value;
    delivPhone2.value = billPhone2.value;
    delivPhone3.value = billPhone3.value;
}






/* run setup functions when page finishes loading */
if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}


function advancePhone() {
    var phnFields = document.getElementsByName("BillingPhone");
    var currentField = document.activeElement;
    if (currentField.value.length === currentField.maxLength) {
        if (currentField === phnFields[0]) {
            phnFields[1].focus();
        }
        if (currentField === phnFields[1]) {
            phnFields[2].focus();
        }
        if (currentField === phnFields[2]) {
        }
    }
}

function advanceDelivPhone() {
    var phnFields = document.getElementsByName("DeliveryPhone");
    var currentField = document.activeElement;
    if (currentField.value.length === currentField.maxLength) {
        if (currentField === phnFields[0]) {
            phnFields[1].focus();
        }
        if (currentField === phnFields[1]) {
            phnFields[2].focus();
        }
        if (currentField === phnFields[2]) {
        }
    }
}