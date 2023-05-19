const dataObj =
{
    data: [
        {
            name: "def-zero",
            definition: "0 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            color: "yellow"
        },
        {
            name: "def-one",
            definition: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            color: "orange"
        },
        {
            name: "def-two",
            definition: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            color: "green"
        },
        {
            name: "def-three",
            definition: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            color: "blue"
        },
        {
            name: "def-three",
            definition: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            color: "blue"
        }
    ]
};

window.onload = function() {
    let i = 0;
    for(i = 0; i < dataObj.data.length; i++)
    {
        const button = document.createElement("button");
        button.id = "button-" + i;
        button.name = i;
        button.classList.add("button-ripple");
        button.classList.add(dataObj.data[i].color);
        button.addEventListener('click', function() {Show(this.name)}, false);
        button.style = "margin: 0.25cm; text-align: center; height: auto; width: calc(20% - 1cm);";
        button.innerHTML = dataObj.data[i].name;

        document.getElementById("definitions-container").appendChild(button);
    }
}

function Show(id) {
    let name = dataObj.data[id].name;
    let definition = dataObj.data[id].definition;

    const dimmer = document.createElement("div");
    dimmer.id = "dimmer";
    dimmer.classList.add("dim-background");

    const popup = document.createElement("div");
    popup.id = "popup";
    popup.classList.add("pop-up");

    const close = document.createElement("button");
    close.id = "close";
    close.classList.add("button-ripple");
    close.style = "margin-left: 38%; width: 24%; right: 0px; bottom: 0px;";
    close.innerHTML = "Затвори";
    close.addEventListener('click', function() {Dispose()}, false);

    const header = document.createElement("h1");
    header.id = "header";
    header.innerHTML = name;

    const para = document.createElement("p");
    para.id = "para";
    para.style = "text-align: center;";
    para.innerHTML = definition;

    document.body.appendChild(dimmer);
    dimmer.appendChild(popup);
    popup.appendChild(header);
    popup.appendChild(para);
    popup.appendChild(close);
}

function Dispose()
{
    document.getElementById("dimmer").remove();
}
