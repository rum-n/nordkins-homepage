import Head from "next/head";
import Image from "next/image";
import HomeTile from "@/components/HomeTile";
import AboutTile from "@/components/AboutTile";
import { createUseStyles } from "react-jss";

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Nordkins - Web & Mobile App development</title>
        <meta name="description" content="Web & Mobile App development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classes.main}>
        <HomeTile />
        <AboutTile />
      </main>
    </>
  );
}

const useStyles = createUseStyles({
  main: {
    display: "flex",
    // justifyContent: "space-between",
    padding: "1rem",
    minHeight: "100vh",
  },
});
