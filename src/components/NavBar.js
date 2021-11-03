import React from 'react';
import { Link } from 'react-router-dom';
import LogedIn from './LogedIn';

const NavBar = props => {
	return (
		<>
			<ul className="nav nav-fill bg-dark">
				{props.routes.map(({ key, path }) => (
					<li className="nav-item" key={key}>
						<Link to={path} className="nav-link">
							{key}
						</Link>
					</li>
				))}
				<LogedIn />
			</ul>
		</>
	);
};

export default NavBar;
