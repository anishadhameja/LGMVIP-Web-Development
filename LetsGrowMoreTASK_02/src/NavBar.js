import React from "react";
import { Box, Typography, Button, makeStyles, Grid } from "@material-ui/core";
import LetsGrowMoreImage from "./images/LetsGrowMoreImage.jpg";
import { useHistory, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  nav: {
    backgroundColor: "#e8d3d3",
    padding: theme.spacing(2),
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },
}));

function NavBar() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Grid container className={classes.nav} justifyContent="space-between">
      <Grid item>
        <Box className={classes.logo}>
            <Link to="/">
                <img src={LetsGrowMoreImage} style={{ width: 120 }} />
            </Link>
            
          <Typography
            color="secondary"
            variant="h6"
            style={{ marginLeft: "20px" }}
          >
            LET'S GROW MORE!
          </Typography>
        </Box>
      </Grid>
      <Grid item>
        <Button variant="contained" color="secondary" onClick={() => {history.push("/getusers")}} >
          Get Users
        </Button>
      </Grid>
    </Grid>
  );
}

export default NavBar;
