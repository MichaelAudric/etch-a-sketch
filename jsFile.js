const body = document.querySelector("body");
body.style.backgroundColor = "black";

const h1 = document.createElement("h1");
h1.textContent = "Go ahead and draw your \"art\"";
h1.style.cssText = "color: white; text-align: center;";
body.appendChild(h1);

const n = prompt ("input how many grid do you want in a row (input below 100 for best performance):");

function getRandomColor(){
    return "#" + (Math.floor(Math.random()*16777215).toString(16));
}

const container_of_containers = document.createElement("div");
container_of_containers.style.cssText = "border : 1px white solid; width : 730px; margin: auto;";

for (var i = 0; i < n; i++)
{
    const container = document.createElement("div");
    container.classList.add("container");
    container.style.cssText = "display:flex; margin : auto;";
    container.style.height = (730/n).toString()+"px";
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