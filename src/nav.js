import navigation from './navigation';

function nav() {  
  // Add nav
  const nav = document.createElement('nav');
  nav.setAttribute('id', 'main-nav');
  nav.setAttribute('class', 'main-nav');

  // Home nav
  const navHome = document.createElement('a');
  navHome.setAttribute('class', 'nav-links nav-home');
  navHome.setAttribute('href', '#');
  navHome.innerHTML = 'Home';
  navHome.addEventListener('click', navigation('home'));
  nav.append(navHome);

  // Menu nav
  const navMenu = document.createElement('a');
  navMenu.setAttribute('class', 'nav-links nav-menu');
  navMenu.setAttribute('href', '#');
  navMenu.innerHTML = 'Menu';
  navMenu.addEventListener('click', navigation('menu'));
  nav.append(navMenu);

  // Logo nav
  const navLogo = document.createElement('img');
  navLogo.setAttribute('id', 'logo');
  navLogo.setAttribute('class', 'nav-Logo');
  navLogo.setAttribute('alt', 'logo');
  navLogo.src = '../logo.png';
  nav.append(navLogo);

  // Aboutus nav
  const navAboutUs = document.createElement('a');
  navAboutUs.setAttribute('class', 'nav-links nav-about-us');
  navAboutUs.setAttribute('href', '#');
  navAboutUs.innerHTML = 'About us';
  navAboutUs.addEventListener('click', navigation('aboutus'));
  nav.append(navAboutUs);

  // Contact nav
  const navContact = document.createElement('a');
  navContact.setAttribute('class', 'nav-links nav-contact');
  navContact.setAttribute('href', '#');
  navContact.innerHTML = 'Contact';
  navContact.addEventListener('click', navigation('contact'));
  nav.append(navContact);

  return nav;
};

export default nav;
