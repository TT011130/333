
import { NavLink } from "react-router-dom";
export default function Navigation() {
	return (
		<nav className="nav">
			<ul>
				<li>
					{" "}
					<NavLink to="/">Homepage</NavLink>
				</li>
				<li>
					<NavLink to="/about">About</NavLink>
				</li>
				<li>
					<NavLink to="/cart">Cart</NavLink>
				</li>
			</ul>
		</nav>
	);
}

//1. sử dụng component <Link> <NavLink>
//2. sử dụng hàm navigate() => Programming Routing
