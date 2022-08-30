var form = document.getElementById("my-form");
var ul = document.getElementById("ul");
form.addEventListener("submit",afterSub);

var obj = JSON.parse(localStorage.getItem("Myobj"));

function afterSub(e){

    e.preventDefault();
    var username = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var obj = {
        name : username,
        e_mail : email,
    }
    localStorage.setItem("Myobj",JSON.stringify(obj));
    // console.log(JSON.parse(localStorage.getItem("Myobj")));

    

}

var li = document.createElement("li");
    li.appendChild(document.createTextNode(obj.name));
    li.appendChild(document.createElement("br"));
    li.appendChild(document.createTextNode(obj.e_mail));
    console.log(li);
    ul.appendChild(li);