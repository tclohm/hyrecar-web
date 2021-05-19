import React from "react";
import OwnerCarCell from "./OwnerCarCell";


import Grid from "@material-ui/core/Grid";

const OwnerList = ({ owners, onDelete }) => {
	return (
		<Grid container spacing={1}>
			{owners.map(owner => (
				<Grid item sm={2} key={owner.id}>
					<OwnerCarCell owner={owner} onDelete={onDelete} />
				</Grid>
			))}
		</Grid>
	)
}

export default OwnerList;