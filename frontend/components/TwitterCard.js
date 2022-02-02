import Image from 'next/image';
import { FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';
import headshot from "../public/images/hero/square-portrait.jpg";
import TwitterCardIcon from './icons/TwitterCardIcon';
import costaRica from "../public/images/costa-rica-alex.jpg";
import InfoIcon from './icons/InfoIcon';
import LikeIcon from './icons/LikeIcon';
import ReplyIcon from './icons/ReplyIcon';
import CopyLinkIcon from './icons/CopyLinkIcon';
import RetweetIcon from './icons/RetweetIcon';

const StyledCard = styled.article`
  width: 100%;
  max-width: 550px;
  border: 1px solid hsl(201,17%,84%);
  border-radius: 10px;
  padding: 16px;
  background-color: var(--color-background);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  &:hover{
    filter: brightness(.98);
  }
  .top-row{
    display: flex;
    justify-content: space-between;
  }
  .image-title-container{
    display:flex;
    padding-bottom: 8px;
  }
  .profile-picture-wrapper{
    width: 48px;
    height: 48px;
    img{
      border-radius: 50%;
    }
  }
  .title-handle-container{
    padding: 4px;
    cursor: pointer;
  h2{
    font-size: 1rem;
    font-weight: 500;
    &:hover{
      text-decoration: underline;
    }
  }
  p{
    font-size: .9rem;
    line-height: 1;
  }
  }
  .twitter-card-icon{
    width: 24px;
      height: 24px;
    svg{
      width: 24px;
      height: 24px;
      fill: hsl(204,87%,52%);
    }
  }
  .twitter-body{
    font-weight: 500;
    font-size: 1.2rem;
  }
  .embedded-media-container{
    margin-top: 12px;
    border: 1px solid hsl(201,17%,84%);
    border-radius: 10px;
    width: 100%;
    display: flex;
    align-items: stretch;
    &:hover{
      .text-container{
        background-color: hsl(0, 0%, 98%);
        border-radius: 10px;
      }
    }
    .media-container{
      max-width: 25%;
      overflow: hidden;
      img{
        width: 100%;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }
    }
    .text-container{
      display: flex;
      flex-direction: column; 
      justify-content: center;
      padding-left: 12px;
      padding-right: 12px;
      font-size: .85rem;
      a, a:visited{
        color: hsl(206, 15%, 38%);
      }
      strong{
        font-weight: 500;
      }
      p{
        font-weight: 400;
      }
    }
  }
  .info-row{
    font-weight: 500;
    display: flex;
    color: hsl(206, 15%, 38%);
    font-size: .95rem;
    justify-content: space-between;
    margin-top: 8px;
  }
  .time-date-wrapper{
    display: flex;icon-container   
  }
  .info-icon{
    width: 20px;
    height: 20px;
    color: hsl(206, 15%, 38%);
    stroke-width: .125px;
  }
  .tweet-interaction-row{
    margin-top: 8px;
    border-top: 1px solid hsl(201,17%,84%);
    padding-top: 8px;
    font-size: .8;
    font-weight: 400;
    color: hsl(206, 15%, 38%);
    display: flex;
    svg{
      color: hsl(206, 15%, 38%);
      height: 20px;
      stroke-width: .125px;
      margin-right: 8px;
    }
  }
  .icon-container{
    height: 24px;
    margin-right: 32px;
    display: flex;
    align-items: center;
  }
  .reply-button-row{
    margin-top: 8px;
    button{
      width: 100%;
      text-align: center;
      font-weight: 800;
      font-size: .9rem;
      padding: 4px;
      border: 1px solid hsl(201, 17%, 84%);
      color: hsl(204,87%,52%);
      border-radius: 16px;
    }
  }
`;

export default function TwitterCard(){
  return (
    <StyledCard> 
      <div className="card-content">
        <div className="top-row">
          {/*Prophile  Photo */}
          <div className="image-title-container">
            <div className="profile-picture-wrapper">
              <Image src={headshot} alt="Twitter Profile Picture"/>
            </div>
            <div className="title-handle-container">
              <h2>
            {/* Twitter Full Name */}
                Alex Andres
              </h2>
              <p>
          {/* Twitter Handle */}
                @al_codes
              </p>
            </div>
          </div>
          {/* Twitter Branding - blue hsl(204,87%,52%) */}
          <TwitterCardIcon  className="twitter-card-icon"/>
        </div>
        {/* Tweet Body */}
        <p className="twitter-body">
        The dusk and dawn light in @DeathValleyNPS is amazing. I visit almost every year for #photography.
        </p>
        {/* Tweet Embed */}
        <div className="embedded-media-container">
          <div className="media-container">
            <img src="/images/hero/square-portrait.jpg" alt="placeholder" />
          </div>
          <div className="text-container">
            <a href="https://youtube.com">youtube.com</a>
            <strong className="title">Death Valley Wilderness: Wildreness Light</strong>
            <p>Follow the course of light through the death valley Wilderness and observe the obvious and subtle change</p>
          </div>
        </div>
        <div className="info-row">
          {/* Tweet Time */}
          <div className="time-date-wrapper">
              9:45 AM ·{` `} Feb 2, 2022
          </div>
          {/* Twitter Info Button */}
          <div className="info-button-container">
            <a href="https://help.twitter.com/en/twitter-for-websites-ads-info-and-privacy" aria-label="Twitter Ads info and privacy" title="Twitter Ads info and privacy">
              <InfoIcon className="info-icon" />
            </a>
          </div>
        </div>
        <div className="tweet-interaction-row">
          <div className="icon-container like-container">
            <LikeIcon />
            {`  `}25
          </div>
          <div className="icon-container retweet-container">
            <RetweetIcon />
            {`  `}25
          </div>
          <div className="icon-container reply-container">
            <ReplyIcon />
            {`  `}Reply
          </div>
          
          <div className="icon-container copy-link-container">
            <CopyLinkIcon />
            {`  `}Copy link
          </div>
        </div>
        <div className="reply-button-row">
          {/* Reply Button */}
          <button>Read 5 replies</button>
        </div>
      </div>
    </StyledCard>
  )
}