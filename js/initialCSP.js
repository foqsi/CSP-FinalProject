/* ~~~~~~~~~~~~~~~~~~ Header, Nav, Footer Code ~~~~~~~~~~~~~~~~~~ */

function displayHeader() {
    document.write('<img src="images/flower.png" alt="Left Flower" class="nav-image left" width="100" height="75">');
    document.write("<h1>Edward's JavaScript Website</h1>");
    document.write('<img src="images/flower.png" alt="Right Flower" class="nav-image right" width="100" height="75">');
};

function displayNav() {
    document.write('<ul>');
    document.write('<li><a href="index.html">Home</a></li>');
    document.write('<li><a href="functions.html">Functions</a></li>');
    document.write('<li><a href="controlflow.html">Control Flow</a></li>');
    document.write('<li><a href="#">CSP04</a></li>');
    document.write('<li><a href="#">CSP05</a></li>');
    document.write('<li><a href="#">CSP06</a></li>');
    document.write('<li><a href="#">CSP07</a></li>');
    document.write('<li><a href="#">CSP08</a></li>');
    document.write('<li><a href="#">CSP09</a></li>');
    document.write('<li><a href="#">CSP10</a></li>');
    document.write('<li><a href="#">CSP11</a></li>');
    document.write('<li><a href="#">CSP12</a></li>');
    document.write('</ul>');
}

function displayFooter() {
    document.write('<ul class="hideMobile">');
    document.write('<li><a href="index.html">Home</a></li>');
    document.write('<li><a href="functions.html">Functions</a></li>');
    document.write('<li><a href="controlflow.html">Control Flow</a></li>');
    document.write('<li><a href="#">CSP04</a></li>');
    document.write('<li><a href="#">CSP05</a></li>');
    document.write('<li><a href="#">CSP06</a></li>');
    document.write('<li><a href="#">CSP07</a></li>');
    document.write('<li><a href="#">CSP08</a></li>');
    document.write('<li><a href="#">CSP09</a></li>');
    document.write('<li><a href="#">CSP10</a></li>');
    document.write('<li><a href="#">CSP11</a></li>');
    document.write('<li><a href="#">CSP12</a></li>');
    document.write('</ul>');
    document.write('<a href="mailto:edward@davis.com">edward@davis.com</a>');
    document.write("last Modified: " + document.lastModified);
    document.write('<p>Disclaimer: Oklahoma City Community College does not necessarily endorse the content or the respective links of this webpage.</p>');
}

function displayButton() {
    document.write('<input type="checkbox" id="menu-toggle" class="hideDesktop">');
    document.write('<label for="menu-toggle" class="menu-icon" class="hideDesktop"><span class="hideDesktop">&#9776;</span></label>');
}

