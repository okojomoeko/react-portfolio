import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar: React.FC = () => {
  return (
    <Fragment>
      <AppBar
        color="default"
        position="sticky"
        style={{ alignItems: "center" }}
      >
        <Toolbar>
          <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
            <Button color="inherit">
              ABOUT
            </Button>
          </Link>
          <Link
              activeClass="active"
              to="Skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
            <Button color="inherit">
              SKILLS & INTEREST
            </Button>
          </Link>
          <Link
              activeClass="active"
              to="Works"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
            <Button color="inherit">

              Works
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
