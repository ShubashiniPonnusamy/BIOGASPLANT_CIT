<script>
document.getElementById('signupForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            if (password === confirmPassword) {
                // Simulate successful signup and redirect
                alert("Sign up successful! Redirecting to home page...");
                window.location.href = 'home.html'; // Replace with your actual home page URL
            } else {
                alert("Passwords do not match. Please try again.");
            }
        });
</script>
