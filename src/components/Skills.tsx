import React, { Fragment } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import skillTemplate from "../assets/skills_template.json";
import ComputerIcon from "@material-ui/icons/Computer";

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

const SkillsDescription: React.FC = () => {
  let skillsList = [];
  const classes = useStyles();

  for (let [skillType, value] of Object.entries(skillTemplate)) {
    let descList = "/";
    for (let description of value) {
      descList += ` ${description} / `;
    }
    skillsList.push(
      <Box display="flex" justifyContent="center" p={1} key={skillType}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h6">{skillType}</Typography>
            <Typography color="textSecondary">{descList}</Typography>
          </CardContent>
        </Card>
      </Box>
    );
  }
  return <Fragment>{skillsList}</Fragment>;
};

const Skills: React.FC = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1} id={"Skills"}>
          <Typography variant="h3">Skills</Typography>
        </Box>
        <ComputerIcon className={classes.icon} />

        <SkillsDescription />
      </Box>
    </Fragment>
  );
};

export default Skills;
