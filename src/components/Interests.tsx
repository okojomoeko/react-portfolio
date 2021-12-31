import React, { Fragment } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import interestTemplate from '../assets/interests_template.json';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styled } from '@mui/material/styles';
import { useInView } from 'react-intersection-observer';
import FadeIn from 'react-fade-in';
import { motion } from 'framer-motion';

const StyledCard = styled(Card)({
  width: '100%',
});

const StyledFavoriteIcon = styled(FavoriteIcon)({
  padding: '10px',
  fontSize: '90px',
  backgroundColor: 'skyblue',
  borderRadius: '100%',
});

const StyledFavoriteIcon = styled(FavoriteIcon)({
  padding: '10px',
  fontSize: '90px',
  backgroundColor: 'skyblue',
  borderRadius: '100%',
});

const InterestsDescription: React.FC = () => {
  let interestsList = [];

  for (let [interestType, value] of Object.entries(interestTemplate)) {
    let descList = '/';
    for (let description of value) {
      descList += ` ${description} / `;
    }
    interestsList.push(
      <Box display='flex' justifyContent='center' p={1} key={interestType}>
        <motion.div
          animate={{ scale: [0, 1] }}
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
        >
          <StyledCard>
            <CardContent>
              <Typography variant='h6'>{interestType}</Typography>
              <Typography color='textSecondary'>{descList}</Typography>
            </CardContent>
          </StyledCard>
        </motion.div>
      </Box>
    );
  }
  return (
    <Fragment>
      <FadeIn>{interestsList}</FadeIn>
    </Fragment>
  );
};

const Interests: React.FC = () => {
  const [ref, inView] = useInView({
    rootMargin: '-30px 0px',
    triggerOnce: true,
  });
  return (
    <Fragment>
      <Box p={2} id={'Interests'} ref={ref}>
        {inView && (
          <>
            <Box display='flex' justifyContent='center' p={1}>
              <Typography variant='h3'>Interests</Typography>
            </Box>
            <StyledFavoriteIcon />
            <InterestsDescription />
          </>
        )}
      </Box>
    </Fragment>
  );
};

export default Interests;
