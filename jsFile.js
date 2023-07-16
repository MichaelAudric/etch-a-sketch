const body = document.querySelector("body");

for (var i = 0; i < 16; i++)
{
    const container = document.createElement("div");
    container.classList.add("container");
    container.style.cssText = "display:flex; margin : 20px auto; height: 100px;";
    for (var j = 0; j < 16; j++)
    {
        const div = document.createElement("div");
        div.style.cssText = "border : 1px black solid; background color: red;";
        container.appendChild(div);
    }
    body.appendChild(container);
}