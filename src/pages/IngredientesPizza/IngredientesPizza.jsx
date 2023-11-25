import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Pizzacontext } from "../../context/Pizzacontext";
const IngredientesPizza = () => {
	const { id } = useParams();
	const { pizzas, cargando, agregarAlCarro } = useContext(Pizzacontext);
	const pizza = pizzas.find((pizzaFiltrada) => pizzaFiltrada.id == id);
	if(cargando) {
        return <div className="text-center mt-48 text-4xl font-medium">Cargando Ingredientes...</div>;
    }
	const handleAgregarAlCarro = () => {
												agregarAlCarro(pizza)
										}
	return (
		<>
			<h2 className=" text-4xl text-center font-medium mt-24">Ingredientes</h2>
			{!pizza? (
				<p className="text-center bg-red-300 w-96 mx-auto text-red-700 mt-32 rounded-xl">Error, no hay ingredientes...</p>
			) : (
				<div>
					<div className="container mx-auto  mt-12 py-3 flex flex-wrap justify-center">
						<img src={pizza?.img} className=" border-slate-400 w-96 rounded-full" alt={`pizza ${id}`} />
						<div className="flex flex-col px-3 py-3 justify-between w-96 gap-3 rounded-tr-lg rounded-br-lg border-slate-400">
							<h1 className="text-2xl font-medium">
								{pizza?.name.toUpperCase()}
							</h1>
							<p>
								{pizza?.desc}
							</p>
							<h3 className="text-xl font-bold">
								Ingredientes:
							</h3>
							<ul className="ml-4 list-disc">
								{pizza.ingredients?.map((ingrediente, i) => (
									<li key={i}>{ingrediente}</li>   
								))}
							</ul>
							<div className="flex justify-between items-center">
								<p className="font-bold text-2xl">
									 Precio: {`$${pizza?.price}`}
								</p>
								<button onClick={handleAgregarAlCarro}  className="px-4 py-2 bg-red-400 rounded-xl">
									Agregar al carro
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default IngredientesPizza;