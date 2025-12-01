function toggleCurse() {
  const button = document.getElementById('curseButton');
  if (!button) return;

  // Clean up previous state classes
  button.classList.remove('no-curses', 'some-curses', 'all-cursed');

  const label = button.textContent.trim();

  if (label === 'No Curses') {
    // 0 -> 1 (Some Curses)
    button.classList.add('some-curses');
    button.textContent = 'Some Curses';
    window.curseStage = 1;
    button.dataset.stage = "1"; // optional, but keeps HTML in sync too

  } else if (label === 'Some Curses') {
    // 1 -> 2 (All Cursed)
    button.classList.add('all-cursed');
    button.textContent = 'All Cursed';
    window.curseStage = 2;
    button.dataset.stage = "2";

  } else {
    // 'All Cursed' or anything else -> 0 (No Curses)
    button.classList.add('no-curses');
    button.textContent = 'No Curses';
    window.curseStage = 0;
    button.dataset.stage = "0";
  }

  console.log('toggleCurse -> window.curseStage =', window.curseStage);
}

  function toggleStandardHomebrew() {
    const button = document.getElementById('StandardHomebrewButton');
    const currentText = button.textContent.trim(); // Trim to avoid hidden whitespace bugs

    if (currentText === 'Standard Items') {
      button.textContent = 'Standard + Homebrew';
      button.classList.remove('standard');
      button.classList.add('homebrew');
    } else {
      button.textContent = 'Standard Items';
      button.classList.remove('homebrew');
      button.classList.add('standard');
    }
  }