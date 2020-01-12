function createMenuPage() {
  // Main content
  const mainContent = document.createElement('div');
  mainContent.setAttribute('class', 'main-content');

  const mainMenu = document.createElement('img');
  mainMenu.setAttribute('class', 'mainMenu');
  mainMenu.setAttribute('alt', 'ramen menu');
  mainMenu.src = 'images/main_ramen_menu.jpg';
  mainContent.append(mainMenu);

  return mainContent;
}

export default createMenuPage;
