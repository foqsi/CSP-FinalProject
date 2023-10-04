

//Event listeners
function createEventListeners() {
    const SUBMIT = document.getElementById("submitButton");
    SUBMIT.addEventListener('click', function (event) {
        event.preventDefault();

        if (validate()) {
            getValues();
            displayOutput();
        }
    });
}

function validate() {
    let isValid = true;

    // Validate the buyer name
    let buyerInput = document.getElementById("buyer");
    let buyerError = document.getElementsByClassName("error")[0];
    if (buyerInput.value === "") {
        buyerError.style.visibility = "visible";
        isValid = false;
    } else {
        buyerError.style.visibility = "hidden";
    }

    // Validate the buyer email
    let emailInput = document.getElementById("email");
    let emailError = document.getElementsByClassName("error")[1];
    if (emailInput.value === "") {
        emailError.style.visibility = "visible";
        isValid = false;
    } else {
        emailError.style.visibility = "hidden";
    }

    // Validate the portrait selection
    let portrait = document.querySelector('input[name="fileName"]:checked');
    let portraitError = document.getElementsByClassName("error")[2];
    if (portrait === null) {
        portraitError.style.visibility = "visible";
        isValid = false;
    } else {
        portraitError.style.visibility = "hidden";
    }

    // Validate size selection
    let size = document.querySelector('input[name="size"]:checked');
    let sizeError = document.getElementsByClassName("error")[3];
    if (size === null) {
        sizeError.style.visibility = "visible";
        isValid = false;
    } else {
        sizeError.style.visibility = "hidden";
    }

    // Validate quantity
    let copiesInput = document.getElementById("copies");
    let copiesError = document.getElementsByClassName("error")[4];
    let copies = parseInt(copiesInput.value);
    if (copiesInput.value === "" || isNaN(copies) || copies < 1 || copies > 25) {
        copiesError.style.visibility = "visible";
        isValid = false;
    } else {
        copiesError.style.visibility = "hidden";
    }

    return isValid;
}

function displayOutput() {
    let order = getValues(); // Assuming that getValues() returns the order object

    let cost = order.calculateCost();

    let output = document.getElementsByTagName("main")[0];
    output.innerHTML = '';

    let image = document.createElement("img");
    image.src = order.portrait;
    image.width = 200; // Change this value according to the image dimensions
    image.height = 200; // Change this value according to the image dimensions
    output.appendChild(image);

    let buyerInfo = document.createElement("p");
    buyerInfo.textContent = `Buyer: ${order.buyer}`;
    output.appendChild(buyerInfo);

    let emailInfo = document.createElement("p");
    emailInfo.textContent = `Email: ${order.email}`;
    output.appendChild(emailInfo);

    let copiesInfo = document.createElement("p");
    copiesInfo.textContent = `Copies: ${order.copies}`;
    output.appendChild(copiesInfo);

    let sizeInfo = document.createElement("p");
    sizeInfo.textContent = `Size: ${order.size}`;
    output.appendChild(sizeInfo);

    let costInfo = document.createElement("p");
    costInfo.textContent = `Cost: $${cost.toFixed(2)}`;
    output.appendChild(costInfo);
}

function getValues() {
    let form = document.forms[0];
    let portrait;
    let size;

    // Retrieve the value from the radio buttons using a for loop
    for (let i = 0; i < form.fileName.length; i++) {
        if (form.fileName[i].checked) {
            portrait = form.fileName[i].value;
            break;
        }
    }

    for (let i = 0; i < form.size.length; i++) {
        if (form.size[i].checked) {
            size = form.size[i].value;
            break;
        }
    }

    let copies = parseInt(form.copies.value);
    let buyer = form.buyer.value;

    let order = new PortraitOrder(portrait, copies, size, buyer);

    // Add email property using prototype
    order.email = form.email.value;

    return order;
}


class PortraitOrder {
    constructor(portrait, copies, size, buyer) {
        this.portrait = portrait;
        this.copies = copies;
        this.size = size;
        this.buyer = buyer;
    }

    calculateCost() {
        let price;

        switch (this.size) {
            case "4-wallets":
                price = 10;
                break;
            case "2-4x6":
                price = 10;
                break;
            case "5x7":
                price = 10;
                break;
            case "8x10":
                price = 20;
                break;
            case "11x14":
                price = 30;
                break;
            default:
                price = 0;
        }
        return price * this.copies;
    }
}