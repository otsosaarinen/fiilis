import Header from "../components/Header";

function Dashboard() {
	return (
		<>
			<div className="font-jost bg-ghost-white flex min-h-screen max-w-screen flex-col items-center pt-25 text-neutral-800">
				<Header />
				<div className="h-150 w-[95%] rounded-xl bg-white text-lg shadow-md shadow-neutral-800/20">
					<div className="bg-periwinkle flex items-center justify-center rounded-t-xl p-1 font-medium">
						Otso's dashboard
					</div>
					<div className="flex h-full items-center justify-center">
						Content
					</div>
				</div>
			</div>
		</>
	);
}

export default Dashboard;
