import styled from "styled-components";
import TweetCard from "./TweetCard";

const StyledSection = styled.section`
  h2 {
    font-size: 2rem;
    text-align: center;
    padding-bottom: 36px;
  }
  padding-bottom: 64px;
  @media only screen and (min-width: 768px) {
    padding-bottom: 128px;
  }
`;

export default function TwitterFeedSection({ tweets }) {
  return (
    <StyledSection>
      <h2>View My Recent Tweets</h2>
      <div className="tweet-container">
        {tweets.map((tweet) => (
          <TweetCard key={tweet.id} {...tweet} />
        ))}
      </div>
    </StyledSection>
  );
}
