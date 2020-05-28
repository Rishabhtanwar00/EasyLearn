var eyebutton=document.querySelector(".eye-btn");
var passwordfield=document.querySelector("#pass");

eyebutton.addEventListener('click',(e) =>{
    if (passwordfield.type==='password'){
        e.target.setAttribute("class","fas fa-eye-slash");
        passwordfield.type="text";
    }
    else{
        e.target.setAttribute("class","fas fa-eye");
        passwordfield.type="password";
    }
})
