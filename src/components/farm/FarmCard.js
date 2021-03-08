import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import clsx from 'clsx';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: "#23436E",
    borderRadius: "15px",
    padding: "30px",
    '&:after' : {
        content: '',
        display: 'block',
        width: '100%',
        height: '100%',
        transform: `rotate(45deg)`,
        backgroundColor: '#000' 
    }
  },
  media: {
    height: 140,
    color: "#FFFFFF",
  },
  text: {
    textAlign: "left",
    fontSize: "16px",
    opacity: 0.7,
  },
});

export default function FarmCard() {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, 'farm-cards')}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            component="p"
            className={clsx(classes.text)}
          >
            Lorem ipsum dolor sit ads amet, consetetur sadeasd sadipscing elitr,
            sed diam nonumy asie eirmod lorem tempor invidunt ut labore et de
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
