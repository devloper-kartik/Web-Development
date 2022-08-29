var list = document.getElementsByClassName("list-group-item");
var btn = document.getElementsByClassName("btn btn-dark");
console.log(btn);
list[2].style.backgroundColor = "green";

for(var i=0;i<list.length;i++){
    list[i].style.fontWeight = "bold";
}
