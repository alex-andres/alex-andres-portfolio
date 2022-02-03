import querystring from "querystring";

export const getTweets = async () => {
  //defining the query parameters and making them a string using node querystring
  const queryParams = querystring.stringify({
    expansions:
      "author_id,attachments.media_keys,referenced_tweets.id.author_id",
    "tweet.fields":
      "attachments,author_id,public_metrics,created_at,id,in_reply_to_user_id,referenced_tweets,text",
    "user.fields": "id,name,profile_image_url,protected,url,username,verified",
    "media.fields":
      "duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics",
    max_results: "10",
  });

  //making a call to the the twitter api with auth via a bearer token associated with my twitter dev account
  const response = await fetch(
    `https://api.twitter.com/2/users/1483859507746775040/tweets?${queryParams}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
      },
    }
  );

  //storing the result of the response in a variable called tweets
  const tweets = await response.json();
  const getAuthorInfo = (author_id) => {
    return tweets.includes.users.find((user) => user.id === author_id);
  };

  const getReferencedTweets = (mainTweet) => {
    return (
      mainTweet?.referenced_tweets?.map((referencedTweet) => {
        const fullReferencedTweet = tweets.includes.tweets.find(
          (tweet) => tweet.id === referencedTweet.id
        );

        return {
          type: referencedTweet.type,
          author: getAuthorInfo(fullReferencedTweet.author_id),
          ...fullReferencedTweet,
        };
      }) || []
    );
  };

  return tweets.data.reduce((allTweets, tweet) => {
    const tweetWithAuthor = {
      ...tweet,
      media:
        tweet?.attachments?.media_keys.map((key) =>
          tweets.includes.media.find((media) => media.media_key === key)
        ) || [],
      referenced_tweets: getReferencedTweets(tweet),
      author: getAuthorInfo(tweet.author_id),
    };

    return [...allTweets, tweetWithAuthor];
  }, []);
};
