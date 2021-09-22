import React from 'react';
import './Style.css';
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import { IconButton } from '@material-ui/core';

const Header = () => {
   return (
      <div className='header'>
         {/* user icon */}
         <IconButton>
            <PersonIcon className='header_icon'/>
         </IconButton>
         {/* tinder logo */}
         <IconButton>
         <WhatshotIcon fontSize='large' className='header_logo'/>
         </IconButton>
         {/* msg icon */}
         <IconButton>
         <QuestionAnswerIcon className='header_icon'/>
         </IconButton>
      </div>
   )
}

export default Header
