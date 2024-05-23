function validation(){
    var username = document.login.username.value;
    var password = document.login.password.value;

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