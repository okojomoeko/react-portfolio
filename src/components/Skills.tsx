import { Box, Card, CardContent, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import ComputerIcon from '@mui/icons-material/Computer';
import { styled } from '@mui/material/styles';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import skillTemplate from '../assets/skills_template.json';

const StyledCard = styled(Card)({
  width: '100%',
});

const StyledComputerIcon = styled(ComputerIcon)({
  padding: '10px',
  fontSize: '90px',
  backgroundColor: 'skyblue',
  borderRadius: '100%',
});

const SkillsDescription: React.FC = () => {
  const skillsList = [];

  for (const [skillType, value] of Object.entries(skillTemplate)) {
    let descList = '/';
    for (const description of value) {
      descList += ` ${description} / `;
    }
    skillsList.push(
      <Box display='flex' justifyContent='center' p={1} key={skillType}>
        <motion.div
          animate={{ scale: [0, 1] }}
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
        >
          <StyledCard>
            <CardContent>
              <Typography variant='h6'>{skillType}</Typography>
              <Typography color='textSecondary'>{descList}</Typography>
            </CardContent>
          </StyledCard>
        </motion.div>
      </Box>
    );
  }
  return <>{skillsList}</>;
};

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    rootMargin: '-30px 0px',
    triggerOnce: true,
  });

  return (
    <>
      <Box p={2} id='Skills' ref={ref}>
        {inView && (
          <>
            <Box display='flex' justifyContent='center' p={1}>
              <Typography variant='h3'>Skills</Typography>
            </Box>
            <StyledComputerIcon />

            <SkillsDescription />
          </>
        )}
      </Box>
    </>
  );
};

export default Skills;
