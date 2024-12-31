
$(document).ready(function () {
    $("#loginForm").submit(function (e) {
        e.preventDefault();

        const userid = $("#userid").val().trim();
        const password = $("#password").val().trim();
        let isValid = true;


        if (!userid) {
            $("#useridError").text("User ID cannot be empty.");
            isValid = false;
        } else {
            $("#useridError").text("");
        }


        if (!password) {
            $("#passwordError").text("Password cannot be empty.");
            isValid = false;
        } else {
            $("#passwordError").text("");
        }

        if (isValid) {
    
            $.ajax({
                url: "10.php",
                type: "POST",
                data: { userid: userid, password: password },
                success: function (response) {
                    if (response === "success") {
                        $("#loginForm").hide();
                        $("#message").text("Welcome! You have successfully logged in.").show();
                    } else {
                        $("#message").text("Invalid User ID or Password. Please try again.").show();
                    }
                },
                error: function () {
                    $("#message").text("An error occurred. Please try again later.").show();
                },
            });
        }
    });
});
