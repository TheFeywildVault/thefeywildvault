let homebrewState = 0;
// 0 = Official Content only
// 1 = Official + Homebrew

function toggleHomebrew() {
  const button = document.getElementById("homebrewfilterButton");

  if (!button) return;

  // Cycle between 0 and 1
  homebrewState = (homebrewState + 1) % 2;

  // Reset classes
  button.classList.remove("official-content", "official-homebrew");

  if (homebrewState === 0) {
    button.classList.add("official-content");
    button.textContent = "Official Content";
  } else {
    button.classList.add("official-homebrew");
    button.textContent = "Official + Homebrew";
  }

  // Optional: refresh monster match count if you have a function for that
  if (typeof updateMonsterFilterInfo === "function") {
    updateMonsterFilterInfo();
  }
}

// Make available to inline onclick
window.toggleHomebrew = toggleHomebrew;