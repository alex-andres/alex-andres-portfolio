import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import styled from "styled-components";
import headshot from "../public/images/hero/square-portrait.jpg";
import TwitterCardIcon from "./icons/TwitterCardIcon";
import costaRica from "../public/images/costa-rica-alex.jpg";
import InfoIcon from "./icons/InfoIcon";
import LikeIcon from "./icons/LikeIcon";
import ReplyIcon from "./icons/ReplyIcon";
import CopyLinkIcon from "./icons/CopyLinkIcon";
import RetweetIcon from "./icons/RetweetIcon";
import { useState, useEffect } from "react";

const StyledCard = styled.article`
  width: 100%;
  max-width: 550px;
  border: 1px solid hsl(201,17%,84%);
  border-radius: 10px;
  padding: 16px;
  background-color: var(--color-background);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  margin-bottom: 16px;
  &:hover{
    background-color: hsl(180deg 14% 97%);
  }
  a, a:visited{
        color: hsl(206, 15%, 38%);
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
    display: grid;
    > span{
      grid-area: 1/1;
    }
    img{
      border-radius: 50%;
    }
    .overlay{
      grid-area: 1/1;
      position: relative;
      height: 48px;
      width: 100%;
      border-radius: 50%;
      
    }
    &:hover{
      .overlay{
        background-color: hsla(0,0%,10%, .15);
      }
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
    padding-bottom: 0;
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
    height: 200px;
    /* display: flex;
    align-items: stretch; */
    &:hover{
        background-color: hsla(0deg, 0%, 0%, .03);;
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
    margin-top: 2px;
  }
  .time-date-wrapper{
    display: flex;
    padding: 6px;
    &:hover{
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .info-button-container{
    height: 32px;
    width: 32px;
    padding: 6px;
    &:hover{
      background-color: rgba(29, 155, 240, .1);
      border-radius: 50%;
      .info-icon{
        color: hsl(204,88%,53%);
      }
    }
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
    }
  }
  .icon-container{
    height: 32px;
    margin-right: 32px;
    display: flex;
    align-items: center;
  }
  .like-container{
    .icon-wrapper{
        display: grid;
        place-items: center;
        height: 32px;
        width: 32px;
        padding: 6px;
      }
    &:hover{
      text-decoration: underline;
      color: hsl(356, 91%, 54%);
      .icon-wrapper{
        background-color: hsla(356, 91%, 54%, .1);
        border-radius: 50%;
      }
      .like-icon{
        border-radius: 50%;
        color: hsl(356, 91%, 54%);
      }
    }
  }
  .retweet-container{
    .icon-wrapper{
        display: grid;
        place-items: center;
        height: 32px;
        width: 32px;
        padding: 6px;
      }
    &:hover{
      text-decoration: underline;
      color: hsl(204,88%,53%);
      .icon-wrapper{
        background-color: rgba(29, 155, 240, .1);
        border-radius: 50%;
      }
      .retweet-icon{
        border-radius: 50%;
        color: hsl(204,88%,53%);
      }
    }
  }
  .reply-container{
    .icon-wrapper{
        display: grid;
        place-items: center;
        height: 32px;
        width: 32px;
        padding: 6px;
      }
    &:hover{
      text-decoration: underline;
      color: hsl(160, 100%, 36%);
      .icon-wrapper{
        background-color: hsla(160, 100%, 36%, .1);
        border-radius: 50%;
      }
      .reply-icon{
        border-radius: 50%;
        color: hsl(160, 100%, 36%);
      }
    }
  }
  .copy-link-container{
    .icon-wrapper{
        display: grid;
        place-items: center;
        height: 32px;
        width: 32px;
        padding: 6px;
      }
    &:hover, &.copied{
      text-decoration: underline;
      color: hsl(255, 100%, 50%);
      .icon-wrapper{
        background-color: hsla(255, 100%, 50%, .1);
        border-radius: 50%;
      }
      .copy-link-icon{
        border-radius: 50%;
        color: hsl(255, 100%, 50%);
      }
    }
    &.copied{
      font-weight: 700;
    }
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
      &:hover{
        background-color: rgba(29, 155, 240, .1);
      }
    }
  }
`;

