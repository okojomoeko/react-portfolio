import React, { Fragment } from 'react';
import { Box, Typography } from '@mui/material';

import Timeline from './Timeline';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    rootMargin: '0px 0px',
    triggerOnce: true,
  });
  return (
    <Fragment>
      <Box p={2} id={'About'} ref={ref}>
        {inView && (
          <>
            <Box display='flex' justifyContent='center' p={1}>
              <Typography variant='h3'>About</Typography>
            </Box>
            簡単な経歴
            <Box display='flex' justifyContent='center' p={1}>
              <Typography variant='body1' align='left'></Typography>
            </Box>
          </>
        )}

        <Timeline />
      </Box>
    </Fragment>
  );
};

export default About;
