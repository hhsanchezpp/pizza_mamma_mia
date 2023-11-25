import { createContext, useEffect, useState } from "react";
import PropsTypes from "prop-types";

export const Pizzacontext = createContext();

export const Pizza_Provider = ({ children }) => {
		const [cargando, setCargando] = useState(true);
		const [pizzas, setPizzas] = useState([]);
		const [carro, setCarro] = useState([]);

	useEffect(() => {
		const getPizzas = async () => {
			try {
				const resuLtado = await fetch("/api_json/pizzas.json");
				const informAcion = await resuLtado.json();
				if (informAcion) {
					setPizzas(informAcion);
					setCargando(false);
				}
			} catch (error) {
				console.error("Error al cargar información", error);
			}
		};
		getPizzas();
	}, []);

	const agregarAlCarro = (pizza) => {
		const pizzaEnCarro = carro.find((indice) => indice.id === pizza.id);
		if (pizzaEnCarro) {
			const nuevoCarro = carro.map((indice) => (indice.id === pizza.id ? { ...indice, cantidad: indice.cantidad + 1 } : indice));
			setCarro(nuevoCarro);
		} else {
			setCarro([...carro, { ...pizza, cantidad: 1 }]);
		}
	};

	const totalPizzas = carro.reduce((totalPizzas, pizza) => totalPizzas + pizza.cantidad, 0);
    const total_a_pagar = carro.reduce((total_a_pagar, pizza) => total_a_pagar + pizza.price * pizza.cantidad, 0).toLocaleString('es-ES')

	const dataProvider = {
							pizzas,
							cargando,
							carro,
							setCarro,
							agregarAlCarro,
							totalPizzas,
							total_a_pagar
    					};
	return <Pizzacontext.Provider value={dataProvider}>{children}</Pizzacontext.Provider>;
};
Pizza_Provider.propTypes = 	{
								children: PropsTypes.object.isRequired,
							};