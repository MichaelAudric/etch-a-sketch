const body = document.querySelector("body");

function getRandomColor(){
    return "#" + (Math.floor(Math.random()*16777215).toString(16));
}

for (var i = 0; i < 16; i++)
{
    const container = document.createElement("div");
    container.classList.add("container");
    container.style.cssText = "display:flex; margin : auto; height: 50px; width: 800px";
    for (var j = 0; j < 16; j++)
    {
        const div = document.createElement("div");
        div.style.cssText = "border : 1px black solid; background color: red; flex:1";
        container.appendChild(div);
    }
    body.appendChild(container);
}