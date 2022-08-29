var node = document.querySelector('.list-group');

console.log(node); 

console.log(node.parentElement);

console.log(node.lastChild);

console.log(node.lastElementChild);

console.log(node.children);

console.log(node.children[0]);

console.log(node.nextSibling);

console.log(node.nextElementSibling);

console.log(node.previousSibling);

console.log(node.previousElementSibling);

var newNode = document.createElement('div');

console.log(newNode);

newNode.setAttribute("id","new");

var newtextnode = document.createTextNode("Hello World");

newNode.appendChild(newtextnode);

console.log(newNode);

var container =  document.querySelector("header .container");
var h1 = document.querySelector("header h1");

container.insertBefore(newNode,h1);

var li = document.querySelector("li");

node.insertBefore(newNode,li);