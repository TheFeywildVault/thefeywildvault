// Expand/Collapse dropdown
function toggleDropdown(id, buttonElement) {
  const dropdown = document.getElementById(id);
  const arrow = buttonElement?.querySelector('.arrow');

  if (!dropdown) return;

  const isCurrentlyHidden = dropdown.classList.contains('hidden');

  if (!isCurrentlyHidden) {
    if (id === 'typeDropdown') {
      // If any checked .type checkbox has a data-parent (Category) that is unchecked, keep open
      const uncheckedCategories = new Set(
        Array.from(document.querySelectorAll('.dropdown-checkbox.category:not(:checked)')).map(cb => cb.value)
      );
      const checkedTypes = Array.from(document.querySelectorAll('.dropdown-checkbox.type:checked'));
      const shouldStayOpen = checkedTypes.some(cb => uncheckedCategories.has(cb.dataset.parent));
      if (shouldStayOpen) return;
    }

    if (id === 'itemOptions') {
      // If any checked .item checkbox has a data-parent (Type) that is unchecked, keep open
      const uncheckedTypes = new Set(
        Array.from(document.querySelectorAll('.dropdown-checkbox.type:not(:checked)')).map(cb => cb.value)
      );
      const checkedItems = Array.from(document.querySelectorAll('.dropdown-checkbox.item:checked'));
      const shouldStayOpen = checkedItems.some(cb => uncheckedTypes.has(cb.dataset.parent));
      if (shouldStayOpen) return;
    }
  }

  dropdown.classList.toggle('hidden');
  if (arrow) {
    arrow.innerHTML = dropdown.classList.contains('hidden') ? '&#9662;' : '&#9652;';
  }
}


// Keep dropdowns open if child selections require it
function updateDropdownOpenStates() {
  const typeDropdown = document.getElementById('typeDropdown');
  const itemDropdown = document.getElementById('itemOptions');

  const uncheckedCategories = new Set(
    Array.from(document.querySelectorAll('.dropdown-checkbox.category:not(:checked)')).map(cb => cb.value)
  );
  const checkedTypes = Array.from(document.querySelectorAll('.dropdown-checkbox.type:checked'));
  const typeShouldStayOpen = checkedTypes.some(cb => uncheckedCategories.has(cb.dataset.parent));
  if (typeShouldStayOpen) typeDropdown.classList.remove('hidden');

  const uncheckedTypes = new Set(
    Array.from(document.querySelectorAll('.dropdown-checkbox.type:not(:checked)')).map(cb => cb.value)
  );
  const checkedItems = Array.from(document.querySelectorAll('.dropdown-checkbox.item:checked'));
  const itemShouldStayOpen = checkedItems.some(cb => uncheckedTypes.has(cb.dataset.parent));
  if (itemShouldStayOpen) itemDropdown.classList.remove('hidden');
}


// Select/Unselect All
function selectAll() {
  document.querySelectorAll('.dropdown-checkbox').forEach(cb => cb.checked = true);
  updateDependentCheckboxes();
  updateDropdownOpenStates();
  updateTooltip(); // Refresh tooltip
}

function unselectAll() {
  document.querySelectorAll('.dropdown-checkbox').forEach(cb => cb.checked = false);
  updateDependentCheckboxes();
  updateDropdownOpenStates();
  updateTooltip(); // Refresh tooltip
}


// Recursive child selection
function checkOrUncheckChildren(checkbox) {
  const value = checkbox.value;
  const isChecked = checkbox.checked;
  const childCheckboxes = Array.from(document.querySelectorAll(`.dropdown-checkbox[data-parent="${value}"]`));
  childCheckboxes.forEach(child => {
    child.checked = isChecked;
    checkOrUncheckChildren(child);
  });
}

// Update visibility of child checkboxes
function updateDependentCheckboxes() {
  const selectedCategories = Array.from(document.querySelectorAll('.dropdown-checkbox.category:checked')).map(cb => cb.value);
  const selectedTypes = Array.from(document.querySelectorAll('.dropdown-checkbox.type:checked')).map(cb => cb.value);

  const typeDropdown = document.getElementById('typeDropdown');
  const itemDropdown = document.getElementById('itemOptions');

  // Clean up placeholders
  typeDropdown.querySelectorAll('.placeholder-message').forEach(el => el.remove());
  itemDropdown.querySelectorAll('.placeholder-message').forEach(el => el.remove());

  // === TYPE GROUPS ===
  let typeVisible = false;
  const typeGroups = typeDropdown.querySelectorAll('.type-group');
  typeGroups.forEach(group => {
    const groupCategory = group.dataset.group;
    const inputs = group.querySelectorAll('input[type="checkbox"]');

    // If category is selected OR any checkbox in this group is checked
    const visible = selectedCategories.includes(groupCategory) || Array.from(inputs).some(input => input.checked);

    group.classList.toggle('hidden', !visible);
    inputs.forEach(input => {
      const label = input.closest('label');
      label.classList.toggle('hidden', !visible);
    });

    if (visible) typeVisible = true;
  });

  if (!typeVisible) {
    const placeholder = document.createElement('div');
    placeholder.textContent = '- Select a Category -';
    placeholder.className = 'placeholder-message px-4 py-2 text-center text-md text-white-500 italic';
    typeDropdown.appendChild(placeholder);
  }

  // === ITEM GROUPS ===
  let itemVisible = false;
  const itemGroups = itemDropdown.querySelectorAll('.item-group');
  itemGroups.forEach(group => {
    const groupType = group.dataset.group;
    const inputs = group.querySelectorAll('input[type="checkbox"]');

    // If type is selected OR any checkbox in this group is checked
    const visible = selectedTypes.includes(groupType) || Array.from(inputs).some(input => input.checked);

    group.classList.toggle('hidden', !visible);
    inputs.forEach(input => {
      const label = input.closest('label');
      label.classList.toggle('hidden', !visible);
    });

    if (visible) itemVisible = true;
  });

  if (!itemVisible) {
    const placeholder = document.createElement('div');
    placeholder.textContent = '- Select a Type -';
    placeholder.className = 'placeholder-message px-4 py-2 text-md text-center text-white-500 italic';
    itemDropdown.appendChild(placeholder);
  }
}


