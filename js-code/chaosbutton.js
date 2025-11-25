let chaosState = 0; // 0 = True Chaos, 1 = Player Level, 2 = Spell Level

function toggleChaos() {
  const button = document.getElementById('chaosfilterButton');
  //const dropdown = document.getElementById('levelDropdown');

  // Reset all classes
  button.classList.remove('true-chaos', 'player-filter', 'spell-filter');

  // Cycle to next state
  chaosState = (chaosState + 1) % 3;

  if (chaosState === 0) {
    button.classList.add('true-chaos');
    button.textContent = 'True Chaos';
    populateDropdown('none');
  } else if (chaosState === 1) {
    button.classList.add('player-filter');
    button.textContent = 'Player Level Filter';
    populateDropdown('player');
  } else if (chaosState === 2) {
    button.classList.add('spell-filter');
    button.textContent = 'Spell Level Filter';
    populateDropdown('spell');
  }
}

function populateDropdown(type) {
  const dropdown = document.getElementById('levelDropdown');
  dropdown.innerHTML = ''; // Clear old options

  if (type === 'none') {
    const option = document.createElement('option');
    option.value = '';
    option.textContent = 'No filter active';
    dropdown.appendChild(option);
  } else {
    let options = [];

    if (type === 'player') {
      options = [
        { value: '1-4', label: 'Levels 1–4' },
        { value: '5-9', label: 'Levels 5–9' },
        { value: '10-20', label: 'Levels 10–20' }
      ];
    } else if (type === 'spell') {
      options = [
        { value: '1-2', label: 'Levels 1–2' },
        { value: '3-4', label: 'Levels 3–4' },
        { value: '5-9', label: 'Levels 5–9' }
      ];
    }

    // Add placeholder option
    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = 'Select a level range';
    placeholder.disabled = true;
    placeholder.selected = true;
    dropdown.appendChild(placeholder);

    // Add the actual options
    options.forEach(({ value, label }) => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = label;
      dropdown.appendChild(option);
    });
  }
}