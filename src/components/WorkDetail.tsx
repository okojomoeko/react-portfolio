import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, styled, Typography } from "@mui/material";
import React, { Fragment } from "react";
import CloseIcon from '@mui/icons-material/Close';

import { Work } from "../types/PortfolioTypes";

export interface DialogTitleProps {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const StyledIconButton = styled(IconButton)(({theme}) => ({
  // position: "absolute",
  right: theme.spacing(1),
  top: theme.spacing(1),
  color: theme.palette.grey[500],
}));

const StyledDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <StyledIconButton
          aria-label="close"
          onClick={onClose}
        >
          <CloseIcon />
        </StyledIconButton>
      ) : null}
    </DialogTitle>
  );
};
const StyledDialogContent = styled(DialogContent)(({theme}) => ({
  padding: theme.spacing(2),
}));

const StyledDialogActions = styled(DialogActions)(({theme}) => ({
  margin: 0,
  padding: theme.spacing(1),
}));

interface IWorksTechnologyProps {
  data: string[];
}

const WorksTechnology = (props: IWorksTechnologyProps) => {
  let worksTechnologies = [];
  for (let data of props.data) {
    worksTechnologies.push(<li>{data}</li>);
  }
  return (
    <Fragment>
      使用技術
      <ul>{worksTechnologies}</ul>
    </Fragment>
  );
};

interface IWorkDetailProps {
  handleClose: () => void;
  open: boolean;
  index: number;
  data: Work[];
}

export const WorkDetail = (props: IWorkDetailProps) => {
  return (
    <Fragment>
      <Dialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <StyledDialogTitle id="customized-dialog-title" onClose={props.handleClose}>
          {props.index !== -1 ? props.data[props.index].Name : "Error"}
        </StyledDialogTitle>
        <StyledDialogContent dividers>
          <Box p={2} display="flex" justifyContent="center">
            {props.index !== -1 ? (
              <img
                src={`${props.data[props.index].ImgPath}`}
                alt="海の写真"
                title="空と海"
                width="70%"
                height="auto"
              ></img>
            ) : (
              ""
            )}
          </Box>
          <Box p={2}>
            <Typography gutterBottom>
              {props.index !== -1 ? props.data[props.index].Description : ""}
            </Typography>
          </Box>
          <Box p={2}>
            {props.index !== -1 ? (
              <WorksTechnology data={props.data[props.index].Technology} />
            ) : (
              ""
            )}
          </Box>
        </StyledDialogContent>
        <StyledDialogActions>
          <Button autoFocus onClick={props.handleClose} color="primary">
            閉じる
          </Button>
        </StyledDialogActions>
      </Dialog>
    </Fragment>
  );
};
