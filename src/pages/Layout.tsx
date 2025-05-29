import { Outlet } from "react-router";
import { Snackbar } from "@mui/material";

function Layout() {
	return (
		<>
			<Snackbar
				open={true}
				autoHideDuration={5000}
				anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
				message="Account succesfully created"
			/>
			<Outlet />
		</>
	);
}

export default Layout;
