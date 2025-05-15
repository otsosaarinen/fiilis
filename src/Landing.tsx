import "./Globals.css";
import { Link } from "react-router";
import { Github, Moon, Sun, CircleCheck, Star } from "lucide-react";

function Landing() {
	return (
		<>
			<div className="font-jost bg-ghost-white flex min-h-screen max-w-screen flex-col items-center gap-12 py-25 text-neutral-800">
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
						<div className="rounded-xl bg-white shadow-md shadow-neutral-800/20">
							<div className="bg-periwinkle flex items-center justify-center rounded-t-xl p-1 text-lg">
								Most popular subscription
							</div>
							<div className="flex flex-col items-center justify-center gap-2 rounded-b-xl p-5">
								<p className="text-4xl">Basic</p>
								<p className="text-tropical-indigo text-xl">
									Essential features
								</p>
								<p className="text-xl text-neutral-500 line-through">
									4,99€
								</p>
								<p className="text-4xl">Free</p>
								<ul className="flex flex-col gap-1 text-xl">
									<li className="flex flex-row gap-1">
										<CircleCheck color="#9381ff" /> Water
										intake tracker
									</li>
									<li className="flex flex-row gap-1">
										<CircleCheck color="#9381ff" />
										Sleep quality tracker
									</li>
									<li className="flex flex-row gap-1">
										<CircleCheck color="#9381ff" />
										Quick mood check-ins
									</li>
									<li className="flex flex-row gap-1">
										<CircleCheck color="#9381ff" />
										Mood journal
									</li>
								</ul>
							</div>
						</div>
						<div className="rounded-xl bg-white shadow-md shadow-neutral-800/20">
							<div className="bg-periwinkle flex items-center justify-center rounded-t-xl p-1 text-lg">
								Premium membership
							</div>
							<div className="flex flex-col items-center justify-center gap-2 rounded-b-xl p-5">
								<p className="text-4xl">Fiilis+</p>
								<p className="text-tropical-indigo text-xl">
									Advanced features
								</p>
								<p className="text-xl text-neutral-500 line-through">
									49,95€
								</p>
								<p className="text-4xl">19,95€</p>
								<ul className="flex flex-col gap-1 text-xl">
									<li className="flex flex-row gap-1">
										<CircleCheck color="#9381ff" />
										Includes all Basic features
									</li>
									<li className="flex flex-row gap-1">
										<CircleCheck color="#9381ff" /> AI-based
										mood prediction trends
									</li>
									<li className="flex flex-row gap-1">
										<CircleCheck color="#9381ff" />
										Personalized wellness goals
									</li>
									<li className="flex flex-row gap-1">
										<CircleCheck color="#9381ff" />
										Exportable PDF wellbeing reports
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				<section className="flex flex-col items-center justify-center text-2xl">
					<div className="flex flex-row">
						<Star fill="#FFDF00" strokeWidth={2} />
						<Star fill="#FFDF00" strokeWidth={2} />
						<Star fill="#FFDF00" strokeWidth={2} />
						<Star fill="#FFDF00" strokeWidth={2} />
						<Star strokeWidth={2} />
					</div>
					<div>
						<span className="text-tropical-indigo font-semibold">
							80%
						</span>{" "}
						of our users recommend us
					</div>
				</section>
				<section className="text-center text-2xl">
					<span className="text-tropical-indigo font-semibold hover:underline">
						<Link to="/signup">Sign up</Link>
					</span>{" "}
					now and take control of your wellbeing.
				</section>
			</div>
		</>
	);
}

export default Landing;
