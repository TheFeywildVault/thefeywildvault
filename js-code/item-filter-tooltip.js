function updateTooltip() {
  const tooltip = document.getElementById('item-tooltip');
  const selectedItems = getSelectedDeepestItems();

  if (selectedItems.length === 0) {
    tooltip.textContent = 'All items are currently shown.';
  } else {
    tooltip.textContent = 'Selected Items: ' + selectedItems.join(', ');
  }
}

// Optional: update the tooltip when checkboxes change
document.querySelectorAll('.dropdown-checkbox').forEach(cb => {
  cb.addEventListener('change', updateTooltip);
});

// Optional: call once on page load
updateTooltip();