export default function TweetCard({
  author,
  media,
  public_metrics,
  referenced_tweets,
  text,
  created_at,
  id,
}) {
  const tweetURL = `https://twitter.com/al_codes/status/${id}`;
  const authorName = author.name;
  const authorUserName = author.username;
  const authorURL = `https://twitter.com/${authorUserName}/`;
  const authorProfilePic = author.profile_image_url;
  const dateString = new Date(created_at);
  const usDate = new Intl.DateTimeFormat("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(dateString);
  const time = new Intl.DateTimeFormat("en-us", {
    timeStyle: "short",
    timeZone: "America/Los_Angeles",
  }).format(dateString);
  const likes = public_metrics.like_count;
  const replies = public_metrics.reply_count;
  const retweets = public_metrics.retweet_count;

  if (media.length > 0) {
    media = media[0];
  }
  const mediaURL = media.url;
  const width = media.width;
  const height = media.height;
  const [copied, setCopied] = useState(false);

  function copyToClipboard() {
    navigator.clipboard.writeText(tweetURL);
    setCopied(true);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [copied, setCopied]);

  return (
    <StyledCard>
      <div className="card-content">
        <div className="top-row">
          {/*Prophile  Photo */}
          <a href={authorURL} title={`View ${authorName}' Profile`}>
            <div className="image-title-container">
              <div className="profile-picture-wrapper">
                <Image
                  className="profile-picture"
                  src={authorProfilePic}
                  width={48}
                  height={48}
                  alt="Twitter Profile Picture"
                />
                <div className="overlay" />
              </div>
              <div className="title-handle-container">
                <h2>
                  {/* Twitter Full Name */}
                  {authorName}
                </h2>
                <p>
                  {/* Twitter Handle */}
                  {authorUserName}
                </p>
              </div>
            </div>
          </a>
          {/* Twitter Branding - blue hsl(204,87%,52%) */}
          <a href={tweetURL} title="View Tweet on Twitter">
            <TwitterCardIcon className="twitter-card-icon" />
          </a>
        </div>
        {/* Tweet Body */}
        <a href={tweetURL} title="View Tweet on Twitter">
          <p className="twitter-body">{text}</p>
        </a>
        {/* Tweet Embed */}
        {media.length > 0 && (
          <a
            href={`${tweetURL}/photo/1`}
            aria-label="Embedded media link"
            title="media link"
            className="embed-link"
          >
            <div className="embedded-media-container">
              <Image
                src={mediaURL}
                width={width}
                height={height}
                alt="Tweet Photo"
              />
            </div>
          </a>
        )}
        <div className="info-row">
          {/* Tweet Time */}
          <div className="time-date-wrapper">{`${time} · ${usDate}`}</div>
          {/* Twitter Info Button */}
          <div className="info-button-container">
            <a
              href="https://help.twitter.com/en/twitter-for-websites-ads-info-and-privacy"
              aria-label="Twitter Ads info and privacy"
              title="Twitter Ads info and privacy"
              className="info-link"
            >
              <InfoIcon className="info-icon" />
            </a>
          </div>
        </div>
        <div className="tweet-interaction-row">
          <a
            href={`https://twitter.com/intent/like?tweet_id=${id}`}
            title="Like this Tweet"
            aria-label="Like this Tweet"
          >
            <div className="icon-container like-container">
              <div className="icon-wrapper">
                <LikeIcon />
              </div>
              {`  `}
              {likes}
            </div>
          </a>
          <a
            href={`https://twitter.com/intent/retweet?tweet_id=${id}`}
            title="Retweet this Tweet"
            aria-label="Retweet this Tweet"
          >
            <div className="icon-container retweet-container">
              <div className="icon-wrapper">
                <RetweetIcon />
              </div>
              {`  `}
              {retweets}
            </div>
          </a>
          <a
            href={`https://twitter.com/intent/tweet?in_reply_to=${id}`}
            title="Reply to this Tweet"
            aria-label="Reply to this Tweet"
          >
            <div className="icon-container reply-container">
              <div className="icon-wrapper">
                <ReplyIcon className="reply-icon" />
              </div>
              {`  `}
              {replies}
            </div>
          </a>
          <div
            className={
              copied
                ? "icon-container copy-link-container copied"
                : "icon-container copy-link-container"
            }
            onClick={copyToClipboard}
          >
            <div className="icon-wrapper">
              <CopyLinkIcon />
            </div>
            {`  `}
            {copied ? "Copied!" : "Copy link"}
          </div>
        </div>
        {replies > 0 && (
          <div className="reply-button-row">
            <button>Read {replies} replies</button>
          </div>
        )}
      </div>
    </StyledCard>
  );
}