// Group Type Checkboxes by Category
function groupTypeCheckboxes() {
  const typeDropdown = document.getElementById('typeDropdown');
  const checkboxes = Array.from(typeDropdown.querySelectorAll('.dropdown-checkbox.type'));
  const groups = {};
  checkboxes.forEach(cb => {
    const parent = cb.dataset.parent;
    if (!groups[parent]) groups[parent] = [];
    groups[parent].push(cb.closest('label'));
  });

  typeDropdown.innerHTML = '';
  for (const parent in groups) {
    const groupWrapper = document.createElement('div');
    groupWrapper.className = 'type-group space-y-1';
    groupWrapper.dataset.group = parent;

    const title = document.createElement('div');
    title.className = 'font-bold px-4 py-1';
    title.textContent = parent;

    const divider = document.createElement('div');
    divider.className = 'border-b border-gray-300 dark:border-gray-600 mb-2';

    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-2 gap-x-4';

    groups[parent].forEach(label => grid.appendChild(label));

    groupWrapper.appendChild(title);
    groupWrapper.appendChild(divider);
    groupWrapper.appendChild(grid);
    typeDropdown.appendChild(groupWrapper);
  }
}

// Group Item Checkboxes by Type
function groupItemCheckboxes() {
  const itemDropdown = document.getElementById('itemOptions');
  const checkboxes = Array.from(itemDropdown.querySelectorAll('.dropdown-checkbox.item'));
  const groups = {};
  checkboxes.forEach(cb => {
    const parent = cb.dataset.parent;
    if (!groups[parent]) groups[parent] = [];
    groups[parent].push(cb.closest('label'));
  });

  itemDropdown.innerHTML = '';
  for (const parent in groups) {
    const groupWrapper = document.createElement('div');
    groupWrapper.className = 'item-group space-y-1';
    groupWrapper.dataset.group = parent;

    const title = document.createElement('div');
    title.className = 'font-bold px-4 py-1';
    title.textContent = parent;

    const divider = document.createElement('div');
    divider.className = 'border-b border-gray-300 dark:border-gray-600 mb-2';

    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-2 gap-x-4';

    groups[parent].forEach(label => grid.appendChild(label));

    groupWrapper.appendChild(title);
    groupWrapper.appendChild(divider);
    groupWrapper.appendChild(grid);
    itemDropdown.appendChild(groupWrapper);
  }
}

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  // Group structure
  groupTypeCheckboxes();
  groupItemCheckboxes();

  // Initial display
  updateDependentCheckboxes();
  updateDropdownOpenStates();

  // Set up change listeners
document.querySelectorAll('.dropdown-checkbox.category').forEach(cb => {
  cb.addEventListener('change', () => {
    updateDependentCheckboxes();
    updateDropdownOpenStates();

    // 👇 NEW: Auto-open Type dropdown if any Category is checked
    const anyCategoryChecked = document.querySelector('.dropdown-checkbox.category:checked');
    const typeDropdown = document.getElementById('typeDropdown');
    if (anyCategoryChecked) {
      typeDropdown.classList.remove('hidden');
    }
  });
});

document.querySelectorAll('.dropdown-checkbox.type').forEach(cb => {
  cb.addEventListener('change', () => {
    updateDependentCheckboxes();
    updateDropdownOpenStates();

    // 👇 NEW: Auto-open Item dropdown if any Type is checked
    const anyTypeChecked = document.querySelector('.dropdown-checkbox.type:checked');
    const itemDropdown = document.getElementById('itemOptions');
    if (anyTypeChecked) {
      itemDropdown.classList.remove('hidden');
    }
  });
});

  document.querySelectorAll('.dropdown-checkbox.item').forEach(cb => {
    cb.addEventListener('change', () => {
      updateDependentCheckboxes();
      updateDropdownOpenStates();
    });
  });
});