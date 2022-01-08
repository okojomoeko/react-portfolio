import React, { Fragment } from 'react';

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
import workTemplate from '../assets/works_template.json';
import { WorkDetail } from './WorkDetail';
import { Work } from '../types/PortfolioTypes';

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
  const ret: Work[] = [];

  const numEntries = workTemplate.Works.length;
  for (let i = 0; i < numEntries; i += 1) {
    ret.push({
      Name: workTemplate.Works[i].Name,
      OverView: workTemplate.Works[i].OverView,
      Description: workTemplate.Works[i].Description,
      ImgPath: `assets/img/${workTemplate.Works[i].ImgName}`,
      Technology: workTemplate.Works[i].Technology,
    });
  }

  return ret;
})();

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ListItem button component='a' {...props} />;
}
interface RenderWorkItemProps {
  index: number;
  data: Work;
  handleOpen: (event: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number) => void;
}

const renderWorkItem = (props: RenderWorkItemProps) => {
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
                <img src={`${data.ImgPath}`} alt={data.Name} width='100%' height='auto' />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={data.Name} secondary={data.OverView} />
          </ListItemLink>
        </ListItem>
      </motion.div>
    </Fragment>
  );
};
interface WorkOverviewProps {
  handleOpen: (event: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number) => void;
}

const WorkOverview = (props: WorkOverviewProps) => {
  const { handleOpen } = props;
  const numEntries = worksList.length;
  const renderWorkItems = [];
  for (let i = 0; i < numEntries; i += 1) {
    renderWorkItems.push(
      renderWorkItem({
        index: i,
        data: worksList[i],
        handleOpen: handleOpen,
      })
    );
  }

  return (
    <>
      <Box display='flex' justifyContent='center' p={1}>
        <StyledList>{renderWorkItems}</StyledList>
      </Box>
    </>
  );
};

const Works: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  const [ref, inView] = useInView({
    rootMargin: '-30px 0px',
    triggerOnce: true,
  });

  return (
    <>
      <Box p={2} ref={ref} id='Works'>
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
    </>
  );
};

export default Works;
