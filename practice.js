// for(var i=0;i<localStorage.length;i++){
//     localStorage.removeItem(localStorage.key(i));
// }

var form = document.getElementById("my-form");
var ul = document.getElementById("ul");
form.addEventListener("submit",afterSub);

for(var i=0;i<localStorage.length;i++){
    var obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(obj.name));
    li.appendChild(document.createElement("br"));
    li.appendChild(document.createTextNode(obj.e_mail));
    var edit = document.createElement("button");
    var del = document.createElement("button");
    edit.appendChild(document.createTextNode('Edit'));
    del.appendChild(document.createTextNode('Delete'));
    li.appendChild(edit);
    li.appendChild(del);
    ul.appendChild(li); 

}


function afterSub(e){
    e.preventDefault();
    console.log(localStorage.length);
    var username = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var obj = {
        name : username,
        e_mail : email,
    }
    var store = localStorage.length+1
    localStorage.setItem(store,JSON.stringify(obj));

    var obj = JSON.parse(localStorage.getItem(store));
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(obj.name));
    li.appendChild(document.createElement("br"));
    li.appendChild(document.createTextNode(obj.e_mail));
    var edit = document.createElement("button");
    var del = document.createElement("button");
    edit.appendChild(document.createTextNode('Edit'));
    del.appendChild(document.createTextNode('Delete'));
    li.appendChild(edit);
    li.appendChild(del);
    ul.appendChild(li);     
}
















