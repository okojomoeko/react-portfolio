import React, { Fragment } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core";
import aboutTemplate from "../assets/about_template.json";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme: Theme) => ({
  oneLine: {
    display: "flex",
    justifyContent: "space-between",
    // paddingLeft: "15%",
    // paddingRight: "15%",
  },
  oneLineContent: {
    textAlign: "left",
  },
  oneLineContentImg: {
    textAlign: "right",
    alignItems: "center",
  },
  appLink: {
    color: "#61dafb",
  },

  circle: {
    borderRadius: "100%",
    background: "skyblue",
    margin: "10px auto",
    [theme.breakpoints.down("sm")]: {
      width: "50px",
      height: "50px",
    },
    [theme.breakpoints.up("md")]: {
      width: "100px",
      height: "100px",
    },
  },
}));

// useMediaQuery hookを用いてレスポンシブデザインに対応するのもありか

// function SimpleMediaQuery() {
//   const matches = useMediaQuery("screen and (min-width:600px)");
//   return (
//     <div>
//       {`(min-width:600px) matches: ${matches}`}
//     </div>
//   );
// }

interface IOneLine {
  yearHeader: string;
  mainHeader: string;
  description: string;
}

const OneLine = (props: IOneLine) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Box p={2} className={classes.oneLine}>
        <Grid container spacing={3}>
          <Grid item xs={4} className={classes.oneLineContentImg}>
            {/* <Avatar>
              <FolderIcon />
            </Avatar> */}
            <div className={classes.circle}></div>
          </Grid>
          <Grid item xs={8} className={classes.oneLineContent}>
            <Typography variant="h5">
              <b>{props.yearHeader}</b>
            </Typography>
            <Typography variant="h5">
              <b>{props.mainHeader}</b>
            </Typography>
            {props.description}
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

const AboutLines = () => {
  let aboutList = [];

  // check about size
  for (let [aboutProp, value] of Object.entries(aboutTemplate)) {
    for (let about of value) {
      aboutList.push(
        <Fragment>
          <li>
            <OneLine
              yearHeader={about.YearHeader}
              mainHeader={about.MainHeader}
              description={about.Description}
            />
          </li>
        </Fragment>
      );
    }
  }
  return <Fragment>{aboutList}</Fragment>;
};

const Timeline: React.FC = () => {
  return (
    <Fragment>
      <Box display="flex" justifyContent="center">
        <ul>
          <AboutLines />
        </ul>
      </Box>
    </Fragment>
  );
};

export default Timeline;
