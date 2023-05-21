window.onload = function() {
    if(navigator.userAgentData.mobile) {
        const mobileBlock = document.createElement("div");
        mobileBlock.style = "width: 100%; height: 100%; background-color: white; position: absolute;";
        
        const mobileText = document.createElement("p");
        mobileText.style = "text-size: 0.5cm";
    }
}

function SwapFrame(iframe) {
    switch(iframe) {
        case 1: document.getElementById("iframe").src = "./formulas.html"; break;
        case 2: document.getElementById("iframe").src = "./definitions.html"; break;
        case 3: document.getElementById("iframe").src = "./authors.html"; break;
    }
}
