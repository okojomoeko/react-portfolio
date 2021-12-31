import React, { Fragment } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import interestTemplate from "../assets/interests_template.json";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)({
  width: "100%"
});

const StyledFavoriteIcon = styled(FavoriteIcon)({
  padding: "10px",
  fontSize: "90px",
  backgroundColor: "skyblue",
  borderRadius: "100%",
});



const InterestsDescription: React.FC = () => {
  let interestsList = [];

  for (let [interestType, value] of Object.entries(interestTemplate)) {
    let descList = "/";
    for (let description of value) {
      descList += ` ${description} / `;
    }
    interestsList.push(
      <Box display="flex" justifyContent="center" p={1} key={interestType}>
        <StyledCard>
          <CardContent>
            <Typography variant="h6">{interestType}</Typography>
            <Typography color="textSecondary">{descList}</Typography>
          </CardContent>
        </StyledCard>
      </Box>
    );
  }
  return <Fragment>{interestsList}</Fragment>;
};

const Interests: React.FC = () => {

  return (
    <Fragment>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1} id={"Interests"}>
          <Typography variant="h3">Interests</Typography>
        </Box>
        <StyledFavoriteIcon />
        <InterestsDescription />
      </Box>
    </Fragment>
  );
};

export default Interests;
