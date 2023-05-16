function SwapFrame(iframe) {
    switch(iframe) {
        case 1: document.getElementById("iframe").src = "./formulas.html"; break;
        case 2: document.getElementById("iframe").src = "./definitions.html"; break;
        case 3: document.getElementById("iframe").src = "./authors.html"; break;
    }
}