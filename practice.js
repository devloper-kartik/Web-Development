// var list = document.getElementsByClassName("list-group-item");

// var li = document.getElementsByTagName("li");

// list[2].style.backgroundColor = "green";

// for(var i=0;i<list.length;i++){
//     list[i].style.fontWeight = "bold";
// }

// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor = "grey";
// }

var list = document.querySelectorAll("li");
// list[1].style.backgroundColor = "green";

list[2].style.display = 'none'; 

list[1].style.color = "blue";

var oddList = document.querySelectorAll("li:nth-child(odd)");

for(var i=0;i<oddList.length;i++){
    oddList[i].style.backgroundColor = "green";
}