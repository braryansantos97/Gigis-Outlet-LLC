import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function App(props) {
	const [token, setToken] = useState(''); //authenticated
	const [user, setUser] = useState({
		fisrtName: '',
		lastName: '',
		email: '',
		username: '',
		password: ''
	});
	const [loggedInUser, setLoggedInUser] = useState('');
	const [toggle, setToggle] = useState(true);
	const handleChange = e => {
		setUser({ ...user, [e.target.id]: e.target.value });
	};
	const handleLogin = async e => {
		e.preventDefault();
		try {
			const response = await fetch('/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(user)
			});
			const data = await response.json();
			setToken(data.token);
			setLoggedInUser(data.user.username);
			window.localStorage.setItem('token', data.token);
			window.localStorage.setItem('loggedInUser', data.user.username);
		} catch (err) {
			console.error(err);
		}
	};

	const handleRegister = async e => {
		e.preventDefault();
		try {
			const response = await fetch('/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(user)
			});
			const data = await response.json();
			setToken(data.token);
			setLoggedInUser(data.user.username);
			window.localStorage.setItem('token', data.token);
			window.localStorage.setItem('loggedInUser', data.user.username);
		} catch (err) {
			console.error(err);
		}
	};
	useEffect(() => {
		if (window.localStorage.getItem('token')) {
			setToken(window.localStorage.getItem('token'));
			setLoggedInUser(window.localStorage.getItem('loggedInUser'));
		}
	}, []);

	return (
		<div className="AppPage text-center container">
			{!token ? (
				<>
					<h1 className="display-1">Gigis Outlet LLC</h1>
					{toggle ? (
						<div>
							<form
								className="px-4 py-3 container text-center"
								onSubmit={handleLogin}
							>
								<div className="form-group">
									<label htmlFor="username">Username</label>
									<input
										type="text"
										className="form-control"
										id="username"
										value={user.username}
										onChange={handleChange}
										placeholder="Username"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="password">Password</label>
									<input
										type="password"
										className="form-control"
										id="password"
										value={user.password}
										onChange={handleChange}
										placeholder="Password"
									/>
								</div>
								<button type="submit" className="btn btn-primary">
									Sign in
								</button>
							</form>
							<button
								className="btn btn-primary"
								onClick={() => setToggle(!toggle)}
							>
								{toggle ? 'New around here? Sign up' : 'Coming back? Login'}
							</button>
						</div>
					) : (
						<div>
							<form className="px-4 py-3 container" onSubmit={handleRegister}>
								<div className="form-group">
									<label htmlFor="fisrtName">Firt Name</label>
									<input
										type="text"
										className="form-control"
										id="fisrtName"
										value={user.fisrtName}
										onChange={handleChange}
										placeholder="First Name"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="lastName">Last Name</label>
									<input
										type="text"
										className="form-control"
										id="lastName"
										value={user.lastName}
										onChange={handleChange}
										placeholder="Last Name"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="email">Email</label>
									<input
										type="text"
										className="form-control"
										id="email"
										value={user.email}
										onChange={handleChange}
										placeholder="Email"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="username">Username</label>
									<input
										type="text"
										className="form-control"
										id="username"
										value={user.username}
										onChange={handleChange}
										placeholder="Username"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="password">Password</label>
									<input
										type="password"
										className="form-control"
										id="password"
										value={user.password}
										onChange={handleChange}
										placeholder="Password"
									/>
								</div>
								<button type="submit" className="btn btn-primary">
									Sign up
								</button>
							</form>
							<button
								className="btn btn-primary"
								onClick={() => setToggle(!toggle)}
							>
								{toggle ? 'New around here? Sign up' : 'Coming back? Login'}
							</button>
						</div>
					)}
				</>
			) : (
				<div className="container">
					<h1 className="display-1">Gigis Outlet LLC</h1>
					<h3>Hello! {loggedInUser}</h3>
					<Link to="/home">
						<button className="rounded-pill btn btn-primary">
							Our Products
						</button>
					</Link>
				</div>
			)}
		</div>
	);
}
