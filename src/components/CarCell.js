import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(1),
		margin: 'auto',
		maxWidth: 500,
	},
	image: {
		position: 'static',
		width: 128,
		height: 128,
	},
	img: {
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%',
	},
	errorBadge: {
		position: 'absolute',
	},
	availBadge: {
		position: 'absolute',
	},
	small: {
		width: theme.spacing(3),
		height: theme.spacing(3),
	}
}));


const CarCell = ({car}) => {
	const baseUrl = "http://localhost:4000"
	const carImage = baseUrl + car.image.image.location
	const profileImage = baseUrl + car.owner.profile.avatar.image.location
	const styles = useStyles()
	return (
		<div className={styles.root}>
	      <Paper className={styles.paper}>
	        <Grid container spacing={2}>
	          <Grid item>
	            <ButtonBase className={styles.image} disableRipple={true}>
	              <img className={styles.img} src={carImage} alt="car" />
	              {car.available ?
					<Badge badgeContent="available" color="primary" className={styles.availBadge} />
	                :
	                <Badge badgeContent="rented" color="error" className={styles.errorBadge} />
	              }
	            </ButtonBase>
	          </Grid>
	          <Grid item xs={12} sm container>
	            <Grid item xs container direction="column" spacing={2}>
	              <Grid item xs>
	                <Typography variant="subtitle1">
	                  {car.make} {car.model}
	                </Typography>
	                <Typography variant="body2" color="textSecondary">
	                  condition: {car.condition}
	                </Typography>
	              </Grid>
	              <Grid item>
	                <Typography variant="body2" style={{ cursor: 'pointer' }}>
	                  More Info
	                </Typography>
	              </Grid>
	            </Grid>
	            <Grid item>
	            	<Grid item xs container direction="column">
	            		<Grid item>
	              			<Typography variant="subtitle1">${car.ratePerDay}/day</Typography>
	            		</Grid>
	            		<Grid item>
	            			<Avatar alt="avatar" src={profileImage} className={styles.small} />
	            		</Grid>
	            	</Grid>
	          </Grid>
	        </Grid>
	        </Grid>
	      </Paper>
	    </div>
	)
}

export default CarCell;