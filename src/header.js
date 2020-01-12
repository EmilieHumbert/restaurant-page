function header() {  
  // Create the hamburger icon
  function myFunction() {
    const mainNav = document.getElementById('main-nav');
    if (mainNav) {
      mainNav.classList.toggle('open');
    }
  }

  // Add a header
  const header = document.createElement('header');
  header.setAttribute('class', 'main-head');

  // Add the main logo
  const logo = document.createElement('img');
  logo.setAttribute('class', 'main-logo');
  logo.setAttribute('alt','logo');
  logo.src = 'images/logo.png';
  header.append(logo);
  
  // Add the div with menu and function
  const menuButton = document.createElement('div');
  menuButton.setAttribute('class', 'icon');
  menuButton.addEventListener('click', myFunction);
  header.append(menuButton);

  // Add image in the div
  const menuIcon = document.createElement('img');
  menuIcon.setAttribute('id', 'hamburger-icon');
  menuIcon.setAttribute('alt', 'hamburger-icon');
  menuIcon.src = 'images/menu.svg';
  menuButton.append(menuIcon);
  
  return header;
};

export default header;
