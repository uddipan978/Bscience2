import React from "react";
import { Grid } from "@material-ui/core";
import styles from "./trading.module.scss";
import { PieChart } from "react-minimal-pie-chart";
import Bg from '../../Assets/TokenomicsWave.svg';
 
import Chart from "./Chart";

function Trading() {
  return (
    <div>
      <Grid
        container
        xs={12}
        justify="center"
        style={{ backgroundColor: "#10223C" }}
        className={styles.tradingcenterBackground}
      >
        <Grid item container xs={10}>
          <Grid item xl={6} lg={6} md={6} sm={8} xs={10}>
            <h1 className={styles.tradingh1}> Trading Bot</h1>
            <hr />
            <p className={styles.tradingtext}>
              {" "}
              <span> Lorem </span> ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam sie nonumy eirmod tempor invidunt ut labore et
              dolore magna aliquyami erat, sed diam voluptua.
            </p>
            <p className={styles.tradingtext}>
              <span> Lorem </span> ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam sie nonumy eirmod tempor invidunt ut labore et
              dolore magna aliquyami erat, sed diam voluptua.
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className='pos-relative chart-section '
        xs={12}
        direction="row"
        style={{ marginTop: "100px", backgroundColor: '#10223C' }}
      >
        <img src={Bg} className='bg_img' />
        <Grid item xl={6} lg={6} md={6} sm={8} xs={12} style={{zIndex: 999}} className='chart_left' >
          <h1 className={styles.tokenomics}> Tokenomics</h1>
          <p className={styles.totalsupply}> Total supply</p>
          <p className={styles.numbers}> 314.159</p>
          <hr />
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={8} xs={12} style={{zIndex: 999}}>
          {/* <PieChart
            data={[
              { title: "One", value: 6, color: "#67a6a5", label: "gel" },
              { title: "Two", value: 8, color: "#C13C37" },
              { title: "Three", value: 12, color: "#6A2135" },
              { title: "Three", value: 19, color: "#a271ab" },
              { title: "Three", value: 25, color: "#6fab77" },
              { title: "Three", value: 30, color: "#d184a0" },
            ]}
          /> */}
          <Chart />
        </Grid>
      </Grid>
    </div>
  );
}

export default Trading;
