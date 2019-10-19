import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase/firebase.utils";

const UserBar = ({ currentUser }) => {
	return (
		<div className='nav-userBar'>
			<ul>
				{currentUser !== null ? (
					<>
						<li className='nav__userBar-hello'>
							<span>
								Cześć &nbsp;
								{currentUser.email}!
							</span>
						</li>
						<li>
							<Link to='/oddaj-rzeczy'>Oddaj rzeczy</Link>
						</li>
						<li>
							<Link to='/wylogowano' onClick={() => auth.signOut()}>
								Wyloguj
							</Link>
						</li>
					</>
				) : (
					<>
						<li>
							<Link to='/logowanie'>Zaloguj</Link>
						</li>
						<li>
							<Link to='/rejestracja'>Załóż konto</Link>
						</li>
					</>
				)}
			</ul>
		</div>
	);
};

export default UserBar;
