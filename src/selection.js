function roleSelect(event){
    event.preventDefault();
    const role = document.getElementById('roles').value;
    const errorMsg = document.getElementById('error');

    if(!role){
        errorMsg.textContent = "Please select the role";
        return false;
    }

    console.log('Role selected:', role);
    
    if(role == 'student')
        window.location.href = '/student-login';
    else if(role == 'teacher')
        window.location.href = '/teacher-login';

    return false;
}