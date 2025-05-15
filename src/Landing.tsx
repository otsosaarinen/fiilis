import "./Globals.css";

function Landing() {
	return (
		<>
			<div className="font-jost flex min-h-screen max-w-screen flex-col items-center gap-12 py-20 text-neutral-800">
				<h1 className="text-9xl font-semibold text-green-400">
					Fiilis
				</h1>
				<h2 className="max-w-175 text-center text-2xl">
					Track your physical and mental wellbeing with Fiilis. Gain
					insights into your daily habits and improve your overall
					wellbeing.
				</h2>
				<section className="flex flex-col items-center justify-center gap-5 text-5xl font-medium">
					<div className="text-center">Membership types</div>
					<div className="grid w-80 grid-cols-1 gap-5 lg:w-200 lg:grid-cols-2">
						<div>
							<div className="flex items-center justify-center rounded-t-xl bg-green-400 p-1 text-lg">
								Most popular subscription
							</div>
							<div className="flex flex-col items-center justify-center gap-2 rounded-b-xl bg-neutral-50 p-2">
								<p className="text-4xl">Basic</p>
								<p className="text-xl text-blue-400">
									Essential features
								</p>
								<p className="text-xl text-neutral-500 line-through">
									4,99€
								</p>
								<p className="text-4xl">Free</p>
							</div>
						</div>
						<div>
							<div className="flex items-center justify-center rounded-t-xl bg-green-400 p-1 text-lg">
								Premium membership
							</div>
							<div className="flex flex-col items-center justify-center gap-2 rounded-b-xl bg-neutral-50 p-2">
								<p className="text-4xl">Fiilis+</p>
								<p className="text-xl text-blue-400">
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
			</div>
		</>
	);
}

export default Landing;
