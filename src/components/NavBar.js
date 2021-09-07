import React from 'react';
import { Link } from 'react-router-dom';
import LogedIn from './LogedIn';

const NavBar = props => {
	return (
		<nav className="NavBar">
			{props.routes.map(({ key, path }) => (
				<Link key={key} to={path}>
					{key}
				</Link>
			))}
			<LogedIn />
		</nav>
	);
};

export default NavBar;
