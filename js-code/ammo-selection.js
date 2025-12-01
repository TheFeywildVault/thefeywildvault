// Munitions Dropdown - dedicated function so it doesn't collide with other dropdowns
window.toggleAmmoDropdown = function (buttonElement) {
  console.log("toggleAmmoDropdown clicked", buttonElement);

  // Always anchor to the ammo container by ID
  const container = document.getElementById('ammoDropdown');
  if (!container) {
    console.warn('toggleAmmoDropdown: #ammoDropdown not found in DOM');
    return;
  }

  // Find this dropdown's content area
  const dropdown = container.querySelector('.dropdown-content');
  const arrow = buttonElement.querySelector('.arrow');

  if (!dropdown) {
    console.warn('toggleAmmoDropdown: .dropdown-content not found inside #ammoDropdown');
    return;
  }

  // Determine current visibility
  const isHidden =
    dropdown.classList.contains('hidden') ||
    dropdown.style.display === 'none';

  if (isHidden) {
    // Show it
    dropdown.classList.remove('hidden');
    dropdown.classList.add('two-column-dropdown'); // optional layout class
    dropdown.style.display = 'block';              // override any CSS display:none
  } else {
    // Hide it
    dropdown.classList.add('hidden');
    dropdown.classList.remove('two-column-dropdown');
    dropdown.style.display = 'none';
  }

  if (arrow) {
    // ▲ when open, ▼ when closed
    arrow.innerHTML = isHidden ? '&#9652;' : '&#9662;';
  }
};

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
  if (!container) return; // prevent errors on pages without this dropdown

  container.querySelectorAll('.dropdown-checkbox.ammo').forEach(cb => {
    cb.addEventListener('change', () => updateDependentCheckboxes(container));
  });

  updateDependentCheckboxes(container);
});