import Header from "../components/Header";
import TextField from "@mui/material/TextField";
import FiilisButton from "../components/FiilisButton";
import { useNavigate } from "react-router";

import { useState, useEffect } from "react";

interface FormType {
	email: string;
	password: string;
}

function Login() {
	let navigate = useNavigate();

	const [formData, setFormData] = useState<FormType>({
		email: "",
		password: "",
	});
	const [loginButtonDisabled, setLoginButtonDisabled] =
		useState<boolean>(true);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	// runs when formData updates and checks if both fields have text inside them
	useEffect(() => {
		if (
			formData.email.trim().length > 0 &&
			formData.password.trim().length > 0
		) {
			setLoginButtonDisabled(false);
		} else {
			setLoginButtonDisabled(true);
		}
	}, [formData]);

	const formSubmit = async () => {
		try {
			const response = await fetch("http://localhost:3000/api/auth", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				credentials: "include",
				body: JSON.stringify({
					email: formData.email,
					password: formData.password,
				}),
			});
			// redirects user to dashboard if login was succesfull
			if (response.ok) {
				navigate("/dashboard", {
					state: {
						snackbarVisible: true,
						snackbarSeverity: "success",
						snackbarMessage: "Login succesful",
					},
				});
			} else {
				navigate("/login", {
					state: {
						snackbarVisible: true,
						snackbarSeverity: "error",
						snackbarMessage: "Incorrect email or password",
					},
				});
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className="font-jost bg-ghost-white flex min-h-screen max-w-screen flex-col items-center justify-center text-neutral-800">
				<Header />
				<div className="w-80 rounded-xl bg-white text-lg font-medium shadow-md shadow-neutral-800/20">
					<div className="bg-periwinkle flex items-center justify-center rounded-t-xl p-1">
						Welcome to Fiilis
					</div>
					<div className="flex flex-col items-center justify-center gap-5 p-5">
						<TextField
							label="Email"
							name="email"
							value={formData.email}
							onChange={handleChange}
						/>
						<TextField
							label="Password"
							type="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
						/>
						<FiilisButton
							variant="contained"
							disabled={loginButtonDisabled}
							loading={false}
							onClick={formSubmit}
						>
							Login
						</FiilisButton>
					</div>
				</div>
			</div>
		</>
	);
}

export default Login;
