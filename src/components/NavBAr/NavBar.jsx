import { useContext } from "react";
import "./NavBar.css"
import { Link, NavLink } from "react-router-dom";
import { Pizzacontext } from "../../context/Pizzacontext";

const NavBar = () => {
	const {totalPizzas} = useContext(Pizzacontext)
	return (
		<nav className="flex flex-row gap-5 justify-around items-center bg-cyan-400 bg-opacity-80 backdrop-blur-md flex-wrap px-5 nav_container fixed top-0 w-full z-10 ">
			<div>
				<Link to={"/pizza_mamma_mia/"}>Mamma mia!!</Link>
			</div>
			<ul className="flex gap-5 font-medium">
				<li>
					<NavLink to={"/pizza_mamma_mia/"}>Inicio</NavLink>
				</li>
				<li>
                    <NavLink to={"/pizza_mamma_mia/carro"}>{`Carro (${totalPizzas})`}</NavLink>
                </li>
			</ul>
		</nav>
	);
};

export default NavBar;