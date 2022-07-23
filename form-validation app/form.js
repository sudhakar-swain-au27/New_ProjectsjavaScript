function validate(){
    var username = document.getElementById("username").value 
    var email = document.getElementById("email").value
    var cpassword = document.getElementById("cpassword").value
    var pssword =document.getElementById("password").value


    checkusername(username)
    checkpassword(pssword)
    checkemail(email)
    checkpasswordsmatch(pssword,cpassword)
}

function checkusername(username)
{
    if(username.length > 7){
        document.getElementById("username").classList.add("success")
        document.getElementById('username').classList.replace('error','success')
        document.getElementById('username_error').innerText=''
    }
    else{
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerText='Username must be 8 character'

    }
}
function checkemail(email)
{
    if(email.length > 8 && email.includes('@gmail.com')){
        document.getElementById("email").classList.add("success")
        document.getElementById('email').classList.replace('error','success')
        document.getElementById('email_error').innerText=''
    }
    else{
        document.getElementById('email').classList.add('error')
        document.getElementById('email_error').innerText='email must be 8 character , it must contain @gmail.com'

    }
}
function checkupassword(password)
{
    if(password.length > 7 && password.includes('.')){
        document.getElementById("password").classList.add("success")
        document.getElementById('password').classList.replace('error','success')
        document.getElementById('password_error').innerText=''
    }
    else{
        document.getElementById('password').classList.add('error')
        document.getElementById('password_error').innerText='password must be 7 character with .' 

    }
}
function checkcpasswordmatch(cpassword , cpassword)
{
    if(password==cpassword && cpassword!=''){
        document.getElementById("cpassword").classList.add("success")
        document.getElementById('cpassword').classList.replace('error','success')
        document.getElementById('cpassword_error').innerText=''
    }
    else{
        document.getElementById('cpassword').classList.add('error')
        document.getElementById('cpassword_error').innerText='cpassword not matched'    }
}