import React, { Fragment } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import interestTemplate from "../assets/interests_template.json";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles({
  root: {
    width: "100%",
    // maxWidth: "100%",
  },
  icon: {
    padding: "10px",
    fontSize: "90px",
    backgroundColor: "skyblue",
    borderRadius: "100%",
  },
});

const InterestsDescription: React.FC = () => {
  let interestsList = [];
  const classes = useStyles();

  for (let [interestType, value] of Object.entries(interestTemplate)) {
    let descList = "/";
    for (let description of value) {
      descList += ` ${description} / `;
    }
    interestsList.push(
      <Box display="flex" justifyContent="center" p={1}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h6">{interestType}</Typography>
            <Typography color="textSecondary">{descList}</Typography>
          </CardContent>
        </Card>
      </Box>
    );
  }
  return <Fragment>{interestsList}</Fragment>;
};

const Interests: React.FC = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1} id={"Interests"}>
          <Typography variant="h3">Interests</Typography>
        </Box>
        <FavoriteIcon className={classes.icon} />
        <InterestsDescription />
      </Box>
    </Fragment>
  );
};

export default Interests;
