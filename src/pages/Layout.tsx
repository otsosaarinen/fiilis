import { useState } from "react";
import { Outlet } from "react-router";
import { Snackbar, SnackbarContent } from "@mui/material";
import { Alert } from "@mui/material";
import type { SnackbarCloseReason } from "@mui/material";

function Layout() {
	const [snackbarVisible, setSnackbarVisible] = useState(false);

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
					Account succesfully created
				</Alert>
			</Snackbar>
			<Outlet />
		</>
	);
}

export default Layout;
