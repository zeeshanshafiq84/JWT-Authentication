import axios from "axios";

let signUp = document.getElementById('signUp');

signUp.addEventListener('click', function(){

    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    axios.post('/apiv1/sigUp',{email: email, password: password})
    .then((res)=>{
        console.log('Done!:' res.data)
    })

    .catch((err)=>{
        console.log('error', +err)
    })
}) 