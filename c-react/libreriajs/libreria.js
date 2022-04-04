/**/
/*const header = document.createElement("header");
header.id = "mainHeader";
header.classList.add("main-header");

const root = document.getElementById("root");
root.appendChild(header);*/ 


function createElement (elem, attr = {})
{
    let element = document.createElement(elem);
    element.id = attr.id;
    element.classList.add(attr.className);

    return element;
}

function render(elem, DOMelem)
{
    DOMelem.appendChild(elem);
}

const header = createElement("header", {id:"header2", className:"header2"});
render(header, document.getElementById("root"));        
     