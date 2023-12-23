var error = document.getElementById('error-message')


function validate(){
    var username = document.getElementById('userId')
    var passowrd = document.getElementById('pass')

    if (username.value.trim() == "" ||passowrd.value.trim() == "") {
        error.innerHTML = 'enter username and password to submit'
        return false;
    }
    if (passowrd.value.length < 4) {
        error.innerHTML = 'password must be at lest 8 characters long'
        return false;
    }
    if (passowrd.value.length > 10) {
        error.innerHTML = 'password must not be more than 10 characters'
        return false;
    }
    return true;
}