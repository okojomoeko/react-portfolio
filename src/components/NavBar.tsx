import React, { Fragment } from 'react';
import { Link } from 'react-scroll';
import { AppBar, Button, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'right',
  backgroundColor: 'rgba(0,0,0,0.9)',
}));

export const NavBar = () => (
  // TODO: dark mode switch
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   props.setState({
  //     ...props.themeFlagState,
  //     [event.target.name]: event.target.checked,
  //   });
  // };

  <>
    <StyledAppBar position='sticky'>
      <Toolbar>
        <Link activeClass='active' to='About' spy smooth offset={-70} duration={500}>
          <Button color='inherit'>ABOUT</Button>
        </Link>
        <Link activeClass='active' to='Skills' spy smooth offset={-70} duration={500}>
          <Button color='inherit'>SKILLS & INTEREST</Button>
        </Link>
        <Link activeClass='active' to='Works' spy smooth offset={-70} duration={500}>
          <Button color='inherit'>WORKS</Button>
        </Link>
      </Toolbar>
      {/* <FormControlLabel
          control={
            <Switch
              checked={props.themeFlagState.themeFlag}
              onChange={handleChange}
              name="themeFlag"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          }
          label="Dark Theme"
        /> */}
    </StyledAppBar>
  </>
);
