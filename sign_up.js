
            function validateForm(form) {
                var username = form.username.value.trim();
                var auPassword = form.auPassword.value.trim();
                var password = form.password.value;
                var con_password = form.con_password.value;
                var isValid = true;
        
        
                if (username === '') {
                    document.getElementById('usernameErrorMessage').style.display = 'block';
                    form.username.classList.add("input-error");
                    isValid = false;
                }else{
                    document.getElementById("usernameErrorMessage").style.display = "none";
                    form.username.classList.remove("input-error");
                    form.username.classList.add("input-success");
                }
        
                if (auPassword === '') {
                    document.getElementById('auPasswordErrorMessage').style.display = 'block';
                    form.auPassword.classList.add("input-error");
                    isValid = false;
                }else{
                    document.getElementById("auPasswordErrorMessage").style.display = "none";
                    form.auPassword.classList.remove("input-error");
                    form.auPassword.classList.add("input-success");

                }
        
                if (password === '') {
                    document.getElementById('passwordErrorMessage').style.display = 'block';
                    form.password.classList.add("input-error");
                    isValid = false;
                } else if (!isStrongPassword(password)) {
                    document.getElementById('passwordErrorMessage').textContent = "Password must include at least 1 uppercase letter, 1 lowercase letter, 1 numeric digit, and be at least 8 characters long.";
                    document.getElementById('passwordErrorMessage').style.display = 'block';
                    form.password.classList.add("input-error");
                    isValid = false;
                } else {
                    document.getElementById("passwordErrorMessage").style.display = "none";
                    form.password.classList.remove("input-error");
                    form.password.classList.add("input-success");
                }
        
                if (con_password === '') {
                    document.getElementById('confirmPasswordErrorMessage').style.display = 'block';
                    form.con_password.classList.add("input-error");
                    isValid = false;
                } else if (password !== con_password) {
                    document.getElementById('confirmPasswordErrorMessage').textContent = "Passwords do not match.";
                    document.getElementById('confirmPasswordErrorMessage').style.display = 'block';
                    form.con_password.classList.add("input-error");
                    isValid = false;
                } else {
                    document.getElementById("confirmPasswordErrorMessage").style.display = "none";
                    form.con_password.classList.remove("input-error");
                    form.con_password.classList.add("input-success");
                }
        
        
                return isValid;
            }

            function isStrongPassword(password){
                var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
                return passwordPattern.test(password);

            }

