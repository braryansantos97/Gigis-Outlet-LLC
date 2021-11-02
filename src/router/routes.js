import React from 'react';
import App from '../pages/App';
import About from '../pages/About';
import Home from '../pages/Home';
// import Buy from '../pages/Buy';
import Contact from '../pages/Contact';

const routes = [
	{
		Component: Contact,
		key: 'Contact',
		path: '/contact'
	},
	{
		Component: Home,
		key: 'Home',
		path: '/home'
	},
	{
		Component: About,
		key: 'About',
		path: '/about'
	},
	{
		Component: App,
		key: 'App',
		path: '/'
	}
	// {
	// 	Component: Buy,
	// 	key: 'Buy',
	// 	path: '/buy'
	// }
];

export default routes;
