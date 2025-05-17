import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Landing from "./pages/Landing.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
