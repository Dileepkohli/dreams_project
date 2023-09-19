import React, { Component } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

  const navigate = useNavigate();

  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 160,
      
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 17,
         
          marginRight: theme.spacing(1.5),
        },
      },
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const userData=JSON.parse(localStorage.getItem("user_data"));
  console.log(userData);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlesignout = ( ) =>{
    localStorage.clear();
    navigate('/signin')
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light p-4">
          <Link to='/myaccount'><img src={require('./Images/WhatsApp Image 2023-07-24 at 12.58.35.jpg')} width={250} height={40}/></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse  " id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto mt-2">
                    <li class="nav-item ms-4 "><Link to='/builddream' className='text-dark text-decoration-none'>BUILD A DREAM</Link> </li>
                    <li class="nav-item ms-4"><Link to='/inspire' className='text-dark text-decoration-none'>INSPIRE</Link></li>
                    <li class="nav-item ms-4"><Link to='/community' className='text-dark text-decoration-none'>COMMUNITY</Link></li>
                    <li class="nav-item ms-4"><Link to='/mydreams' className='text-dark text-decoration-none'>MY DREAMS</Link></li>
                    <li class="nav-item ms-3">
                    <div style={{marginTop:-5,color:'black'}}>
                        <Button
                          // id="demo-customized-button"
                          aria-controls={open ? 'demo-customized-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          // variant="contained"
                          disableElevation
                          onClick={handleClick}
                          endIcon={<KeyboardArrowDownIcon />}
                        >
                          Hello {userData?.name}
                        </Button>
                        <StyledMenu
                          id="demo-customized-menu"
                          MenuListProps={{
                            'aria-labelledby': 'demo-customized-button',
                          }}
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={handleClose} disableRipple>
                           <Link to='/dashboard'  className='text-dark text-decoration-none'>DASHBOARD</Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose} disableRipple>
                            <Link to='/myinfo' className='text-dark text-decoration-none'>MY ACCOUNT</Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose} disableRipple>
                            <Link to='/changepwd' className='text-dark text-decoration-none'>RESET PASSWORD</Link>
                          </MenuItem>
                          <MenuItem onClick={handlesignout} disableRipple>
                            SIGNOUT
                          </MenuItem>
                        </StyledMenu>
                      </div>
                    </li>
                </ul>
            </div>
            </nav>
    </div>
  )
}
