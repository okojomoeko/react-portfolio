import { Box, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { styled } from "@mui/material/styles";

import aboutTemplate from "../assets/about_template.json";
import ContentWrapper from "../styles/ContentWrapper";


// useMediaQuery hookを用いてレスポンシブデザインに対応するのもありか

// function SimpleMediaQuery() {
//   const matches = useMediaQuery("screen and (min-width:600px)");
//   return (
//     <div>
//       {`(min-width:600px) matches: ${matches}`}
//     </div>
//   );
// }

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledContentImg = styled(Grid)({
  textAlign: "right",
  alignItems: "center",
});

const StyledContent = styled(Grid)({
  textAlign: "left",
});

const Circle = styled(ContentWrapper)(({theme}) => ({
  borderRadius: "100%",
  background: "skyblue",
  margin: "10px auto",
  [theme.breakpoints.down("md")]: {
    width: "50px",
    height: "50px",
  },
  [theme.breakpoints.up("md")]: {
    width: "100px",
    height: "100px",
  },
}));


interface IOneLineProps {
  yearHeader: string;
  mainHeader: string;
  description: string;
}

const OneLine = (props: IOneLineProps) => {

  return (
    <Fragment>
      <StyledBox p={2} >
        <Grid container spacing={3}>
          <StyledContentImg item xs={4} >
            <Circle />
          </StyledContentImg>
          <StyledContent item xs={8} >
            <Typography variant="h5">
              <b>{props.yearHeader}</b>
            </Typography>
            <Typography variant="h5">
              <b>{props.mainHeader}</b>
            </Typography>
            {props.description}
          </StyledContent>
        </Grid>
      </StyledBox>
    </Fragment>
  );
};

const AboutLines = () => {
  let aboutList = [];

  // check about size
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (let [aboutProp, value] of Object.entries(aboutTemplate)) {
    for (let about of value) {
      aboutList.push(
        <Fragment key={about.YearHeader}>
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
