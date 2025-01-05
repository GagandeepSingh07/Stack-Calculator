function calculateStacks() {
    const totalItems = parseInt(document.getElementById('totalItems').value);
    const stackSize = parseInt(document.querySelector('input[name="stackSize"]:checked').value);

    if (isNaN(totalItems) || totalItems < 0) {
      alert('Please enter a valid number of items.');
      return;
    }

    const stacks = Math.floor(totalItems / stackSize);
    const overflow = totalItems % stackSize;

    document.getElementById('fullStacks').value = `${stacks} stacks`;
    document.getElementById('overflowItems').value = `${overflow} items`;
  }

  function clearFields() {
    document.getElementById('totalItems').value = '';
    document.getElementById('fullStacks').value = '';
    document.getElementById('overflowItems').value = '';
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);

    // Change the button icon
    const toggleButton = document.querySelector('.toggle-theme');
    toggleButton.textContent = newTheme === 'dark' ? '☀️' : '🌙';
}


  // Set default theme to light
  document.documentElement.setAttribute('data-theme', 'light');