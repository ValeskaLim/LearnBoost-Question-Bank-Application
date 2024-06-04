const { response } = require("express");

function validation(){
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

    if(username.length >= 50 || password.length >= 50){
        if(username.length >= 50){
            alert("Username cannot be more than 50 characters!");
            return false;
        }
        else if(password.length >= 50){
            alert("Password cannot be more than 50 characters!");
            return false;
        }
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
