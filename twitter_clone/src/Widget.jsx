import React from 'react'
import './Widget.css'
import SearchIcon from '@mui/icons-material/Search';
import {TwitterTimelineEmbed,TwitterShareButton,TwitterTweetEmbed} from 'react-twitter-embed'




export default function Widget() {
  return (
    <div className='widget'>
        <div className="widget_input">
          <SearchIcon className='widget_search'/>
          <input placeholder="Search Tweet" type="text"/>
        </div>
        <div className='widget_widgetcontainer'>
          <h2>What's happening</h2>


          <TwitterTweetEmbed tweetId={'858551177860055040'}/>


          <TwitterTimelineEmbed
          sourceType='profile'
          screenName='cleverqazi'
          options={{height:400}}
          />


          <TwitterShareButton url={'https://facebook.com/cleverprogrammer'}
          options={{text:"#react js is awesome",via:"cleverqazi"}}/>




          <TwitterTweetEmbed
           tweetId={'933354946111705097'}
            />
          <TwitterShareButton
          url={'https://facebook.com/saurabhnemade'}
          options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
          />
{/* this is my own */}
<blockquote className="twitter-tweet"><p lang="en" dir="ltr">THIS or THAT ❓<br/><br/>Answer below, you could win that 😏 <a href="https://t.co/gh7DnDCgAT">pic.twitter.com/gh7DnDCgAT</a></p>&mdash; bugcrowd (@Bugcrowd) <a href="https://twitter.com/Bugcrowd/status/1618315315892346892?ref_src=twsrc%5Etfw">January 25, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


        </div>

    </div>
  )
}
