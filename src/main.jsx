import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Pizza_Provider } from "./context/Pizzacontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Pizza_Provider>
				<App />
			</Pizza_Provider>
		</BrowserRouter>
	</React.StrictMode>
);