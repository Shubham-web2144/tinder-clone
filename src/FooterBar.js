import React from 'react';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { IconButton } from '@material-ui/core';
import './Style.css'

const FooterBar = () => {
    return (
        <div className='footerBar'>
            <IconButton>
                <ReplayIcon className='icon_btn replay' />
            </IconButton>
            <IconButton>
                <CloseIcon className='icon_btn close' />
            </IconButton>
            <IconButton>
                <StarIcon className='icon_btn star' />
            </IconButton>
            <IconButton>
                <FavoriteIcon className='icon_btn fav' />
            </IconButton>
            <IconButton>
                <FlashOnIcon className='icon_btn flash' />
            </IconButton>
        </div>
    )
}

export default FooterBar
