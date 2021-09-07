import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function LogedIn(props) {
	const [token, setToken] = useState('');
	const [loggedInUser, setLoggedInUser] = useState('');

	useEffect(() => {
		if (window.localStorage.getItem('token')) {
			setToken(window.localStorage.getItem('token'));
			setLoggedInUser(window.localStorage.getItem('loggedInUser'));
		}
	}, []);

	return (
		<>
			{token ? (
				<p>Hello! {loggedInUser}</p>
			) : (
				<Link to="/">Sign In/Sing up</Link>
			)}
		</>
	);
}
