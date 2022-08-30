var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter  = document.getElementById("filter");

form.addEventListener("submit",addfun);
itemList.addEventListener("click",removeItem);
filter.addEventListener("keyup",search);

function addfun(e){
    e.preventDefault();

    var newItem =  document.getElementById('item').value;
    var dis  = document.getElementById("disc").value;
    var li = document.createElement("li");
    var next = document.createElement("br");

    li.className = "list-group-item";
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(next);
    li.appendChild(document.createTextNode(dis));
    var delbtn = document.createElement("button");
    var editbtn = document.createElement("button");

    delbtn.className = "btn btn-danger btn-sm float-right delete";
    delbtn.appendChild(document.createTextNode("X"));

    editbtn.appendChild(document.createTextNode("Edit"));
    editbtn.className = "btn btn-danger btn-sm float-right delete";
    

    li.appendChild(delbtn);

    itemList.appendChild(li);

    li.insertBefore(editbtn,delbtn);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        var parent = e.target.parentElement;
        if(confirm("Are You Sure you want to remove "+parent.childNodes[0].textContent)){
            itemList.removeChild(parent);
        }
    }
}

function search(e){
    var text = e.target.value.toLowerCase();
    var list = itemList.getElementsByTagName("li");

    Array.from(list).forEach((item)=>{
        // var name = item.firstChild.textContent;
        var dis = item.childNodes;
        console.log(dis);
        if(dis[0].textContent.toLowerCase().indexOf(text) != -1 || dis[2].textContent.toLowerCase().indexOf(text) != -1 ){
            item.style.display = 'block';
        }else{
            item.style.display = "none";
        }
    });
}
