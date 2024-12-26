const sendAlertButton = document.getElementById('sendAlert');
const alertsDiv = document.getElementById('alerts');
const clearAllButton = document.getElementById('clearAll');
const themeToggle = document.getElementById('themeToggle');
let isDarkMode = false;

// Send Alert Functionality
sendAlertButton.addEventListener('click', () => {
    const studentName = document.getElementById('studentName').value.trim();
    const taskDescription = document.getElementById('taskDescription').value.trim();

    if (!studentName || !taskDescription) {
        alert('Please fill in both fields!');
        return;
    }

    // Create alert element
    const alertDiv = document.createElement('div');
    alertDiv.innerHTML = `
        <strong>${studentName}</strong>: ${taskDescription}
        <button class="deleteAlert">X</button>
    `;

    // Add delete functionality
    alertDiv.querySelector('.deleteAlert').addEventListener('click', () => {
        alertsDiv.removeChild(alertDiv);
        toggleClearAllButton();
    });

    // Append to alerts container
    alertsDiv.appendChild(alertDiv);

    // Clear inputs
    document.getElementById('studentName').value = '';
    document.getElementById('taskDescription').value = '';

    toggleClearAllButton();
});

// Clear All Alerts
clearAllButton.addEventListener('click', () => {
    alertsDiv.innerHTML = '<p>No alerts yet.</p>';
    clearAllButton.classList.add('hidden');
});

// Toggle Clear All Button
function toggleClearAllButton() {
    if (alertsDiv.children.length > 0) {
        clearAllButton.classList.remove('hidden');
    } else {
        clearAllButton.classList.add('hidden');
    }
}

// Theme Toggle
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    isDarkMode = !isDarkMode;
    themeToggle.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});