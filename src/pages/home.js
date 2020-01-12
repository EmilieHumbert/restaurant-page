function createHomePage() {
  // Main content
  const mainContent = document.createElement('div');
  mainContent.setAttribute('class', 'main-content');

  // Background image
  const backgroundImage = document.createElement('img');
  backgroundImage.setAttribute('class', 'banner');
  backgroundImage.setAttribute('alt', 'ramen bowl');
  backgroundImage.src = '../ramen.jpg';
  mainContent.append(backgroundImage);

  // Content text
  const contentText = document.createElement('p');
  contentText.setAttribute('class', 'text');
  contentText.innerHTML = `"For a bowl of soul warming, slurp-able goodness,
    head to Ponsonby's hot new Ramen restaurant."<br />
    - The Denizen`;
  mainContent.append(contentText);
  
  return mainContent;
};

export default createHomePage;
