var list = document.getElementsByClassName("list-group-item");

var li = document.getElementsByTagName("li");

list[2].style.backgroundColor = "green";

for(var i=0;i<list.length;i++){
    list[i].style.fontWeight = "bold";
}

for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor = "grey";
}
