import "./Globals.css";

function Landing() {
	return (
		<>
			<div className="font-jost flex min-h-screen max-w-screen flex-col items-center gap-12 py-20 text-neutral-800">
				<h1 className="text-9xl font-semibold text-green-500">
					Fiilis
				</h1>
				<h2 className="max-w-175 text-center text-2xl">
					Track your physical and mental wellbeing with{" "}
					<span className="font-semibold">Fiilis</span>. Gain insights
					into your daily habits and improve your overall wellbeing.
				</h2>
				<section className="flex flex-col items-center justify-center gap-5 text-5xl font-medium">
					<div className="text-center">Membership types</div>
					<div className="grid w-80 grid-cols-1 gap-5 lg:w-225 lg:grid-cols-3">
						<div>
							<div className="flex flex-col rounded-t-md bg-green-200 p-2">
								<div className="text-3xl">Free</div>
							</div>
							<div className="rounded-b-md border-2 border-green-200 bg-white p-2 text-xl">
								test test
							</div>
						</div>
						<div>
							<div className="flex flex-col rounded-t-md bg-green-300 p-2">
								<div className="text-3xl">Fiilis+</div>
							</div>
							<div className="rounded-b-md border-2 border-green-300 bg-white p-2 text-xl">
								test test
							</div>
						</div>
						<div>
							<div className="flex flex-col rounded-t-md bg-green-400 p-2">
								<div className="text-3xl">Premium</div>
							</div>
							<div className="rounded-b-md border-2 border-green-400 bg-white p-2 text-xl">
								test test
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default Landing;
