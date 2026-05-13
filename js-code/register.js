  document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Reset previous error
    const usernameError = document.getElementById('usernameError');
    usernameError.textContent = '';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const displayName = document.getElementById('displayName').value;

    try {
      const res = await fetch('https://api.thefeywildvault.com/api/register', {
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

      // Success – redirect to login and preserve the original destination
      const params = new URLSearchParams(window.location.search);
      const redirectParam = params.get("redirect") || "/TheFeywildVault/index.html";

      window.location.href = `login?registered=1&redirect=${encodeURIComponent(redirectParam)}`;
      
    } catch (err) {
      alert('Network error: ' + err.message);
    }
  });