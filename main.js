let fnameError = document.getElementById('fname-error')
let LnameError = document.getElementById('Lname-error')
let phonenoError = document.getElementById('phone-error')
let emailError = document.getElementById('email-error')
let submitError = document.getElementById('submit-error')


function validate() {
    var Fname = document.getElementById('contact-name').value;

    if(Fname.length == 0){
        fnameError.innerHTML = 'first name is requried'
        return false;
    }
    if (!Fname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        fnameError.innerHTML = 'write full name';
        return false;
    }
    fnameError.innerHTML = 'valid'
    return true;
    

}
function validatelastname(){
    var lastname = document.getElementById('contact-lastname').value;
    if (lastname.length == 0) {
        LnameError.innerHTML = 'last name is requried';
        return false;
    }
    if (!lastname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        LnameError.innerHTML = 'write full name';
        return false;
    }
    LnameError.innerHTML = 'valid'
    return true;
}

function validatephone() {
    var phone = document.getElementById('contact-phone').value;
    if (phone.length == 0) {
        phonenoError.innerHTML = 'phone no is required';
        return false;
    }
    if (phone.length !== 10) {
        phonenoError.innerHTML = 'not up to 10 digits';
       return false;
    }

    if (!phone.match(/^[0-9]{10}$/)) {
        phonenoError.innerHTML = 'only digits';
       return false;
    }

    phonenoError.innerHTML = 'valid'
       return true;
    
    
}
function emailvalidate(){
    var email = document.getElementById('emailId').value;
    if (email.length == 0) {
        emailError.innerHTML = 'email is required'
        return false;
    }

    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'invalid email format'
        return false;
    }
    
    emailError.innerHTML = 'valid'
    return true;
}
function validateform(){
    if (!validate() || !validatelastname() || !validatephone() || !emailvalidate()) {
         submitError.style.display = 'block';
        submitError.innerHTML = 'fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
}
// return true;
}