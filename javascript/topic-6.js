function addelements() {
var parent = document.getElementById("div1");
var child = document.getElementById("p1");
var para = document.createElement("p");
var node = document.createTextNode("New paragraph 1 created with JavaScript");
para.appendChild(node);
parent.replaceChild(para,child);

var child2 = document.getElementById("p2");
var para2 = document.createElement("p");
var node2 = document.createTextNode("New paragraph 2 created with JavaScript");
para2.appendChild(node2);
parent.replaceChild(para2,child2);

var child3 = document.getElementById("p3");
var para3 = document.createElement("p");
var node3 = document.createTextNode("New paragraph 3 created with JavaScript");
para3.appendChild(node3);
parent.replaceChild(para3,child3);
    
var child4 = document.getElementById("p4");
var para4 = document.createElement("p");
var node4 = document.createTextNode("New paragraph 4 created with JavaScript");
para4.appendChild(node4);
parent.replaceChild(para4,child4);
    
var headerchild1 = document.getElementById("firsth4");
var header1 = document.createElement("h4");
var headernode1 = document.createTextNode("New Header 1 Created with JavaScript");
header1.appendChild(headernode1);
parent.replaceChild(header1,headerchild1);
    
var headerchild2 = document.getElementById("secondh4");
var header2 = document.createElement("h4");
var headernode2 = document.createTextNode("New Header 2 Created with JavaScript");
header2.appendChild(headernode2);
parent.replaceChild(header2,headerchild2);
}

function insertuserinput() {
var parent = document.getElementById('div2');
var child = document.getElementById('input1');
var newinput1 = document.createElement('input') ;
    newinput1.type = "text";
    newinput1.placeholder = "Enter additional name";
    newinput1.id = "name";
//parent.appendChild(newinput1);
parent.insertBefore(newinput1, child.nextSibling);
    
}
