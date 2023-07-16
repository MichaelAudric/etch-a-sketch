const body = document.querySelector("body");

function getRandomColor(){
    return "#" + (Math.floor(Math.random()*16777215).toString(16));
}

const container_of_containers = document.createElement("div");
container_of_containers.style.cssText = "border : 1px black solid; width : 960px;";

for (var i = 0; i < 16; i++)
{
    const container = document.createElement("div");
    container.classList.add("container");
    container.style.cssText = "display:flex; margin : auto; height: 50px; width: 800px";
    for (var j = 0; j < 16; j++)
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