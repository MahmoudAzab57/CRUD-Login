document.querySelector('input[type="submit"]').addEventListener('click', function(e){
e.preventDefault()

var inputs = document.querySelectorAll('input:not([type="submit"])')
for (var i = 0; i < inputs.length; i++){
    if (inputs[i].value.length ==0){
        inputs[i].nextElementSibling.innerHTML =`${inputs[i].name} required`;
    }else{
        inputs[i].nextElementSibling.innerHTML =``
    }
}

var userform =JSON.parse(localStorage.getItem('userform'))
// if(document.querySelector('input[type="email"]').value == JSON.parse(localStorage.getItem('userform')).email&&document.querySelector('input[type="password"]').value == JSON.parse(localStorage.getItem('userform')).password){
//     localStorage.setItem('userLoggedIn',JSON.stringify(userform));
//     window.location.href =`http://127.0.0.1:5501/welcome.html`
// }
if(document.querySelector('input[type="email"]').value == userform.email&&document.querySelector('input[type="password"]').value == userform.password){
    localStorage.setItem('userLoggedIn',JSON.stringify(userform));
    window.location.href =`http://127.0.0.1:5502/welcome.html`
}

})