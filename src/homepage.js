function createHomepage() {

  // Create the hamburger icon
  function myFunction() {
    const mainNav = document.getElementById('main-nav');
    console.log(mainNav);
    if (mainNav) {
      mainNav.classList.toggle('open');
    }
  }

  // Add head elements
  const metaViewport = document.createElement('meta');
  metaViewport.setAttribute('chartset', 'UTF-8');
  metaViewport.setAttribute('name', 'viewport');
  metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
  document.head.append(metaViewport);

  const linkStyle = document.createElement('link');
  linkStyle.setAttribute('rel', 'stylesheet');
  linkStyle.setAttribute('href', 'style.css');
  document.head.append(linkStyle);

  const linkGoogleFont = document.createElement('link');
  linkGoogleFont.setAttribute('rel', 'stylesheet');
  linkGoogleFont.setAttribute('href', 'https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  document.head.append(linkGoogleFont);

  const linkFont = document.createElement('link');
  linkFont.setAttribute('rel', 'stylesheet');
  linkFont.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
  document.head.append(linkFont);

  const title = document.createElement('title');
  title.innerHTML = 'Restaurant page';
  document.head.append(title);


  // add a header
  const header = document.createElement('header');
  header.setAttribute('class', 'main-head')
  const wrapper = document.getElementById('content');
  wrapper.append(header);

  // add the main logo
  const logo = document.createElement('img');
  logo.setAttribute('class', 'main-logo');
  logo.src = '../logo.png';
  logo.alt = 'logo';
  header.append(logo);
  
  // add the div with menu and function
  const menuButton = document.createElement('div');
  menuButton.setAttribute('class', 'icon');
  menuButton.addEventListener('click', myFunction);
  header.append(menuButton);

  // add nav
  const nav = document.createElement('nav');
  nav.setAttribute('id', 'main-nav');
  nav.setAttribute('class', 'main-nav');
  wrapper.append(nav);


  // add image in the div
  const menuIcon = document.createElement('img');
  menuIcon.setAttribute('id', 'hamburger-icon');
  menuIcon.src = '../menu.svg';
  menuIcon.alt = 'hamburger-icon';
  menuButton.append(menuIcon);

  // Home nav
  const navHome = document.createElement('a');
  navHome.setAttribute('class', 'nav-links nav-home');
  navHome.setAttribute('href', '#');
  navHome.innerHTML = 'Home';
  nav.append(navHome);

  // Menu nav
  const navMenu = document.createElement('a');
  navMenu.setAttribute('class', 'nav-links nav-menu');
  navMenu.setAttribute('href', '#');
  navMenu.innerHTML = 'Menu';
  nav.append(navMenu);

  // Logo nav
  const navLogo = document.createElement('img');
  navLogo.setAttribute('id', 'logo');
  navLogo.setAttribute('class', 'nav-links nav-Logo');
  navLogo.src = '../logo.png';
  navLogo.alt = 'logo';
  navLogo.setAttribute('href', '#');
  nav.append(navLogo);

  // Aboutus nav
  const navAboutUs = document.createElement('a');
  navAboutUs.setAttribute('class', 'nav-links nav-about-us');
  navAboutUs.setAttribute('href', '#');
  navAboutUs.innerHTML = 'About us';
  nav.append(navAboutUs);

  // Contact nav
  const navContact = document.createElement('a');
  navContact.setAttribute('class', 'nav-links nav-contact');
  navContact.setAttribute('href', '#');
  navContact.innerHTML = 'Contact';
  nav.append(navContact);

  // Main content
  const mainContent = document.createElement('div');
  mainContent.setAttribute('class', 'main-content');
  wrapper.append(mainContent);

  // Background image
  const backgroundImage = document.createElement('img');
  backgroundImage.setAttribute('class', 'banner');
  backgroundImage.setAttribute('alt', 'ramen bowl');
  backgroundImage.src = '../ramen.jpg';
  mainContent.append(backgroundImage);

  // Content text
  const contentText = document.createElement('p');
  contentText.setAttribute('class', 'text');
  contentText.innerHTML = `"For a bowl of soul warming,<br /> 
    slurp-able goodness,<br />
    head to Ponsonby's hot<br />
    new Ramen restaurant."<br />
    - The Denizen`;
  mainContent.append(contentText);

  // Footer
  const footer = document.createElement('footer');
  footer.setAttribute('class', 'main-footer');
  wrapper.append(footer);

  // script
  // const script = document.createElement('script');
  // script.src = 'main.js';
  // document.head.appendChild(script);  


  return wrapper;

};

export {
  createHomepage
};
