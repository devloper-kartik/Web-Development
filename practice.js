
const names = document.querySelector("#name");

const email = document.querySelector("#email");

const btn = document.querySelector(".btn");

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(names.value);
    console.log(email.value);
});

btn.addEventListener('mouseover',(e)=>{
    e.preventDefault();
    console.log(names.value);
});


btn.addEventListener('mouseout',(e)=>{
    e.preventDefault();
    console.log(email.value);
});
