const body = document.querySelector('body')


function setTheme(themeName) {
  document.body.className = themeName;
}

function toggleTheme() {
  if (document.body.className === 'theme-dark') {
    setTheme('theme-light');
  } else {
    setTheme('theme-dark');
  }
}
