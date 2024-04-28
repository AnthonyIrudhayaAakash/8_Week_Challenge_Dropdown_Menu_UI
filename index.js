function toggleDropdown() {
    const dropdownContent = document.getElementById('dropdownContent');
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
}

// Close dropdown when clicking outside
window.onclick = function(event) {
    const dropdownContent = document.getElementById('dropdownContent');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    if (event.target !== dropdownToggle && !dropdownToggle.contains(event.target)) {
        dropdownContent.style.display = 'none';
    }
}
