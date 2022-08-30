var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

form.addEventListener("submit",addfun);
itemList.addEventListener("click",removeItem);

function addfun(e){
    e.preventDefault();

    var newItem =  document.getElementById('item').value;
    var li = document.createElement("li");

    li.className = "list-group-item";
    li.appendChild(document.createTextNode(newItem));

    var delbtn = document.createElement("button");
    var editbtn = document.createElement("button");

    delbtn.className = "btn btn-danger btn-sm float-right delete";
    delbtn.appendChild(document.createTextNode("X"));

    editbtn.appendChild(document.createTextNode("Edit"));
    editbtn.className = "btn btn-dark";
    delbtn.nextElementSibling=editbtn;

    li.appendChild(delbtn);
    li.appendChild(editbtn);

    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        var parent = e.target.parentElement;
        if(confirm("Are You Sure you want to remove "+parent.childNodes[0].textContent)){
            itemList.removeChild(parent);
        }
    }
}
