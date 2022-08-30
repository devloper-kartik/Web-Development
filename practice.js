var form = document.getElementById("my-form");

form.addEventListener("submit",afterSub);

function afterSub(e){

    e.preventDefault();
    var username = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    localStorage.setItem("name",username);
    localStorage.setItem("email",email);

    console.log(localStorage.getItem("name"));
    console.log(localStorage.getItem("email"));
}
