// switch-theme.js
const toggleSwitch = document.querySelector('#theme-switch');
const themeStyle = document.querySelector('#theme-style');

// Function to set the theme style sheet
function setTheme(theme) {
  themeStyle.href = `${theme}.css`;
  localStorage.setItem('theme', theme);
}

// Function to toggle between light and dark mode
function toggleTheme() {
  if (toggleSwitch.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    setTheme('dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    setTheme('light');
  }
}

// Check the local storage for the saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  setTheme(currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

// Add event listener to the switch button
toggleSwitch.addEventListener('change', toggleTheme);