function switchTheme() {
  const navbar = document.querySelector('.navbar');
  const cards = document.querySelectorAll('.item-card');
  const textElements = document.querySelectorAll('.text');
  const linkElements = document.querySelectorAll('.link');
  const headerElements = document.querySelectorAll('.header');
  let theme = 'light-theme';

  // Check if there's a theme preference stored in a cookie
  const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)theme\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  if (cookieValue === 'dark-theme') {
    theme = 'dark-theme';
  }

  // Check the current theme and toggle to the opposite theme
  if (theme === 'dark-theme') {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    navbar.classList.remove('navbar-dark');
    navbar.classList.add('navbar-light');
    theme = 'light-theme';
  } else {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    navbar.classList.remove('navbar-light');
    navbar.classList.add('navbar-dark');
    theme = 'dark-theme';
  }

  // Store the new theme preference in a cookie
  document.cookie = `theme=${theme};path=/`;

  // Update the styles for each element based on the new theme
  if (theme === 'dark-theme') {
    navbar.style.backgroundColor = '#212121';
    navbar.style.color = '#ffffff';
    cards.forEach(card => {
      card.style.backgroundColor = '#212121';
      card.style.color = '#ffffff';
    });
    textElements.forEach(element => {
      element.style.color = '#ffffff';
    });
    linkElements.forEach(element => {
      element.style.color = '#00ffff';
    });
    headerElements.forEach(element => {
      element.style.color = '#ffffff';
    });
  } else {
    navbar.style.backgroundColor = '#ffffff';
    navbar.style.color = '#000000';
    cards.forEach(card => {
      card.style.backgroundColor = '#ffffff';
      card.style.color = '#000000';
    });
    textElements.forEach(element => {
      element.style.color = '#000000';
    });
    linkElements.forEach(element => {
      element.style.color = '#0000ff';
    });
    headerElements.forEach(element => {
      element.style.color = '#000000';
    });
  }
}

const themeButton = document.querySelector('.theme-button');
themeButton.addEventListener('click', switchTheme);

// Check for a saved theme preference when the page loads
const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)theme\s*\=\s*([^;]*).*$)|^.*$/, "$1");
if (cookieValue === 'dark-theme') {
  switchTheme();
}




  
