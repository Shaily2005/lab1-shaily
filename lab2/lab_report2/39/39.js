function validateForm() {
    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const nameError = document.getElementById("nameError");
    if (!name || /\d/.test(name)) {
        nameError.textContent = "Name cannot be empty or contain numbers.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }


    const address = document.getElementById("address").value.trim();
    const addressError = document.getElementById("addressError");
    if (!address) {
        addressError.textContent = "Address cannot be empty.";
        isValid = false;
    } else {
        addressError.textContent = "";
    }


    const username = document.getElementById("username").value.trim();
    const usernameError = document.getElementById("usernameError");
    if (!username || /\s|[^a-zA-Z0-9_]/.test(username)) {
        usernameError.textContent = "Username cannot be empty or contain spaces or special characters except '_'.";
        isValid = false;
    } else {
        usernameError.textContent = "";
    }


    const email = document.getElementById("email").value.trim();
    const emailError = document.getElementById("emailError");
    if (!email || !email.includes("@")) {
        emailError.textContent = "Enter a valid email.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }


    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    if (!password || !passwordRegex.test(password)) {
        passwordError.textContent = "Password must be at least 8 characters long with one digit, one uppercase letter, one lowercase letter, and one special character.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    const phone = document.getElementById("phone").value.trim();
    const phoneError = document.getElementById("phoneError");
    if (!phone || !/^(98|97|96)\d{8}$/.test(phone)) {
        phoneError.textContent = "Phone must start with 98, 97, or 96 and be 10 digits long.";
        isValid = false;
    } else {
        phoneError.textContent = "";
    }

    const gender = document.querySelector('input[name="gender"]:checked');
    const genderError = document.getElementById("genderError");
    if (!gender) {
        genderError.textContent = "Please select your gender.";
        isValid = false;
    } else {
        genderError.textContent = "";
    }

    const course = document.getElementById("course").value;
    const courseError = document.getElementById("courseError");
    if (!course) {
        courseError.textContent = "Please select a course.";
        isValid = false;
    } else {
        courseError.textContent = "";
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
}