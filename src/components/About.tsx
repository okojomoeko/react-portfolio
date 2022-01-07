import React, { Fragment } from 'react';
import { Box, Typography } from '@mui/material';

import { useInView } from 'react-intersection-observer';
import Timeline from './Timeline';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    rootMargin: '0px 0px',
    triggerOnce: true,
  });
  return (
    <>
      <Box p={2} id='About' ref={ref}>
        {inView && (
          <>
            <Box display='flex' justifyContent='center' p={1}>
              <Typography variant='h3'>About</Typography>
            </Box>
            簡単な経歴
            <Box display='flex' justifyContent='center' p={1}>
              <Typography variant='body1' align='left' />
            </Box>
          </>
        )}

        <Timeline />
      </Box>
    </>
  );
};

export default About;
