const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value;

  try {
    const res = await fetch("https://feywildvault-backend.onrender.com/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      // Redirect on successful login
      const params = new URLSearchParams(window.location.search);
      const redirectUrl = params.get("redirect") || "/index.html";
      window.location.href = redirectUrl;

    
    } else {
      alert(data.error || "Login failed");
      console.error("Login error:", data.error);
    }
  } catch (err) {
    alert("Network error: " + err.message);
    console.error(err);
  }
});

  document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const registered = params.get("registered");
    if (registered === "1") {
      const successMsg = document.getElementById("registrationSuccess");
      if (successMsg) {
        successMsg.classList.remove("hidden");
      }
    }
  });
