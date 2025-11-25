  document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Reset previous error
    const usernameError = document.getElementById('usernameError');
    usernameError.textContent = '';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const displayName = document.getElementById('displayName').value;

    try {
      const res = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, displayName })
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.error === 'Username already exists') {
          usernameError.textContent = 'Username already exists';
        } else {
          alert('Registration failed: ' + data.error);
        }
        return;
      }

      // Success
      window.location.href = '/login.html?registered=1';

    } catch (err) {
      alert('Network error: ' + err.message);
    }
  });