import definitions from "./data.json"

window.onload = function() {
    for(i = 0; i < dataObj.data.length; i++)
    {
        console.log(definitions[1].name)
        const div = document.createElement("div");
        div.id = "div-" + i;
        div.name = i;
        div.classList.add("button-ripple");
        div.classList.add(dataObj.data[i].color);
        div.addEventListener('click', function() {Show(this.name)}, false);
        div.style = "margin: 0.25cm; text-align: center; height: auto; width: calc(20% - 1cm);";
        div.innerHTML = dataObj.data[i].name;

        document.getElementById("definitions-container").appendChild(div);
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
    close.style = "margin-left: 20%; width: 60%; right: 0px; bottom: 0px;";
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
