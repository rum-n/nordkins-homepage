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
      <div className={classes.cta}>
        Have a project in mind? We&apos;d love to chat!
      </div>
      <button className={classes.ctaBtn}>Say hi</button>
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
    fontFamily: "Bebas Neue, sans-serif",
    fontSize: "3rem",
  },
  title: {
    width: "70%",
    fontFamily: "Bebas Neue, sans-serif",
    fontSize: "5rem",
    lineHeight: "4.5rem",
    margin: "3rem 0 2rem 4rem",
    color: "#bbe1fa",
  },
  cta: {
    width: "70%",
    margin: "3rem 0 2rem 4rem",
    fontSize: "1.5rem",
    fontFamily: "sans-serif",
    color: "#fff",
  },
  ctaBtn: {
    margin: "0 4rem",
    width: "20%",
    height: "3rem",
    fontFamily: "Bebas Neue, sans-serif",
    fontSize: "1.5rem",
    borderRadius: "0.6rem",
    border: "none",
    cursor: "pointer",
    transition: "0.3s",
    color: "#bbe1fa",
    backgroundColor: "#1b262c",
    "&:hover": {
      transition: "0.3s",
      backgroundColor: "#0f4c75",
      boxShadow: "0.2rem 0.2rem 0 0.2rem #bbe1fa",
    },
  },
});

export default HomeTile;
