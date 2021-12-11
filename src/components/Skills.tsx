import { Box, Card, CardContent, styled, Typography } from "@mui/material";
import React, { Fragment } from "react";
import ComputerIcon from '@mui/icons-material/Computer';
import skillTemplate from "../assets/skills_template.json";


const StyledCard = styled(Card)({
  width: "100%",
});

const StyledComputerIcon = styled(ComputerIcon)({
  padding: "10px",
  fontSize: "90px",
  backgroundColor: "skyblue",
  borderRadius: "100%",
});

const SkillsDescription: React.FC = () => {
  let skillsList = [];

  for (let [skillType, value] of Object.entries(skillTemplate)) {
    let descList = "/";
    for (let description of value) {
      descList += ` ${description} / `;
    }
    skillsList.push(
      <Box display="flex" justifyContent="center" p={1} key={skillType}>
        <StyledCard >
          <CardContent>
            <Typography variant="h6">{skillType}</Typography>
            <Typography color="textSecondary">{descList}</Typography>
          </CardContent>
        </StyledCard>
      </Box>
    );
  }
  return <Fragment>{skillsList}</Fragment>;
};

const Skills: React.FC = () => {

  return (
    <Fragment>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1} id={"Skills"}>
          <Typography variant="h3">Skills</Typography>
        </Box>
        <StyledComputerIcon />

        <SkillsDescription />
      </Box>
    </Fragment>
  );
};

export default Skills;
