import * as React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import SideDrawer from "./SideDrawer";
import logo from "./../../Assets/Logo.png";
import styles from "./header.module.scss";

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    borderBlockColor: `#64592F`,
    border: `red`,
  },
  linkText: {
    textDecoration: `none`,
    // textTransform: `uppercase`,
    color: `#F6D869`,
  },
  linkTextBtn: {
    textDecoration: `none`,
    // textTransform: `uppercase`,
    color: `#F6D869`,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#f6d869'
  }
});

const navLinks = [
  { title: `Key Features`, path: `/key_features` },
  { title: `Tokenomics`, path: `/tokenomics` },
  { title: `Roadmap`, path: `/raodmap` },
  { title: `Farming`, path: `/farming` },
];

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" style={{ backgroundColor: "transparent" }}>
      <Toolbar>
        <Container className={classes.navbarDisplayFlex}>
          <IconButton edge="start">
            <img src={logo} alt="Logo" className={styles.logoHeader} />
          </IconButton>
          <Hidden smDown>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {navLinks.map(({ title, path }) => (
                <a href={path} key={title} className={ classes.linkText}>
                  <ListItem button className={title === 'Farming' && 'linkTextBtn'} >
                    <ListItemText primary={title} />
                  </ListItem>
                </a>
              ))}
            </List>
          </Hidden>
          <Hidden mdUp>
            <SideDrawer navLinks={navLinks} />
          </Hidden>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
