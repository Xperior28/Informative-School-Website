const home = document.querySelector('.school-logo');

document.getElementById("admissionForm").addEventListener("submit", function(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});

function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var query = document.getElementById("query").value;
    var errmsg = document.querySelector('.error');

    if (fullName == "" || email == "" || phone == "" || query == "") {
        errmsg.innerHTML = "All fields are required";
        return false;
    }

    if (!validateEmail(email)) {
        errmsg.innerHTML = "Invalid email address";
        return false;
    }

    if (!validatePhone(phone)) {
        errmsg.innerHTML = "Invalid phone number";
        return false;
    }

    alert("Thanks for your response!");
    return true;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePhone(phone) {
    var re = /^\d{10}$/;
    return re.test(phone);
}

home.addEventListener('click', () => {
    window.location.href = '/';
});