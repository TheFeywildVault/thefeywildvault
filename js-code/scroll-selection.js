//School Dropdown
function toggleDropdown(buttonElement) {
  const container = buttonElement.closest('#scrollSchoolDropdown');
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

function selectAllInSCHDropdown(containerId) {
  const container = document.getElementById(containerId);
  container.querySelectorAll('.dropdown-checkbox').forEach(cb => cb.checked = true);
  updateDependentCheckboxes(container);
}

function unselectAllInSCHDropdown(containerId) {
  const container = document.getElementById(containerId);
  container.querySelectorAll('.dropdown-checkbox').forEach(cb => cb.checked = false);
  updateDependentCheckboxes(container);
}

function updateDependentCheckboxes(container) {
  const selectedSchools = Array.from(
    container.querySelectorAll('.dropdown-checkbox.school:checked')
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
  const container = document.getElementById('scrollSchoolDropdown');

  container.querySelectorAll('.dropdown-checkbox.school').forEach(cb => {
    // cb.checked = true; ← removed this line to prevent auto-check
    cb.addEventListener('change', () => updateDependentCheckboxes(container));
  });

  updateDependentCheckboxes(container);
});

//Element Dropdown
function toggleDropdownElement(buttonElement) {
  const container = buttonElement.closest('#scrollElementDropdown');
  const dropdown = container.querySelector('.dropdown-content');
  const arrow = buttonElement.querySelector('.arrow');

  const isHidden = dropdown.classList.contains('hidden');

  if (isHidden) {
    dropdown.classList.remove('hidden');
    dropdown.classList.add('two-column-dropdown'); // Apply two-column grid
  } else {
    dropdown.classList.add('hidden');
    dropdown.classList.remove('two-column-dropdown'); // Remove when hiding
  }

  if (arrow) {
    arrow.innerHTML = isHidden ? '&#9652;' : '&#9662;';
  }
}

function selectAllInEDropdown(containerId) {
  const container = document.getElementById(containerId);
  container.querySelectorAll('.dropdown-checkbox').forEach(cb => cb.checked = true);
  updateDependentElementCheckboxes(container);
}

function unselectAllInEDropdown(containerId) {
  const container = document.getElementById(containerId);
  container.querySelectorAll('.dropdown-checkbox').forEach(cb => cb.checked = false);
  updateDependentElementCheckboxes(container);
}

function updateDependentECheckboxes(container) {
  const selectedElements = Array.from(
    container.querySelectorAll('.dropdown-checkbox.element:checked')
  ).map(cb => cb.value);

  const groups = container.querySelectorAll('.type-group');

  groups.forEach(group => {
    const groupCategory = group.dataset.group;
    const visible = selectedElements.includes(groupCategory);
    group.classList.toggle('hidden', !visible);

    const inputs = group.querySelectorAll('input[type="checkbox"]');
    inputs.forEach(input => {
      const label = input.closest('label');
      label.classList.toggle('hidden', !visible);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('scrollElementDropdown');

  container.querySelectorAll('.dropdown-checkbox.element').forEach(cb => {
    // cb.checked = true; ← intentionally omitted to prevent auto-check
    cb.addEventListener('change', () => updateDependentElementCheckboxes(container));
  });

  updateDependentElementCheckboxes(container);
});

function toggleScrollEffects() {
    const resultDiv = document.getElementById('result');
    const toggleButton = document.getElementById('toggleEffectButton');

    const isHidden = resultDiv.classList.toggle('hide-effect');

    if (isHidden) {
        toggleButton.classList.add('button-inactive');
        toggleButton.textContent = 'Spell Effect Hidden';
    } else {
        toggleButton.classList.remove('button-inactive');
        toggleButton.textContent = 'Spell Effect Shown';
    }
}

//Casting Time Dropdown
function toggleDropdownCasting(buttonCast) {
  const container = buttonCast.closest('#scrollCastDropdown');
  const dropdown = container.querySelector('.dropdown-content');
  const arrow = buttonCast.querySelector('.arrow');

  const isHidden = dropdown.classList.contains('hidden');

  if (isHidden) {
    dropdown.classList.remove('hidden');
    dropdown.classList.add('two-column-dropdown'); // Apply two-column grid
  } else {
    dropdown.classList.add('hidden');
    dropdown.classList.remove('two-column-dropdown'); // Remove when hiding
  }

  if (arrow) {
    arrow.innerHTML = isHidden ? '&#9652;' : '&#9662;';
  }
}

function selectAllInCSTDropdown(containerId) {
  const container = document.getElementById(containerId);
  container.querySelectorAll('.dropdown-checkbox').forEach(cb => cb.checked = true);
  updateDependentCastCheckboxes(container);
}

function unselectAllInCSTDropdown(containerId) {
  const container = document.getElementById(containerId);
  container.querySelectorAll('.dropdown-checkbox').forEach(cb => cb.checked = false);
  updateDependentCastCheckboxes(container);
}

function updateDependentCastCheckboxes(container) {
  const selectedCast = Array.from(
    container.querySelectorAll('.dropdown-checkbox.cast:checked')
  ).map(cb => cb.value);

  const groups = container.querySelectorAll('.type-group');

  groups.forEach(group => {
    const groupCategory = group.dataset.group;
    const visible = selectedCast.includes(groupCategory);
    group.classList.toggle('hidden', !visible);

    const inputs = group.querySelectorAll('input[type="checkbox"]');
    inputs.forEach(input => {
      const label = input.closest('label');
      label.classList.toggle('hidden', !visible);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('scrollCastDropdown');

  container.querySelectorAll('.dropdown-checkbox.cast').forEach(cb => {
    // cb.checked = true; ← intentionally omitted to prevent auto-check
    cb.addEventListener('change', () => updateDependentCastCheckboxes(container));
  });

  updateDependentCastCheckboxes(container);
});

// Toggle Type Dropdown
function toggleDropdownType(buttonType) {
  const container = buttonType.closest('#scrollTypeDropdown');
  const dropdown = container.querySelector('.dropdown-content');
  const arrow = buttonType.querySelector('.arrow');

  const isHidden = dropdown.classList.contains('hidden');

  if (isHidden) {
    dropdown.classList.remove('hidden');
    dropdown.classList.add('two-column-dropdown'); // Optional class if needed
  } else {
    dropdown.classList.add('hidden');
    dropdown.classList.remove('two-column-dropdown');
  }

  if (arrow) {
    arrow.innerHTML = isHidden ? '&#9652;' : '&#9662;';
  }
}

// Select all in Type Dropdown
function selectAllInTYPDropdown(containerId) {
  const container = document.getElementById(containerId);
  container.querySelectorAll('.dropdown-checkbox').forEach(cb => cb.checked = true);
}

// Unselect all in Type Dropdown
function unselectAllInTYPDropdown(containerId) {
  const container = document.getElementById(containerId);
  container.querySelectorAll('.dropdown-checkbox').forEach(cb => cb.checked = false);
}

// DOM Ready Listener for "type" checkboxes
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('scrollTypeDropdown');

  if (container) {
    container.querySelectorAll('.dropdown-checkbox.type').forEach(cb => {
      cb.addEventListener('change', () => {
        // You can add future functionality here if needed
      });
    });
  }
});

// Toggle Status Dropdown
function toggleDropdownStatus(buttonStatus) {
  const container = buttonStatus.closest('#scrollStatusDropdown');
  const dropdown = container.querySelector('.dropdown-content');
  const arrow = buttonStatus.querySelector('.arrow');

  const isHidden = dropdown.classList.contains('hidden');

  if (isHidden) {
    dropdown.classList.remove('hidden');
    dropdown.classList.add('two-column-dropdown'); // Optional
  } else {
    dropdown.classList.add('hidden');
    dropdown.classList.remove('two-column-dropdown');
  }

  if (arrow) {
    arrow.innerHTML = isHidden ? '&#9652;' : '&#9662;';
  }
}

// Select all in Status Dropdown
function selectAllInSTSDropdown(containerId) {
  const container = document.getElementById(containerId);
  container.querySelectorAll('.dropdown-checkbox').forEach(cb => cb.checked = true);
}

// Unselect all in Status Dropdown
function unselectAllInSTSDropdown(containerId) {
  const container = document.getElementById(containerId);
  container.querySelectorAll('.dropdown-checkbox').forEach(cb => cb.checked = false);
}

// DOM Ready Listener for "status" checkboxes
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('scrollStatusDropdown');

  if (container) {
    container.querySelectorAll('.dropdown-checkbox.status').forEach(cb => {
      cb.addEventListener('change', () => {
        // Reserved for future logic if needed
      });
    });
  }
});

// Toggle Source Dropdown
function toggleDropdownSource(buttonSource) {
  const container = buttonSource.closest('#scrollSourceDropdown');
  const dropdown = container.querySelector('.dropdown-content');
  const arrow = buttonSource.querySelector('.arrow');

  const isHidden = dropdown.classList.contains('hidden');

  if (isHidden) {
    dropdown.classList.remove('hidden');
    dropdown.classList.add('two-column-dropdown'); // Optional visual class
  } else {
    dropdown.classList.add('hidden');
    dropdown.classList.remove('two-column-dropdown');
  }

  if (arrow) {
    arrow.innerHTML = isHidden ? '&#9652;' : '&#9662;';
  }
}

// Select all checkboxes in Source Dropdown
function selectAllInSCEDropdown(containerId) {
  const container = document.getElementById(containerId);
  container.querySelectorAll('.dropdown-checkbox').forEach(cb => cb.checked = true);
}

// Unselect all checkboxes in Source Dropdown
function unselectAllInSCEDropdown(containerId) {
  const container = document.getElementById(containerId);
  container.querySelectorAll('.dropdown-checkbox').forEach(cb => cb.checked = false);
}

// Optional: Attach change listeners (future extensibility)
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('scrollSourceDropdown');

  if (container) {
    container.querySelectorAll('.dropdown-checkbox.source').forEach(cb => {
      cb.addEventListener('change', () => {
        // Future use: update display or trigger filtering
      });
    });
  }
});