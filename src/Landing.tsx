import "./Globals.css";
import { Link } from "react-router";
import { Github } from "lucide-react";

function Landing() {
	return (
		<>
			<div className="font-jost bg-ghost-white flex min-h-screen max-w-screen flex-col items-center gap-12 py-25 text-neutral-800">
				<div className="bg-tropical-indigo absolute top-0 flex w-full flex-row items-center justify-between p-3 font-semibold text-white">
					<div className="ml-5">
						<Link to="https://github.com/otsosaarinen/fiilis">
							<Github />
						</Link>
					</div>
					<div className="mr-5 flex flex-row gap-5">
						<div className="hover:underline">
							<Link to="/login">Login</Link>
						</div>
						<div className="hover:underline">
							<Link to="/signup">Sign up</Link>
						</div>
					</div>
				</div>
				<h1 className="text-tropical-indigo text-9xl font-semibold">
					Fiilis
				</h1>
				<h2 className="w-100 text-center text-2xl md:w-175">
					Track your physical and mental wellbeing with Fiilis. <br />
					Gain insights into your daily habits and improve your
					overall wellbeing.
				</h2>
				<section className="flex flex-col items-center justify-center gap-5 text-5xl font-medium">
					<div className="text-center">Membership types</div>
					<div className="grid w-80 grid-cols-1 gap-5 lg:w-200 lg:grid-cols-2">
						<div className="rounded-xl shadow-md shadow-neutral-800/20">
							<div className="bg-periwinkle flex items-center justify-center rounded-t-xl p-1 text-lg">
								Most popular subscription
							</div>
							<div className="flex flex-col items-center justify-center gap-2 rounded-b-xl bg-white p-2">
								<p className="text-4xl">Basic</p>
								<p className="text-tropical-indigo text-xl">
									Essential features
								</p>
								<p className="text-xl text-neutral-500 line-through">
									4,99€
								</p>
								<p className="text-4xl">Free</p>
							</div>
						</div>
						<div className="rounded-xl shadow-md shadow-neutral-800/20">
							<div className="bg-periwinkle flex items-center justify-center rounded-t-xl p-1 text-lg">
								Premium membership
							</div>
							<div className="flex flex-col items-center justify-center gap-2 rounded-b-xl bg-white p-2">
								<p className="text-4xl">Fiilis+</p>
								<p className="text-tropical-indigo text-xl">
									Advanced features
								</p>
								<p className="text-xl text-neutral-500 line-through">
									49,95€
								</p>
								<p className="text-4xl">19,95€</p>
							</div>
						</div>
					</div>
				</section>
				<div className="text-2xl">
					<span className="text-tropical-indigo font-semibold hover:underline">
						<Link to="/signup">Sign up</Link>
					</span>{" "}
					now and take control of your wellbeing.
				</div>
			</div>
		</>
	);
}

export default Landing;
