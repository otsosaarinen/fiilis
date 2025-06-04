import { Link } from "react-router";
import { Github, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

function Header() {
	const [lightTheme, setLightTheme] = useState<boolean>(true);
	const [authStatus, setAuthStatus] = useState(false);

	useEffect(() => {
		const currentTheme = localStorage.getItem("theme");

		if (currentTheme == "light" || currentTheme == null) {
			localStorage.setItem("theme", "light");
		}
	}, []);

	const changeTheme = () => {
		if (lightTheme == true) {
			setLightTheme(false);
			localStorage.setItem("theme", "dark");
		} else {
			setLightTheme(true);
			localStorage.setItem("theme", "light");
		}
	};

	return (
		<>
			<div className="bg-tropical-indigo fixed top-0 flex w-full flex-row items-center justify-between p-4 font-semibold text-white">
				<div className="ml-5 flex flex-row gap-5">
					<Link to="https://github.com/otsosaarinen/fiilis">
						<Github />
					</Link>
					<div className="hover:cursor-pointer" onClick={changeTheme}>
						{lightTheme ? <Moon /> : <Sun />}
					</div>
				</div>
				<div className="mr-5 flex flex-row gap-5">
					<div className="hover:underline">
						<Link to="/">Home</Link>
					</div>

					{authStatus ? (
						""
					) : (
						<>
							<div className="hover:underline">
								<Link to="/login">Login</Link>
							</div>
							<div className="hover:underline">
								<Link to="/signup">Sign up</Link>
							</div>
						</>
					)}

					{authStatus ? (
						<>
							<div className="hover:underline">
								<Link to="/dashboard">Dashboard</Link>
							</div>
							<div className="hover:cursor-pointer hover:underline">
								Log Out
							</div>
						</>
					) : (
						""
					)}
				</div>
			</div>
		</>
	);
}

export default Header;
