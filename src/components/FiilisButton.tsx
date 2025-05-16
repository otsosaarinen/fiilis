import Button from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material";

const FiilisButton = styled(Button)<ButtonProps>(() => ({
	color: "white",
	backgroundColor: "#9381ff",
}));

export default FiilisButton;
