import Header from "../components/Header";
import TextField from "@mui/material/TextField";
import FiilisButton from "../components/FiilisButton";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

interface FormType {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	subscriptionType: string;
}

function Signup() {
	let navigate = useNavigate();

	const [formData, setFormData] = useState<FormType>({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		subscriptionType: "Basic",
	});

	const [signupButtonDisabled, setSignupButtonDisabled] =
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
			formData.firstName.trim().length > 0 &&
			formData.lastName.trim().length > 0 &&
			formData.email.trim().length > 0 &&
			formData.password.trim().length > 0 &&
			formData.subscriptionType.trim().length > 0
		) {
			setSignupButtonDisabled(false);
		} else {
			setSignupButtonDisabled(true);
		}
	}, [formData]);

	const formSubmit = async () => {
		try {
			const response = await fetch("http://localhost:3000/api/user", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					firstName: formData.firstName,
					lastName: formData.lastName,
					email: formData.email,
					password: formData.password,
					createdAt: new Date(),
					subscription: formData.subscriptionType,
				}),
			});
			// redirects user to dashboard if user was succesfully created
			if (response.ok) {
				navigate("/dashboard");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const subscriptions = [
		{
			value: "Basic",
			label: "Basic",
		},
		{ value: "Premium", label: "Premium" },
	];

	return (
		<>
			<div className="font-jost bg-ghost-white flex min-h-screen max-w-screen flex-col items-center justify-center text-neutral-800">
				<Header />
				<div className="w-80 rounded-xl bg-white text-lg font-medium shadow-md shadow-neutral-800/20">
					<div className="bg-periwinkle flex items-center justify-center rounded-t-xl p-1">
						Sign up to Fiilis
					</div>
					<div className="flex flex-col items-center justify-center gap-5 p-5">
						<TextField
							label="First name"
							name="firstName"
							value={formData.firstName}
							onChange={handleChange}
						></TextField>
						<TextField
							label="Last name"
							name="lastName"
							value={formData.lastName}
							onChange={handleChange}
						></TextField>
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
						<TextField
							className="w-52.5"
							label="Subscription type"
							name="subscriptionType"
							value={formData.subscriptionType}
							onChange={handleChange}
							select
						>
							{subscriptions.map((type) => (
								<MenuItem key={type.value} value={type.value}>
									{type.label}
								</MenuItem>
							))}
						</TextField>
						<FiilisButton
							variant="contained"
							disabled={signupButtonDisabled}
							loading={false}
							onClick={formSubmit}
						>
							Sign up
						</FiilisButton>
					</div>
				</div>
			</div>
		</>
	);
}

export default Signup;
