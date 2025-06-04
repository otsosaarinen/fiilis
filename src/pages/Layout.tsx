import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
import type { SnackbarCloseReason } from "@mui/material";

function Layout() {
	let location = useLocation();
	const [snackbarVisible, setSnackbarVisible] = useState(false);
	const [snackbarSeverity, setSnackbarSeverity] = useState<
		"success" | "error" | "info" | "warning"
	>("success");
	const [snackbarMessage, setSnackbarMessage] = useState(null);

	useEffect(() => {
		if (
			location.state?.snackbarVisible &&
			location.state?.snackbarSeverity &&
			location.state?.snackbarMessage
		) {
			setSnackbarVisible(true);
			setSnackbarSeverity(location.state.snackbarSeverity);
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
					severity={snackbarSeverity}
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
