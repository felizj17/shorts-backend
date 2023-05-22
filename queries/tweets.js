const db = require('../db/dbConfig');

const getAllTweets = async (user_id) => {
  const allTweets = await db.any('SELECT * FROM tweets WHERE user_id=$1', user_id);
  if (allTweets[0].user_id) {
    return allTweets;
  } else {
    return { error: 'Server Error, tweets not loading right now. Please try again later.' };
  }
};
const getOneTweet = async id => {
  const tweet = await db.one('SELECT * FROM tweets WHERE id=$1', id);
  console.log(tweet);
  if (tweet.user_id) {
    return tweet;
  } else {
    return { error: 'Server Error, failed to retrieve tweet.' };
  }
};
const tweet = async body => {
  const newTweet = await db.one(
    'INSERT INTO tweets (title,read_time, body, user_id) VALUES ($1,$2,$3,$4) RETURNING *',
    [body.title, body.read_time, body.body, body.user_id]
  );
  if(newTweet.user_id){
      return newTweet
  }else{
    return {error:'Server Error: Tweet unsuccessful. Please try again.'}
  }
};
const editTweet = async (id, body) => {
  const editedTweet = await db.one("UPDATE tweets SET title=$1, read_time=$2, body=$3, user_id=$4, edited_at=NOW() WHERE id=$5 RETURNING *", [body.title, body.read_time, body.body, body.user_id, id])
  console.log(editedTweet)
  if(editedTweet.user_id){
    return editedTweet
  }else{
    return {error:'Server Error: Tweet update unsuccessful, Please try again.'}
  }
};
const deleteTweet = async (id) => {
    const deletedTweet = await db.one("DELETE FROM tweets WHERE id=$1 RETURNING *", id)
    console.log(deletedTweet)
    if(deletedTweet.user_id){
        return deletedTweet
    }else{
        return {error:'Server Error: Tweet delete unsuccessful, Please try again.'}
    }
};
module.exports = {
  getAllTweets,
  getOneTweet,
  tweet,
  editTweet,
  deleteTweet,
};
