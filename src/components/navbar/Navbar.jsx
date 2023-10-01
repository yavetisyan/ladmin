import React from 'react';
import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import Badge from '@mui/material/Badge';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Serach...'/>
          <SearchOutlinedIcon className='icon'/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className='icon'/>
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className='icon'/>
          </div>

          <div className="item">

            <Badge badgeContent={4} color="error">
              <NotificationsActiveOutlinedIcon className='icon'/>
            </Badge>
          </div>
          <div className="item">
            <Badge badgeContent={6} color="error">
              <ChatBubbleOutlineOutlinedIcon className='icon'/>

            </Badge>
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className='icon'/>
          </div>
          <div className="item">
            <FormatListBulletedOutlinedIcon className='icon'/>
          </div>
          <div className="item">
            <img
              className='avatar'
              src="https://images.pexels.com/photos/7173081/pexels-photo-7173081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;