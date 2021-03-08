import React from "react";
import FarmCard from "./FarmCard";
import { Grid } from "@material-ui/core";
import styles from "./farmmain.module.scss";
import Icon1 from "../../Assets/Icon1.svg";
import Icon2 from "../../Assets/Icon2.svg";
import Icon3 from "../../Assets/Icon3.svg";
import Bg from "../../Assets/wave (9).svg";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: "#23436E",
    borderRadius: "15px",
    padding: "30px",
  },
  media: {
    height: 140,
    color: "#FFFFFF",
  },
});

function Farm() {
  const classes = useStyles();
  return (
    <Grid
      container
      xs={12}
      justify="center"
      style={{backgroundColor: '#10213b'}}
      className="pos-relative farm "
    >
      <img src={Bg} className="img_bg" />

      <Grid item xs={12} md={6} style={{ zIndex: 999 }} >
        <p className={styles.textStyle}>
          YFScience is a new generation decentralised platform that enables
          different features for staking, lending, trading and coinvesting. YFSI
          is the governance token of YFScience that enables access to an
          on-chain decision making model.
        </p>
      </Grid>
      <Grid item container xs={12} justify="space-around" style={{ zIndex: 999 }}>
        <Grid item xs={12}>
          <button className={styles.buttonCenter}> Farm </button>
        </Grid>
        <Grid item container xs={10} style={{ zIndex: 999 }}>
          <Grid xl={4} lg={4} md={4} sm={12} xs={12}>
            <Card className={classes.root} style={{ marginTop: "10px" }}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  title="Contemplative Reptile"
                >
                  <img src={Icon1} />
                </CardMedia>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit ads amet, consetetur sadeasd
                    sadipscing elitr, sed diam nonumy asie eirmod lorem tempor
                    invidunt ut labore et de
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid xl={4} lg={4} md={4} sm={12} xs={12}>
            <Card className={classes.root} style={{ marginTop: "10px" }}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  title="Contemplative Reptile"
                >
                  <img src={Icon2} />
                </CardMedia>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit ads amet, consetetur sadeasd
                    sadipscing elitr, sed diam nonumy asie eirmod lorem tempor
                    invidunt ut labore et de
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid xl={4} lg={4} md={4} sm={12} xs={12}>
            <Card className={classes.root} style={{ marginTop: "10px" }}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  title="Contemplative Reptile"
                >
                  <img src={Icon3} />
                </CardMedia>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit ads amet, consetetur sadeasd
                    sadipscing elitr, sed diam nonumy asie eirmod lorem tempor
                    invidunt ut labore et de
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Farm;
