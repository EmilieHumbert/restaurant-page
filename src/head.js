function head() {
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

  // const newElements = [
  //   [
  //     'meta',
  //     {
  //       charset: 'UTF-8',
  //       name: 'viewport',
  //       content: 'width=device-width, initial-scale=1.0'
  //     }
  //   ],
  //   [
  //     'link',
  //     {
  //       rel: 'stylesheet',
  //       href: 'style.css'
  //     }
  //   ],
  //   [
  //     'link',
  //     {
  //       rel: 'stylesheet',
  //       href: 'https://fonts.googleapis.com/css?family=Montserrat&display=swap'
  //     },
  //     {
  //       fake: 'prop'
  //     }
  //   ],
  //   [
  //     'link',
  //     {
  //       rel: 'stylesheet',
  //       href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
  //     },
  //     {
  //       fake: 'prop'
  //     }
  //   ],
  //   [
  //     'title',
  //     {
  //       innerHTML: 'Restaurant page'
  //     }
  //   ]
  // ].map(function createElements([elementType, props, special]) {
  //   const el = document.createElement(elementType);
  //   Object.keys(props).forEach(function applyProps(prop) {
  //     el.setAttribute(prop, props[prop]);
  //   });
  //   Object.keys(special).forEach(function applySpecials(special) {
  //     el[special] = specials[special];
  //   });
  //   return el;
  // });

  // newElements.forEach(function appendElements(element) {
  //   document.head.append(element);
  // });
}

export default head;
