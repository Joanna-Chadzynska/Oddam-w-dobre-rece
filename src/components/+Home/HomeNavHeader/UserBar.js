import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase/firebase.utils";

const UserBar = ({ currentUser }) => {
	console.log(currentUser);
	return (
		<div className='home__nav-userBar'>
			<ul>
				<li>
					<Link to='/logowanie'>Zaloguj</Link>
				</li>
				<li>
					<Link to='/rejestracja'>Załóż konto</Link>
				</li>
				{currentUser ? (
					<li onClick={() => auth.signOut()}>Wyloguj</li>
				) : (
					<Link to='/logowanie'>Zaloguj</Link>
				)}
			</ul>
		</div>
	);
};

export default UserBar;
