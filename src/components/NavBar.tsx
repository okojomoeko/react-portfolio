import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    alignItems: "center",
  },
}));

const Navbar: React.FC = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position="sticky" className={clsx(classes.appBar)}>
        <Toolbar>
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button color="inherit">ABOUT</Button>
          </Link>
          <Link
            activeClass="active"
            to="Skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button color="inherit">SKILLS & INTEREST</Button>
          </Link>
          <Link
            activeClass="active"
            to="Works"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button color="inherit">Works</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
