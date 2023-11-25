import { Route, Routes } from "react-router-dom";
import PaginaInicio from "../pages/PaginaInicio/PaginaInicio";
import Carro from "../pages/Carro/Carro";
import IngredientesPizza from "../pages/IngredientesPizza/IngredientesPizza";

const MyRoutes = () => {
	return (
		<Routes>
			<Route path="/pizza_mamma_mia" element={<PaginaInicio />}></Route>
			<Route path="/pizza_mamma_mia/pizza/:id" element={<IngredientesPizza />}></Route>
			<Route path="/pizza_mamma_mia/carro" element={<Carro />}></Route>
			<Route path="*" element={<PaginaInicio />}></Route>
		</Routes>
	);
};
export default MyRoutes;
