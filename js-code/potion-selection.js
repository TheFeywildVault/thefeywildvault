//Type Dropdown
function toggleDropdown(idOrButton) {
  let dropdown;
  let arrow = null;

  // CASE 1: Called with an ID string (rarity dropdown)
  if (typeof idOrButton === 'string') {
    dropdown = document.getElementById(idOrButton);

    // Find the button inside the same parent so we can rotate the arrow
    const parent = dropdown?.parentElement;
    const button = parent?.querySelector('button');
    arrow = button?.querySelector('.arrow');
  }

  // CASE 2: Called with a button element (type dropdown)
  else {
    const buttonElement = idOrButton;
    const container = buttonElement.closest('#potionTypeDropdown');
    dropdown = container?.querySelector('.dropdown-content');
    arrow = buttonElement.querySelector('.arrow');
  }

  // Stop if dropdown was not found
  if (!dropdown) return;

  const isHidden = dropdown.classList.contains('hidden');

  if (isHidden) {
    dropdown.classList.remove('hidden');

    // Only add two-column styling to the Type dropdown
    if (dropdown.classList.contains('dropdown-content')) {
      dropdown.classList.add('two-column-dropdown');
    }
  } else {
    dropdown.classList.add('hidden');

    if (dropdown.classList.contains('dropdown-content')) {
      dropdown.classList.remove('two-column-dropdown');
    }
  }

  // Update arrow icon
  if (arrow) {
    arrow.innerHTML = isHidden ? '&#9652;' : '&#9662;';
  }
}
function selectAllInCATDropdown(containerId) {
  const container = document.getElementById(containerId);
  container.querySelectorAll('.dropdown-checkbox').forEach(cb => cb.checked = true);
  updateDependentCheckboxes(container);
}

function unselectAllInCATDropdown(containerId) {
  const container = document.getElementById(containerId);
  container.querySelectorAll('.dropdown-checkbox').forEach(cb => cb.checked = false);
  updateDependentCheckboxes(container);
}

function updateDependentCheckboxes(container) {
  const selectedSchools = Array.from(
    container.querySelectorAll('.dropdown-checkbox.pcat:checked')
  ).map(cb => cb.value);

  const groups = container.querySelectorAll('.type-group');

  groups.forEach(group => {
    const groupCategory = group.dataset.group;
    const visible = selectedSchools.includes(groupCategory);
    group.classList.toggle('hidden', !visible);

    const inputs = group.querySelectorAll('input[type="checkbox"]');
    inputs.forEach(input => {
      const label = input.closest('label');
      label.classList.toggle('hidden', !visible);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('potionTypeDropdown');

  container.querySelectorAll('.dropdown-checkbox.pcat').forEach(cb => {
    // cb.checked = true; ← removed this line to prevent auto-check
    cb.addEventListener('change', () => updateDependentCheckboxes(container));
  });

  updateDependentCheckboxes(container);
});

function selectAllRarities() {
  document.querySelectorAll('#rarityDropdown .rarity').forEach(cb => {
    cb.checked = true;
  });
}

function unselectAllRarities() {
  document.querySelectorAll('#rarityDropdown .rarity').forEach(cb => {
    cb.checked = false;
  });
}