function roleSelect(event){
    event.preventDefault();
    const role = document.getElementById('roles').value;
    const errorMsg = document.getElementById('error');

    if(!role){
        errorMsg.textContent = "Please select the role";
        return false;
    }
    
    if(role == 'student')
        window.location.href = 'login.html';
    else if(role == 'teacher')
        window.location.href = 'loginteacher.html';

    return false;
}