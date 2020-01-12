function createContactPage() {
  // Main content
  const mainContent = document.createElement('div');
  mainContent.setAttribute('class', 'main-content');

  // Find us
  const findus = document.createElement('div');
  findus.setAttribute('class', 'findus');
  mainContent.append(findus);

  const addressTitle = document.createElement('h3');
  addressTitle.setAttribute('class', 'addressTitle');
  addressTitle.innerHTML = 'Our Address';
  const address = document.createElement('p');
  address.setAttribute('class', 'address');
  address.innerHTML = `119 Manchester Street,<br />
    Shop 916A Church Junction,<br />
    Christchurch, New Zealand`;
  findus.append(addressTitle)
  findus.append(address);
  
  const contactusTitle = document.createElement('h3');
  contactusTitle.setAttribute('class', 'contactusTitle');
  contactusTitle.innerHTML = 'Contact us';
  const contactus = document.createElement('p');
  contactus.setAttribute('class', 'contactus');
  contactus.innerHTML = `ramen@ramen.com<br />
    0210 888 8888`;
  findus.append(contactusTitle);
  findus.append(contactus);

  // Opening hours
  const openingHoursTitle = document.createElement('h3');
  openingHoursTitle.setAttribute('class', 'hoursTitle');
  openingHoursTitle.innerHTML = 'Opening Hours';
  const openingHours = document.createElement('p');
  openingHours.setAttribute('class', 'hours');
  openingHours.innerHTML = `Monday - Sunday<br />
    10am - 8:30pm`;
  findus.append(openingHoursTitle);
  findus.append(openingHours);

return mainContent;
}

export default createContactPage;
