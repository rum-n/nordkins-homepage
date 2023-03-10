import React from "react";
import { createUseStyles } from "react-jss";

const AboutTile = () => {
  const classes = useStyles();

  return <div className={classes.wrapper}></div>;
};

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#1B262C",
    borderRadius: "1rem",
    width: "65%",
    height: "95vh",
    margin: "auto 0",
  },
});

export default AboutTile;
