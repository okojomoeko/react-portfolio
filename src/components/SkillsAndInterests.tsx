import { styled } from "@mui/material/styles";
import React, { Fragment } from "react";
import ContentWrapper from "../styles/ContentWrapper";

import Interests from "./Interests";
import Skills from "./Skills";

const StyledContentWrapper = styled(ContentWrapper)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
}));

const SkillsAndInterests: React.FC = () => {
  return (
    <Fragment>
      <StyledContentWrapper>
        <Skills />
        <Interests />
      </StyledContentWrapper>
    </Fragment>
  );
};

export default SkillsAndInterests;
