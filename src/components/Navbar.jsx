import { useState } from "react";
import { Link } from "react-router-dom";
import nabvarStarWars from '../assets/img/nabvar-star-wars.png';
import useGlobalReducer from "../hooks/useGlobalReducer";
import { FaTrash } from "react-icons/fa";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();

	const [showDropdown, setShowDropdown] = useState(false);

	const toggleDropdown = () => setShowDropdown(prev => !prev);

	return (
		<nav className="navbar bg-light">
			<div className="container">
				<Link to="/" className="navbar-brand">
					<img src={nabvarStarWars} alt="Star Wars logo" style={{ width: "80px", height: "auto" }} />
				</Link>

				<div className="btn-group">
					<button
						type="button"
						className="btn btn-primary dropdown-toggle"
						onClick={toggleDropdown}
					>
						Favorites
						<span className="badge bg-secondary ms-2">{store.favorites.length}</span>
					</button>
					{showDropdown && (
						<ul className="dropdown-menu show" style={{ position: "absolute", top: "100%", right: 0 }}>
							{store.favorites.length > 0 ? (
								store.favorites.map((name, index) => (
									<li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
										<span>{name}</span>
										<button
											className="btn btn-sm"
											onClick={() => dispatch({ type: "removeFavorite", payload: { name } })}
										>
											<FaTrash />
										</button>
									</li>
								))
							) : (
								<li>
									<span className="dropdown-item text-muted">(empty)</span>
								</li>
							)}
						</ul>
					)}
				</div>
			</div>
		</nav>
	);
};
