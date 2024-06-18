const { response } = require("express");

function validationLogin(){
    var username = document.loginForm.username.value;
    var password = document.loginForm.password.value;

    if(username.length == "" || password.length == ""){
        if(username.length == ""){
            alert("Username cannot be empty!");
            return false;
        }
        else if(password.length == ""){
            alert("Password cannot be empty!");
            return false;
        }
    }

    if(username.length > 50 || password.length > 50){
        if(username.length > 50){
            alert("Username cannot be more than 50 characters!");
            return false;
        }
        else if(password.length >=50){
            alert("Password cannot be more than 50 characters!");
            return false;
        }
    }
}

function validationRegister(){
    var username = document.registerForm.username.value;
    var password = document.registerForm.password.value;
    var email = document.registerForm.email.value;
    var confirmPassword = document.registerForm.confirmpassword.value;
    var confirmPassword = document.registerForm.confirmpassword.value;
    var grade = document.registerForm.grade.value;

    if(username.length == ""){
        alert("Username cannot be empty!");
        return false;
    }
    else if(username.length > 50 || username.length <=3){
        alert("Username length must between 4-50 character!");
        return false;
    }

    if(email.length == ""){
        alert("Email cannot be empty!");
        return false;
    }

    if(password.length == ""){
        alert("Password cannot be empty!");
        return false;
    }
    else if(password.length > 50 || password.length <=3){
        alert("Password length must between 4-50 character!");
        return false;
    }

    if(confirmPassword.length == ""){
        alert("Confirm password cannot be empty!");
        return false;
    }
    else if(password != confirmPassword){
        alert("Password must be match!");
        return false;
    }

    if(grade.length == ""){
        alert("Grade cannot be empty!");
        return false;
    }
    else if(grade != 10 && grade != 11 && grade != 12){
        alert("Grade must be between 10, 11 or 12");
        return false;
    }
}

function eraseText(){
    document.getElementById("username").value = "";
}

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const errorMessage = urlParams.get('error');
    if (errorMessage) {
        document.getElementById('error').innerText = decodeURIComponent(errorMessage.replace(/\+/g, ' '));
        const url = new URL(window.location);
        url.searchParams.delete('error');
        window.history.replaceState({}, document.title, url);
    }
};

function getQueryParams() {
    const params = {};
    window.location.search.substring(1).split('&').forEach(pair => {
        const [key, value] = pair.split('=');
        params[decodeURIComponent(key)] = decodeURIComponent(value);
    });
    return params;
}

// Display error message if it exists in the query parameters
const params = getQueryParams();
if (params.error) {
    document.getElementById('error').textContent = params.error;
}