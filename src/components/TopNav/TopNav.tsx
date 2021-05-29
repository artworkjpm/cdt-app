import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

export default function TopNav() {
	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" color="inherit" aria-label="menu">
						{" "}
						<MenuIcon />
					</IconButton>
					<Typography variant="h6">CDT app - John Moran</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}
