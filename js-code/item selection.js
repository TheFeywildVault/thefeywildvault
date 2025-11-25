// Aligns subcat windows with highlighted item - Add hover event listener to all nested labels (categories)
document.querySelectorAll('.nested-label').forEach(function(label) {
    label.addEventListener('mouseenter', function() {
        // Get the current label's position
        var labelRect = label.getBoundingClientRect();

        // Find the subcategory content within the current label
        var subcategoryContent = label.querySelector('.subcategory-content');

        if (subcategoryContent) {
            // Set subcategory to visible
            subcategoryContent.style.display = 'block';
            
            // Adjust the top position so the first item aligns with the hovered category
            var parentTop = labelRect.top;
            var dropdownTop = parentTop - subcategoryContent.getBoundingClientRect().top;

            // Apply the top adjustment
            subcategoryContent.style.top = dropdownTop + 'px';
        }
    });

// Add change event listener to all parent category checkboxes
document.querySelectorAll('.parent-category-checkbox').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        // Get the nested subcategory checkboxes within this parent category
        var subcategoryItems = this.closest('.nested-label').querySelectorAll('.subcategory-content input[type="checkbox"]');

        // Check or uncheck all subcategory items based on the parent checkbox state
        subcategoryItems.forEach(function(subCheckbox) {
            subCheckbox.checked = checkbox.checked;
        });
    });
});


    // Hide subcategories when not hovering
    label.addEventListener('mouseleave', function() {
        var subcategoryContent = label.querySelector('.subcategory-content');
        if (subcategoryContent) {
            subcategoryContent.style.display = 'none';
        }
    });
});

        // Function to toggle the dropdown
        function toggleDropdown() {
            document.getElementById("dropdownContent").classList.toggle("show");
        }

        // Function to close the dropdown if clicked outside of it
        window.onclick = function(event) {
            if (!event.target.matches('.dropdown-button')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                for (var i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show') && !openDropdown.contains(event.target)) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }

        // Function to check/uncheck all checkboxes
        function checkAll(check) {
            var checkboxes = document.querySelectorAll('input[type="checkbox"]');
            for (var i = 0; i < checkboxes.length; i++) {
                checkboxes[i].checked = check;
            }
        }

        // Function to toggle subcategories based on category checkbox state
        function toggleSubcategories(checkbox, event) {
            event.stopPropagation();
            var subcategoryContent = checkbox.parentElement.querySelector('.subcategory-content');
            if (subcategoryContent) {
                var subCheckboxes = subcategoryContent.querySelectorAll('input[type="checkbox"]');
                subCheckboxes.forEach(function(subCheckbox) {
                    subCheckbox.checked = checkbox.checked;
                });
            }
        }

// Function to get selected items from the deepest subcategories only
function getDeepestSelectedItems() {
    var checkboxes = document.querySelectorAll('.subcategory-content input[type="checkbox"]:checked');
    var selectedItems = [];
    var allDeepestItems = [];

    // Function to recursively find all deepest items
    function findDeepestItems(element) {
        var checkboxes = element.querySelectorAll('input[type="checkbox"]');
        var hasSubcategory = element.querySelector('.subcategory-content');
        var isDeepest = !hasSubcategory;

        checkboxes.forEach(function(checkbox) {
            if (isDeepest) {
                allDeepestItems.push(checkbox.value);
            }
        });

        if (hasSubcategory) {
            element.querySelectorAll('.subcategory-content').forEach(findDeepestItems);
        }
    }

    // Find all deepest items starting from the top level
    document.querySelectorAll('.subcategory-content').forEach(findDeepestItems);

    // Loop through the selected checkboxes and check if they are at the deepest level
    checkboxes.forEach(function(checkbox) {
        var parentSubcategory = checkbox.closest('.subcategory-content'); // Get the parent subcategory
        if (!parentSubcategory.querySelector('.subcategory-content')) {
            selectedItems.push(checkbox.value); // Add to list if it's in the deepest level
        }
    });

    // Display the selected deepest subcategory items or all deepest items if none are selected
    var result = selectedItems.length > 0 ? selectedItems : allDeepestItems;
    document.getElementById('result').innerText = 'Deepest Subcategory Items: ' + result.join(', ');
}

function checkAll(state) {
    // Select all checkboxes within the dropdown content
    const checkboxes = document.querySelectorAll('#dropdownContent input[type="checkbox"]');
    
    // Loop through each checkbox and set its checked state
    checkboxes.forEach(checkbox => {
        checkbox.checked = state;
    });
}

// Automatically check all checkboxes when the page loads
document.addEventListener("DOMContentLoaded", function() {
    checkAll(true);
});