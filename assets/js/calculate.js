const dataObj =
{
    data: [
        {
            name: "zero",
            fields : [
                { field: "first 0" },
                { field: "second 0" },
                { field: "third 0" },
                { field: "fourth 0" }
            ],
            equasion: "first + second - third - fourth",
            displayEq: "FIRST + SECOND - THIRD - FOURTH",
            measure: "msr"
        },
        {
            name: "one",
            fields : [
                { field: "first 1" },
                { field: "second 1" },
                { field: "third 1" },
                { field: "NO_INPUT" }
            ],
            equasion: "first + second - third",
            displayEq: "FIRST + SECOND - THIRD",
            measure: "msr"
        },
        {
            name: "two",
            fields : [
                { field: "first 2" },
                { field: "second 2" },
                { field: "NO_INPUT" },
                { field: "NO_INPUT" }
            ],
            equasion: "first + second",
            displayEq: "FIRST + SECOND",
            measure: "msr"
        },
        {
            name: "three",
            fields : [
                { field: "first 3" },
                { field: "NO_INPUT" },
                { field: "NO_INPUT" },
                { field: "NO_INPUT" }
            ],
            equasion: "first + first",
            displayEq: "FIRST + FIRST",
            measure: "msr"
        },
        {
            name: "three",
            fields : [
                { field: "first 3" },
                { field: "NO_INPUT" },
                { field: "NO_INPUT" },
                { field: "NO_INPUT" }
            ],
            equasion: "first + first",
            displayEq: "FIRST + FIRST",
            measure: "msr"
        }
    ]
};

window.onload = function() {
    for(i = 0; i < dataObj.data.length; i++)
    {
        const label = document.createElement("label");
        label.id = "label-" + i;
        label.name = i;
        label.classList.add("container");
        label.addEventListener('click', function() {Change(this.name)}, false);
        label.innerHTML = dataObj.data[i].name;


        const input = document.createElement("input");
        input.id = "input-" + i;
        input.type = "radio";
        input.name = "formulas";

        const span = document.createElement("span");
        span.id = "span-" + i;
        span.classList.add("checkmark");

        document.getElementById("radio-container").appendChild(label);
        label.appendChild(input);
        label.appendChild(span);
    }

    document.getElementById("input-container").style = "visibility: hidden";
}

function Change(set) {
    choice = set;
    
    document.getElementById("input-container").style = "visibility: visible;";
    
    for(i = 0; i < 4; i++)
    {
        if(dataObj.data[choice].fields[i].field == "NO_INPUT")
            document.getElementById("field-" + i).style = "visibility: hidden";
        else
        {
            document.getElementById("field-" + i).style = "visibility: visible";
            document.getElementById("field-" + i).placeholder = dataObj.data[choice].fields[i].field;
        }
    }
}

function Calculate() {
    const first = Number(document.getElementById("field-0").value);
    const second = Number(document.getElementById("field-1").value);
    const third = Number(document.getElementById("field-2").value);
    const fourth = Number(document.getElementById("field-3").value);

    let result = eval(dataObj.data[choice].equasion);

    Show(result);
}

function Show(result) {
    let output = dataObj.data[choice].displayEq + " = " +  result + " " + dataObj.data[choice].measure;

    const dimmer = document.createElement("div");
    dimmer.id = "dimmer";
    dimmer.classList.add("dim-background");

    const popup = document.createElement("div");
    popup.id = "popup";
    popup.classList.add("pop-up");

    const close = document.createElement("button");
    close.id = "close";
    close.type = "button";
    close.classList.add("button-ripple");
    close.style = "margin-left: 38%; width: 24%; right: 0px; bottom: 0px;";
    close.innerHTML = "Затвори";
    close.addEventListener('click', function() {Dispose()}, false);

    const para = document.createElement("p");
    para.id = "para";
    para.style = "text-align: center;";
    para.innerHTML = output;

    document.body.appendChild(dimmer);
    dimmer.appendChild(popup);
    popup.appendChild(para);
    popup.appendChild(close);
}

function Dispose()
{
    document.getElementById("dimmer").remove();
}
