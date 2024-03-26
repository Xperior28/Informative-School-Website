

document.getElementById("admissionForm").addEventListener("submit", function(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});

function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var previousSchool = document.getElementById("previousSchool").value;
    var aadhar = document.getElementById("aadhar");
    var transfer = document.getElementById("tc");
    var passphoto = document.getElementById('passphoto')
    var errmsg = document.querySelector('.error');

    if (fullName == "" || email == "" || phone == "" || previousSchool == "") {
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

    
    if (passphoto.files.length === 0) {
        errmsg.innerHTML = "Please upload your passport size photo";
        return false;
    }

    if (aadhar.files.length === 0) {
        errmsg.innerHTML = "Please upload your Aadhar Card";
        return false;
    }

    if (transfer.files.length === 0) {
        errmsg.innerHTML = "Please upload your Transfer Certificate";
        return false;
    }

    // Add more validation rules as needed

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
