import React from "react";
import styles from "./center.module.scss";
import { Grid } from "@material-ui/core";
import ringImage from "./../../Assets/HeroSectionImage.svg";
import Discord from "../../Assets/discord.png";
import Paper from "../../Assets/paper.png";
import M from "../../Assets/M.png";
import Twitter from "../../Assets/twitter.png";
import MobileImg from "../../Assets/Mobilelogo.png";
function Center() {
  return (
    <Grid container direction="row" className="header" xs={12}>
      <Grid
        item
        container
        justify="center"
        xl={8}
        lg={8}
        md={8}
        sm={12}
        xs={12}
      >
        <Grid
          className="removeonWeb pos-relative"
          item
          container
          justify="center"
          xl={4}
          lg={4}
          md={4}
          sm={12}
          xs={12}
        >
          <img
            src={MobileImg}
            className="removeonWeb"
            style={{
              position: "aboslute",
              top: 0,
              right: "-10%",
              width: "130%",
            }}
          />
        </Grid>
        <Grid item xs={11} md={8}>
          <p className="displaynonemobile">
            <p className={styles.h1Center}> Bscience</p>
          </p>

          <p className={styles.h3Center}>
            {" "}
            The science of Decentralized Finance{" "}
          </p>
          <p className={styles.h2Center}> now on BSC!</p>
        </Grid>

        <Grid item xs={11} md={8} style={{ marginTop: "50px", textAlign: "left" }}>
          <button type="submit" className={styles.buttonCenter}>
            {" "}
            YFScience
          </button>
          <button type="submit" className={styles.buttonCenter}>
            {" "}
            Farming Labs
          </button>
          <button type="submit" className={styles.buttonCenter}>
            {" "}
            Buy
          </button>
          <button type="submit" className={styles.buttonCenter}>
            {" "}
            Litepaper
          </button>
        </Grid>

        <Grid item xs={8} style={{ marginTop: "50px", textAlign: "left" }}>
          <img src={Discord} className="social-header" />

          <img src={Paper} className="social-header" />
          <img src={M} className="social-header" />
          <img src={Twitter} className="social-header" />
        </Grid>
      </Grid>

      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <div className="displaynonemobile">
          {" "}
          <img
            src={ringImage}
            alt="Background Image Rings"
            className="bg-img header_img "
          />
        </div>
      </Grid>

      <div className="flex-center">
        <div className="header-divider" />
      </div>
    </Grid>
  );
}

export default Center;
