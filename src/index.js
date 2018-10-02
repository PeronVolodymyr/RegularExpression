var btnValidate = document.getElementById('btn');
btnValidate.addEventListener('click', validate);

var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var fatherName = document.getElementById('fatherName');
var phone = document.getElementById('phone');
var email = document.getElementById('email');

var firstNameError = document.getElementById('firstNameRegEx');
var lastNameError = document.getElementById('lastNameRegEx');
var fatherNameError = document.getElementById('fatherNameRegEx');
var phoneError = document.getElementById('phoneRegEx');
var emailError = document.getElementById('emailRegEx');

var flag = true;
function validate() {
    cleanErrors();
    if(!/^[а-яА-Я-іІ]{2,20}$/.test(lastName.value)){
        lastNameError.innerText = "Некоректне прізвище!";
        flag = false;
    }
    if (!/^[а-яА-Я-іІ]{2,20}$/.test(firstName.value)){
        firstNameError.innerText = "Некоректне ім'я!";
        flag = false;
    }
    if(!/^[а-яА-Я-іІ]{2,20}$/.test(fatherName.value)){
        fatherNameError.innerText = "Некоректне по-батькові!";
        flag = false;
    }
    if(!/^[0-9]{10}$/.test(phone.value)){
        phoneError.innerText = "Некоректний телефон!";
        flag = false;
    }
    if(!/^([a-zA-Z0-9_\.]{2,30}@)([a-z]+\.([a-z]{2,3}))$/.test(email.value)){
        emailError.innerText = "Некоректна пошта!";
        flag = false;
    }
    if(flag){
        window.alert("Поля успішно провалідовані!")
    }
}

function cleanErrors() {
    firstNameError.innerText="";
    lastNameError.innerText="";
    fatherNameError.innerText="";
    phoneError.innerText="";
    emailError.innerText="";
}