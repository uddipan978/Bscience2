import React from "react";
import { Grid } from "@material-ui/core";
import styles from "./ready.module.scss";
import Bg from "../../Assets/Footer.png";
import Bg2 from "../../Assets/Footerwave.svg";
function Ready() {
  return (
    <Grid
      container
      xs={12}
      justify="center"
      alignItems="center"
      className="ready pos-relative"
    >
      <Grid item xl={6} lg={6} md={8} sm={8} xs={10}>
        <img src={Bg} className="bg_img_1" />
        <img src={Bg2} className="bg_img_2" />

        <h1 className={styles.readyh1} style={{zIndex: 999}} > Ready </h1>
        <p className={styles.readytext} style={{zIndex: 999}} > To start farming on BSC and Eth? </p>
        <button className={styles.readybutton} style={{zIndex: 999}} > Join Now </button>
      </Grid>
    </Grid>
  );
}

export default Ready;
