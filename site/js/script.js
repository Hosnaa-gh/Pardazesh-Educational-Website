function checkEmpty() {
    var name = document.getElementById('name').value;
    var userName = document.getElementById('username').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var password = document.getElementById('password').value;
    var passwordConf = document.getElementById('passconf').value;
    var email = document.getElementById('email').value;
    var description = document.getElementById('description').value;

    if (name == "") {
        document.getElementById("name").style.border = '2px solid red';
    }

    if (userName == "") {
        document.getElementById('username').style.border = '2px solid red';
    }

    if (age == "") {
        document.getElementById('age').style.border = '2px solid red';
    }

    if (gender == "انتخاب کنید") {
        document.getElementById('gender').style.border = '2px solid red';
    }

    if (password == "") {
        document.getElementById('password').style.border = '2px solid red';
    }

    if (passwordConf == "") {
        document.getElementById('passconf').style.border = '2px solid red';
    }

    if (email == "") {
        document.getElementById('email').style.border = '2px solid red';
    }

    if (description == "") {
        document.getElementById('description').style.border = '2px solid red';
    }

    if (age >= 80) {
        alert('سن شما مجاز نمی باشد');
    }


    if (passwordConf != password) {
        var msg = document.getElementById('message');

        msg.innerHTML = 'رمز عبور و تکرار رمز عبور برابر نیستند';
        msg.style.color = 'red';
        document.getElementById("passconf").style.border = '2px solid red';
    }
}

function checklogin() {

    var Password = document.getElementById('Password').value;
    var Email = document.getElementById('Email').value;

    if (Password == "") {
        document.getElementById('Password').style.border = '2px solid red';
    }

    if (Email == "") {
        document.getElementById('Email').style.border = '2px solid red';
    }
       
}