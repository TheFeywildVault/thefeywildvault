document.addEventListener("DOMContentLoaded", () => {
  const generateButton = document.getElementById("generateButton");
  const countDisplays = document.querySelectorAll(".itemGenerationCount");

  const API_BASE =
    window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
      ? "http://localhost:3000"
      : "https://api.thefeywildvault.com";

function updateCountText(count) {
  const formattedCount = Number(count || 0).toLocaleString();

  countDisplays.forEach(display => {
    display.textContent = formattedCount;
  });
}

  async function loadItemGenerationCount() {
    try {
      const response = await fetch(`${API_BASE}/api/site-stats/items-generated`, {
        method: "GET",
        credentials: "include"
      });

      const data = await response.json();

      if (data.success) {
        updateCountText(data.itemsGenerated);
      }
    } catch (error) {
      console.error("Failed to load item generation count:", error);
    }
  }

  async function incrementItemGenerationCount() {
    try {
      const runCountSelect = document.getElementById("runCount");
      const quantity = parseInt(runCountSelect?.value, 10) || 1;

      const response = await fetch(`${API_BASE}/api/site-stats/items-generated/increment`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ quantity })
      });

      const data = await response.json();

      if (data.success) {
        updateCountText(data.itemsGenerated);
      }
    } catch (error) {
      console.error("Failed to increment item generation count:", error);
    }
  }

  loadItemGenerationCount();

  if (generateButton) {
    generateButton.addEventListener("click", incrementItemGenerationCount);
  }
});