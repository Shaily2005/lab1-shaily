
$(document).ready(function () {
    $("#registrationForm").submit(function (e) {
        e.preventDefault();
        let isValid = true;


        const name = $("#name").val().trim();
        if (!name || /\d/.test(name)) {
            $("#nameError").text("Name cannot be empty or contain numbers.");
            isValid = false;
        } else {
            $("#nameError").text("");
        }


        const address = $("#address").val().trim();
        if (!address) {
            $("#addressError").text("Address cannot be empty.");
            isValid = false;
        } else {
            $("#addressError").text("");
        }


        const username = $("#username").val().trim();
        if (!username || /\s/.test(username) || /[^a-zA-Z0-9_]/.test(username)) {
            $("#usernameError").text("Username cannot be empty or contain spaces or special characters (except _).");
            isValid = false;
        } else {
            $("#usernameError").text("");
        }


        const email = $("#email").val().trim();
        if (!email || !email.includes("@")) {
            $("#emailError").text("Please enter a valid email.");
            isValid = false;
        } else {
            $("#emailError").text("");
        }


        const password = $("#password").val().trim();
        if (!password || password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password) || !/[\W]/.test(password)) {
            $("#passwordError").text("Password must be at least 8 characters with one digit, one uppercase, one lowercase, and one special character.");
            isValid = false;
        } else {
            $("#passwordError").text("");
        }

        const phone = $("#phone").val().trim();
        if (!phone || !/^(98|97|96)\d{8}$/.test(phone)) {
            $("#phoneError").text("Phone must start with 98, 97, or 96 and contain 10 digits.");
            isValid = false;
        } else {
            $("#phoneError").text("");
        }


        const gender = $("input[name='gender']:checked").val();
        if (!gender) {
            $("#genderError").text("Please select a gender.");
            isValid = false;
        } else {
            $("#genderError").text("");
        }


        const course = $("#course").val();
        if (!course) {
            $("#courseError").text("Please select a course.");
            isValid = false;
        } else {
            $("#courseError").text("");
        }


        if (isValid) {
            alert("Form submitted successfully!");

        }
    });
});
