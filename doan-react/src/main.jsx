import 'bootstrap/dist/css/bootstrap.css';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import './App.css'


const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{ path: "/", element: <Home /> },
		]
	}
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);