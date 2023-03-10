import React from "react";
import { createUseStyles } from "react-jss";

const HomeTile = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.logo}>nordkins</div>
      <div className={classes.title}>
        We deliver the digital experience you need
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#3282B8",
    borderRadius: "1rem",
    width: "90%",
    height: "95vh",
    margin: "auto 1rem auto 0",
  },
  logo: {
    margin: "2rem",
    fontFamily: "Impact, Charcoal, sans-serif",
    fontSize: "2rem",
  },
  title: {
    width: "70%",
    fontFamily: "Impact, Charcoal, sans-serif",
    fontSize: "4rem",
    margin: "3rem 0 2rem 4rem",
  },
});

export default HomeTile;
