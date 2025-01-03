document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');
  
    try {
      const response = await fetch('login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
      });
  
      const result = await response.json();
  
      if (result.success) {
        messageDiv.style.color = 'green';
        messageDiv.textContent = 'Login successful! Welcome, ' + result.username;
      } else {
        messageDiv.style.color = 'red';
        messageDiv.textContent = result.message;
      }
    } catch (error) {
      messageDiv.style.color = 'red';
      messageDiv.textContent = 'An error occurred. Please try again.';
    }
  });
  