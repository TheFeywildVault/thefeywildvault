//Munitions Dropdown
function toggleDropdown(buttonElement) {
  const container = buttonElement.closest('#ammoDropdown');
  const dropdown = container.querySelector('.dropdown-content');
  const arrow = buttonElement.querySelector('.arrow');

  const isHidden = dropdown.classList.contains('hidden');

  if (isHidden) {
    dropdown.classList.remove('hidden');
    dropdown.classList.add('two-column-dropdown');  // Apply two-column grid
  } else {
    dropdown.classList.add('hidden');
    dropdown.classList.remove('two-column-dropdown'); // Remove when hiding
  }

  if (arrow) {
    arrow.innerHTML = isHidden ? '&#9652;' : '&#9662;';
  }
}

function selectAllInDropdown(containerId) {
  const container = document.getElementById(containerId);
  container.querySelectorAll('.dropdown-checkbox').forEach(cb => cb.checked = true);
  updateDependentCheckboxes(container);
}

function unselectAllInDropdown(containerId) {
  const container = document.getElementById(containerId);
  container.querySelectorAll('.dropdown-checkbox').forEach(cb => cb.checked = false);
  updateDependentCheckboxes(container);
}

function updateDependentCheckboxes(container) {
  const selectedSchools = Array.from(
    container.querySelectorAll('.dropdown-checkbox.ammo:checked')
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
  const container = document.getElementById('ammoDropdown');

  container.querySelectorAll('.dropdown-checkbox.ammo').forEach(cb => {
    // cb.checked = true; ← removed this line to prevent auto-check
    cb.addEventListener('change', () => updateDependentCheckboxes(container));
  });

  updateDependentCheckboxes(container);
});