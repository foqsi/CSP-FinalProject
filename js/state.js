window.addEventListener("DOMContentLoaded", function () {
    let smallButton = document.getElementById("smallText");
    let mediumButton = document.getElementById("mediumText");
    let largeButton = document.getElementById("largeText");
    let targetText = document.getElementsByClassName("modifyText");

    smallButton.onclick = function () {
        updateFontSize("80%", smallButton);
    };

    mediumButton.onclick = function () {
        updateFontSize("100%", mediumButton);
    };

    largeButton.onclick = function () {
        updateFontSize("120%", largeButton);
    };

    function updateFontSize(size, selectedBtn) {
        for (let i = 0; i < targetText.length; i++) {
            targetText[i].style.fontSize = size;
        }
        updateSelectedButton(selectedBtn);
        setFontSizeCookie(size);
    }

    function updateSelectedButton(selectedBtn) {
        smallButton.classList.remove("selected");
        mediumButton.classList.remove("selected");
        largeButton.classList.remove("selected");
        selectedBtn.classList.add("selected");
    }

    function setFontSizeCookie(size) {
        let date = new Date();
        date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
        let expires = "expires=" + date.toUTCString();
        document.cookie = "fontSize=" + size + "; " + expires + ";path=/";
    }


    function getFontSizeCookie() {
        let cookies = document.cookie.split("; ");
        for (let i = 0; i < cookies.length; i++) {
            let cookiePair = cookies[i].split("=");
            if (cookiePair[0] === "fontSize") {
                return cookiePair[1];
            }
        }
        return null;
    }

    function applyFontSizeFromCookie() {
        let fontSize = getFontSizeCookie();
        if (fontSize) {
            let button;
            switch (fontSize) {
                case "80%":
                    button = smallButton;
                    break;
                case "100%":
                    button = mediumButton;
                    break;
                case "120%":
                    button = largeButton;
                    break;
            }
            updateFontSize(fontSize, button);
        }
    }

    applyFontSizeFromCookie();
});
