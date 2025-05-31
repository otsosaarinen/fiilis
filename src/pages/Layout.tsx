import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
import type { SnackbarCloseReason } from "@mui/material";

function Layout() {
	let location = useLocation();
	const [snackbarVisible, setSnackbarVisible] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState("");

	useEffect(() => {
		console.log(location);

		if (
			location.state?.snackbarVisible &&
			location.state?.snackbarMessage
		) {
			setSnackbarVisible(true);
			setSnackbarMessage(location.state.snackbarMessage);

			// Clear state so it doesn't repeat on refresh
			window.history.replaceState({}, "");
		}
	}, [location.key]);

	const handleClose = (
		event: React.SyntheticEvent | Event,
		reason?: SnackbarCloseReason,
	) => {
		if (reason === "clickaway") {
			return;
		}
		setSnackbarVisible(false);
	};

	return (
		<>
			<Snackbar
				open={snackbarVisible}
				autoHideDuration={5000}
				onClose={handleClose}
				anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
			>
				<Alert
					onClose={handleClose}
					severity="success"
					variant="filled"
				>
					{snackbarMessage}
				</Alert>
			</Snackbar>
			<Outlet />
		</>
	);
}

export default Layout;
