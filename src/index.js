import head from './head';
import header from './header';
import nav from './nav';
import navigation from './navigation';

// Setup HTML <head>
head();

// Add elements on page
const content = document.getElementById('content');
content.appendChild(header());
content.appendChild(nav());

// Load default page
navigation('home')();
