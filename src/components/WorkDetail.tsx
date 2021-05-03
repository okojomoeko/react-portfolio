import React, { Fragment } from "react";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const WorksTechnology = (props: any) => {
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

export const WorkDetail = (props: any) => {
  console.log(__dirname);

  return (
    <Fragment>
      <Dialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
          {props.index !== -1 ? props.data[props.index].Name : "Error"}
        </DialogTitle>
        <DialogContent dividers>
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
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={props.handleClose} color="primary">
            閉じる
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};
