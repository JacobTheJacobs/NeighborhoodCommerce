import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";

import Rating from "@material-ui/lab/Rating";

import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  price: {
    background: "linear-gradient(45deg, #2193b0 10%, #6dd5ed 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    opacity: 0.7,
  },
}));
const Product = (props) => {
  const [value, setValue] = useState(2);
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Live From Space
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Mac Miller
            </Typography>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Typography component="legend">review</Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
            <div className={classes.price}>
              <h3>
                <span> ש"ח</span> <span> </span>599.99
              </h3>
            </div>
          </CardContent>
          <div className={classes.controls}></div>
        </div>
        <CardMedia
          className={classes.cover}
          image="https://i1.wp.com/www.buildingstorys.com/wp-content/uploads/2017/11/Underground-Rap-Photography-2.jpg?fit=1920%2C1080&ssl=1"
          title="Live from space album cover"
        />
      </Card>
    </div>
  );
};

export default Product;
