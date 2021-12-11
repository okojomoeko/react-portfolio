import React, { Fragment } from "react";
import { Box } from "@mui/material";
import Typography from "@material-ui/core/Typography";
import Timeline from "./Timeline";

const About: React.FC = () => {
  return (
    <Fragment>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1} id={"About"}>
          <Typography variant="h3">About</Typography>
        </Box>
        簡単な経歴
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="body1" align="left"></Typography>
        </Box>
      </Box>
      <Timeline />
    </Fragment>
  );
};

export default About;
