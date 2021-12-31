import React, { Fragment } from 'react';

import workTemplate from '../assets/works_template.json';
import { WorkDetail } from './WorkDetail';
import { Work } from '../types/PortfolioTypes';
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemProps,
  ListItemText,
  styled,
  Typography,
} from '@mui/material';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const StyledList = styled(List)(({ theme }) => ({
  root: {
    width: 770,
    maxWidth: '100%',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const worksList = (() => {
  let ret: Work[] = [];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (let [workProp, value] of Object.entries(workTemplate)) {
    for (let work of value) {
      let tempwork: Work = {
        Name: work.Name,
        OverView: work.OverView,
        Description: work.Description,
        ImgPath: `${process.env.PUBLIC_URL}/assets/img/${work.ImgName}`,
        Technology: work.Technology,
      };
      ret.push(tempwork);
    }
  }
  return ret;
})();

const WorkOverview = (props: any) => {
  // let worksList = [];
  // const classes = useStyles();
  let count = 0;
  let renderWorkItems = [];
  for (let work of worksList) {
    renderWorkItems.push(renderWorkItem({ index: count, data: work, handleOpen: props.handleOpen }));
    count++;
  }

  return (
    <Fragment>
      <Box display='flex' justifyContent='center' p={1}>
        <StyledList>{renderWorkItems}</StyledList>
      </Box>
    </Fragment>
  );
};

const renderWorkItem = (props: any) => {
  const { index, data, handleOpen } = props;
  return (
    <Fragment key={data.Name}>
      <motion.div
        animate={{ scale: [0, 1] }}
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <ListItem
          onClick={(event) => {
            handleOpen(event, index);
          }}
        >
          <ListItemLink>
            <ListItemAvatar>
              <Avatar>
                <img src={`${data.ImgPath}`} alt={data.Name} width='100%' height='auto'></img>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={data.Name} secondary={data.OverView} />
          </ListItemLink>
        </ListItem>
      </motion.div>
    </Fragment>
  );
};

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component='a' {...props} />;
}

const Works: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  const [ref, inView] = useInView({
    rootMargin: '-30px 0px',
    triggerOnce: true,
  });

  return (
    <Fragment>
      <Box p={2} ref={ref} id={'Works'}>
        {inView && (
          <>
            <Box display='flex' justifyContent='center' p={1}>
              <Typography variant='h3'>Works</Typography>
            </Box>

            <WorkOverview handleOpen={handleOpen} />

            <WorkDetail handleClose={handleClose} open={open} index={selectedIndex} data={worksList} />
          </>
        )}
      </Box>
    </Fragment>
  );
};

export default Works;
