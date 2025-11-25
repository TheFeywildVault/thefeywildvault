  function toggleCurse() {
    const button = document.getElementById('curseButton');
    button.classList.remove('no-curses', 'some-curses', 'all-cursed'); // Reset

    if (button.textContent === 'No Curses') {
      button.classList.add('some-curses');
      button.textContent = 'Some Curses';
    } else if (button.textContent === 'Some Curses') {
      button.classList.add('all-cursed');
      button.textContent = 'All Cursed';
    } else {
      button.classList.add('no-curses');
      button.textContent = 'No Curses';
    }
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