const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value;

  try {
    const res = await fetch("https://api.thefeywildvault.com/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      const params = new URLSearchParams(window.location.search);
      const redirectParam = params.get("redirect");

      let redirectUrl = redirectParam || "./index.html";

      if (
        redirectUrl.includes("/login") ||
        redirectUrl.includes("/login.html") ||
        redirectUrl.includes("/register") ||
        redirectUrl.includes("/register.html")
      ) {
        redirectUrl = "./index.html";
      }

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
  const redirectParam = params.get("redirect");

  const registered = params.get("registered");
  if (registered === "1") {
    const successMsg = document.getElementById("registrationSuccess");
    if (successMsg) {
      successMsg.classList.remove("hidden");
    }
  }

  const registerLink = document.getElementById("registerLink");
  if (registerLink) {
    const targetRedirect = redirectParam || "./index.html";
    registerLink.href = `./register.html?redirect=${encodeURIComponent(targetRedirect)}`;
  }
});