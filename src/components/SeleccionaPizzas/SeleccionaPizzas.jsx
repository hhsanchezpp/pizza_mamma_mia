import { useContext } from "react";

import { Pizzacontext } from "../../context/Pizzacontext";
import { Link, useParams } from "react-router-dom";
import "./SeleccionaPizzas.css";

const SeleccionaPizzas = () => {
	const { pizzas, cargando, agregarAlCarro } = useContext(Pizzacontext);
    const {id} = useParams()
	if(cargando) {
        return <div className="text-center mt-48 text-4xl font-medium">Mostrando pizzas...</div>;
    }
	const handleAgregarAlCarro = (pizza) => 
											{
												agregarAlCarro(pizza)
											}
	return (
		<>
			<h2 className="text-center my-8 text-5xl font-bold">Selecciona tus Pizzas</h2>
			<div className=" container mx-auto gap-6 grid-pizzas text-center">
				{
					pizzas.map((pizza) => (
						<div key={pizza.id} className="border border-gray-300 rounded-full" style={{ width: "21rem" }}>
							<img className="rounded-full"src={pizza.img} alt={`pizza ${id}`} />
							<div className="p-3">
								<div>
									<h1 className=" text-2xl font-bold border-b-2">{pizza.name.toUpperCase()}</h1>
								</div>
							<h3 className="text-lg font-medium mt-3">Ingredientes:</h3>
							<ul className="ml-4 list-disc">
								{pizza.ingredients?.map((ingrediente, indice) => (
									<li className="list-none" key={indice}>
										{ingrediente}
									</li>
								))}
							</ul>
							<p className="text-center text-2xl font-bold border-t-2 m-3"
								>{`$ ${pizza.price.toLocaleString('cd')}`}
							</p>
								<div className="flex justify-around card-body">
									<Link to={`pizza/${pizza.id}`} className="bg-ros border bg-yellow-400 border-neutral-500 px-4 py-2 rounded-xl">
										Ingredientes
									</Link>
									<button onClick={() => handleAgregarAlCarro(pizza)} className="px-4 py-2 bg-red-400 rounded-xl">
										Agregar al carro
									</button>
								</div>
							</div>							
						</div>
					))
				};
			</div>
		</>
	);
};
export default SeleccionaPizzas;