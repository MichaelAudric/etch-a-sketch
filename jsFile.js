const body = document.querySelector("body");

const n = prompt ("input how many grid do you want in a row (input below 100 for best performance):");

function getRandomColor(){
    return "#" + (Math.floor(Math.random()*16777215).toString(16));
}

const container_of_containers = document.createElement("div");
container_of_containers.style.cssText = "border : 1px black solid; width : 800px; margin: auto;";

for (var i = 0; i < n; i++)
{
    const container = document.createElement("div");
    container.classList.add("container");
    container.style.cssText = "display:flex; margin : auto;";
    container.style.height = (800/n).toString()+"px";
    for (var j = 0; j < n; j++)
    {
        const div = document.createElement("div");
        div.style.cssText = "background color: red; flex:1";
        div.addEventListener("mouseenter",function(){
            color = getRandomColor();
            div.style.backgroundColor = color;
            div.style.borderColor = color;
        });
        container.appendChild(div);
    }
    container_of_containers.appendChild(container);
}
body.appendChild(container_of_containers);