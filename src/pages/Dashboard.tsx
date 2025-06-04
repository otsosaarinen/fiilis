import { useEffect, useState } from "react";
import Header from "../components/Header";

function Dashboard() {
	const [authStatus, setAuthStatus] = useState<boolean>(true);
	const [userInformation, setUserInformation] = useState({
		firstName: null,
		lastName: null,
		email: null,
		subscription: null,
	});

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const response = await fetch(
					"http://localhost:3000/api/dashboard",
					{
						method: "GET",
					},
				);
				if (response.ok) {
					console.log(response);
				}
			} catch (error) {
				console.log(error);
			}
		};
	}, []);
	return (
		<>
			{authStatus ? (
				<div className="font-jost bg-ghost-white flex min-h-screen max-w-screen flex-col items-center pt-25 text-neutral-800">
					<Header />
					<div className="h-150 w-[95%] rounded-xl bg-white text-lg shadow-md shadow-neutral-800/20">
						<div className="bg-periwinkle flex items-center justify-center rounded-t-xl p-1 font-medium">
							{userInformation.firstName}'s dashboard
						</div>
						<div className="flex h-full flex-col items-center justify-center">
							<div>{userInformation.email}</div>
							<div>{userInformation.subscription}</div>
						</div>
					</div>
				</div>
			) : (
				""
			)}
		</>
	);
}

export default Dashboard;
