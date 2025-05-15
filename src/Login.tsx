import Header from "./Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material";

function Login() {
	const FiilisButton = styled(Button)<ButtonProps>(() => ({
		color: "white",
		backgroundColor: "#9381ff",
	}));

	return (
		<>
			<div className="font-jost bg-ghost-white flex min-h-screen max-w-screen flex-col items-center justify-center text-neutral-800">
				<Header />
				<div className="w-80 rounded-xl bg-white text-lg font-medium shadow-md shadow-neutral-800/20">
					<div className="bg-periwinkle flex items-center justify-center rounded-t-xl p-1">
						Welcome to Fiilis
					</div>
					<div className="flex flex-col items-center justify-center gap-5 p-5">
						<TextField label="Email address" />
						<TextField label="Password" />
						<FiilisButton variant="contained">Login</FiilisButton>
					</div>
				</div>
			</div>
		</>
	);
}

export default Login;
