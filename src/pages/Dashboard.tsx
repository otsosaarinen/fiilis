import Header from "../components/Header";

function Dashboard() {
	return (
		<>
			<div className="font-jost bg-ghost-white flex min-h-screen max-w-screen flex-col items-center pt-25 text-neutral-800">
				<Header />
				<div className="text-lg">Test dashboard</div>
			</div>
		</>
	);
}

export default Dashboard;
