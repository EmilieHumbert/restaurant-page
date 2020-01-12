function createAboutusPage() {
  // Main content
  const mainContent = document.createElement('div');
  mainContent.setAttribute('class', 'main-content');

  // Create the container
  const aboutus = document.createElement('div');
  aboutus.setAttribute('class', 'aboutus');
  mainContent.append(aboutus);

  // Main title
  const aboutusTitle = document.createElement('h1');
  aboutusTitle.setAttribute('class', 'aboutusTitle');
  aboutusTitle.innerHTML = 'About us';
  aboutus.append(aboutusTitle);

  // First paragraph
  const defineRestaurant = document.createElement('p');
  defineRestaurant.setAttribute('class', 'aboutRestaurant');
  defineRestaurant.innerHTML = `Our story began in Hakata, the epicenter of the tonkotsu ramen movement.
    We are on a mission to provide our guests with the best tonkotsu ramen, using only the finest ingredients
    and the most advanced techniques developed by our master artisans.`;
  aboutus.append(defineRestaurant);

  // Tonkotsu description
  const tonkotsuTitle = document.createElement('h2');
  tonkotsuTitle.setAttribute('class', 'aboutTonkotsuTitle');
  tonkotsuTitle.innerHTML = 'What\' Tonkotsu?';
  aboutus.append(tonkotsuTitle);

  const defineTonkotsu = document.createElement('p');
  defineTonkotsu.setAttribute('class', 'aboutTonkotsu');
  defineTonkotsu.innerHTML = `Tonkotsu ramen is a ramen dish that originated in Fukuoka, Fukuoka Prefecture
    on the Kyushu island of Japan, and it is a specialty dish in both Fukuoka and Kyushu. The soup broth is
    based on pork bones and other ingredients, which are typically boiled for several hours, and the dish is
    traditionally topped with sliced pork belly and served with ramen noodles that are hard in the center.
    In Fukuoka, Japan, tonkotsu ramen is referred to as Hakata ramen.`;
  aboutus.append(defineTonkotsu);

  return mainContent;
};

export default createAboutusPage;
