import { useContext } from "react";
import { Pizzacontext } from "../../context/Pizzacontext";
const Carro = () => {
	const { carro, setCarro, total_a_pagar } = useContext(Pizzacontext);

	const sumaCantidad = (pizzaAgregada) => 
				{
					const carroActualizado = carro.map((indice) => (indice.id === pizzaAgregada.id ? 
																		{ ...indice, cantidad: indice.cantidad + 1 } 
																		: indice));
					setCarro(carroActualizado);
				};
	const restaCantidad = (pizzaAgregada) => 
	{
		if (pizzaAgregada.cantidad === 1) 
		{
			const confirmacion = window.confirm("¿Deseas eliminar la Pizzza del carro?");
			carro.shift(pizzaAgregada);
			if (!confirmacion) {
				return; 
			}
		}
		const carroActualizado = carro.map((indice) => (indice.id === pizzaAgregada.id && indice.cantidad > 1 ? 
																		{ ...indice, cantidad: indice.cantidad - 1 } 
																		: indice));
		setCarro(carroActualizado);
	};
	const calcularPrecioTotal = (pizzaAgregada) => 
													{
														const precioSeleccion =  pizzaAgregada.price * pizzaAgregada.cantidad;
														return precioSeleccion.toLocaleString('cd')
													};
	return (
		<div>
			<h1 className="text-center mt-24 mb-8 font-medium text-4xl">
				Carro de compra
			</h1>
			{carro.length === 0 ? (
				<p className="text-center bg-red-300 w-80 mx-auto  mt-12 ">Carro Vacio</p>
			) : (
				<div className="flex flex-col gap-3 justify-center items-center w-3/5  m-auto flex-wrap ">
					{carro.map((pizzaAgregada) => 
													(
														<div key={pizzaAgregada.id} className="w-82 flex gap-3 justify-between items-center container m-auto flex-wrap mb-5">
															<div className="flex items-center gap-3 flex-wrap">
																<img className="w-36 rounded-full" src={pizzaAgregada.img} alt="" />
																<h3>
																	{pizzaAgregada.name.toUpperCase()}
																</h3>
															</div>
															<div className=" flex font-medium gap-3 items-center ">
																<p>{`$ ${calcularPrecioTotal(pizzaAgregada)}`}</p>
																<div className="flex gap-2 items-center">
																	<button className="px-2 py-1 border" onClick={() => restaCantidad(pizzaAgregada)}>
																		-
																	</button>
																	<p className=" border p-1 px-3"> {pizzaAgregada.cantidad}</p>
																	<button className="px-2 py-1 border" onClick={() => sumaCantidad(pizzaAgregada)}>
																		+
																	</button>
																</div>
															</div>
														</div>
													)
						)
					}
					<div className="flex flex-col">
						<p className="font-bold">{`Total a pagar: $${total_a_pagar}`}</p>
						<button className="flex items-center gap-1 mt-10 mx-auto border border-neutral-500 px-4 py-2 rounded-xl bg-green-300">Pagar</button>
					</div>
				</div>
			)}			
		</div>
	);
};
export default Carro;