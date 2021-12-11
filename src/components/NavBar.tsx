import React, { Fragment } from "react";

import { Link } from "react-scroll";
import { makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";

import { AppBar, Button, FormControlLabel, Switch, Toolbar } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  topButtons: {},
  themeButtons: {},
}));

interface INavBarProps {
  themeFlagState: {
    themeFlag: boolean;
  };
  setState: React.Dispatch<
    React.SetStateAction<{
      themeFlag: boolean;
    }>
  >;
}

export const NavBar = (props: INavBarProps) => {
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setState({
      ...props.themeFlagState,
      [event.target.name]: event.target.checked,
    });
  };

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
            <Button color="inherit">WORKS</Button>
          </Link>
        </Toolbar>
        <FormControlLabel
          control={
            <Switch
              checked={props.themeFlagState.themeFlag}
              onChange={handleChange}
              name="themeFlag"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          }
          label="Dark Theme"
        />
      </AppBar>
    </Fragment>
  );
};