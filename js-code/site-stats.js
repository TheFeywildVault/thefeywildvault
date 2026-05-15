document.addEventListener("DOMContentLoaded", () => {
  const generateButton = document.getElementById("generateButton");
  const countDisplay = document.getElementById("itemGenerationCount");
  const duplicateDisplays = document.querySelectorAll(".itemGenerationCountDuplicate");

  function updateCountText(count) {
    const formattedCount = Number(count || 0).toLocaleString();

    if (countDisplay) {
      countDisplay.textContent = formattedCount;
    }

    duplicateDisplays.forEach(display => {
      display.textContent = formattedCount;
    });
  }

  async function loadItemGenerationCount() {
    try {
      const response = await fetch("/api/site-stats/items-generated");
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

      const response = await fetch("/api/site-stats/items-generated/increment", {
        method: "POST",
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