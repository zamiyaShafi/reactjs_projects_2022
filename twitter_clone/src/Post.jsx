import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PublishIcon from '@mui/icons-material/Publish';

export default function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className='post'>
      <div className='post_avatar'>
        <Avatar src={avatar} />
      </div >
      <div className='post_body'>
        <div className="post_header">
        <div className="post_headertext">
          <h3>{displayName} {" "}
            <span className='post_headerspecial'>{verified &&<VerifiedIcon className='post_badge'/>} @{username}</span>
            </h3>
        </div>
        <div className="header_description">
          <p>{text}</p>
        </div>

        </div>
        <img src={image} alt='text'/>
        <div className="post_footer">
          <ChatBubbleOutlineIcon fontSize='small'/>
          <RepeatIcon fontSize='small'/>
          <FavoriteIcon fontSize='small'/>
          <PublishIcon fontSize='small'/>

        </div>

        </div>
        

      </div>

    
  )
}
