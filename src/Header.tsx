import { Link } from "react-router";
import { Github, Moon } from "lucide-react";

function Header() {
	return (
		<>
			<div className="bg-tropical-indigo fixed top-0 flex w-full flex-row items-center justify-between p-4 font-semibold text-white">
				<div className="ml-5 flex flex-row gap-5">
					<Link to="https://github.com/otsosaarinen/fiilis">
						<Github />
					</Link>
					<div className="hover:cursor-pointer">
						<Moon />
					</div>
				</div>
				<div className="mr-5 flex flex-row gap-5">
					<div className="hover:underline">
						<Link to="/">Home</Link>
					</div>
					<div className="hover:underline">
						<Link to="/login">Login</Link>
					</div>
					<div className="hover:underline">
						<Link to="/signup">Sign up</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
