import { makeStyles, Theme } from "@material-ui/core";
import React, { Fragment } from "react";

import Interests from "./Interests";
import Skills from "./Skills";

const useStyles = makeStyles((theme: Theme) => ({
  skillAndInterestArea: {
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
}));

const SkillsAndInterests: React.FC = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <span className={classes.skillAndInterestArea}>
        <Skills />
        <Interests />
      </span>
    </Fragment>
  );
};

export default SkillsAndInterests;
