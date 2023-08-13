
        function validateForm(form) {
            var username = form.username.value.trim();
            var password = form.password.value.trim();
            var isValid = true;

            if (username === "") {
                document.getElementById("usernameErrorMessage").style.display = "block";
                form.username.classList.add("input-error");
                isValid = false;
            } else {
                document.getElementById("usernameErrorMessage").style.display = "none";
                form.username.classList.remove("input-error");
                form.username.classList.add("input-success");
            }

            if (password === "") {
                document.getElementById("passwordErrorMessage").style.display = "block";
                form.password.classList.add("input-error");
                isValid = false;
            } else {
                document.getElementById("passwordErrorMessage").style.display = "none";
                form.password.classList.remove("input-error");
                form.password.classList.add("input-success");
            }

            return isValid;
        }
