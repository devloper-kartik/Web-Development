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
    del.className="delete";
    edit.appendChild(document.createTextNode('Edit'));
    del.appendChild(document.createTextNode('Delete'));
    li.appendChild(edit);
    li.appendChild(del);
    console.log(del);
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
    localStorage.setItem(email,JSON.stringify(obj));

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(username));
    li.appendChild(document.createElement("br"));
    li.appendChild(document.createTextNode(email));
    var edit = document.createElement("button");
    var del = document.createElement("button");
    del.className="delete";
    edit.appendChild(document.createTextNode('Edit'));
    del.appendChild(document.createTextNode('Delete'));
    li.appendChild(edit);
    li.appendChild(del);
    ul.appendChild(li);     
}

ul.addEventListener("click",(e)=>{
    if(e.target.classList.contains('delete')){
        var li = e.target.parentElement;        
        localStorage.removeItem(li.childNodes[2].textContent);
        ul.removeChild(li);
    }
});














