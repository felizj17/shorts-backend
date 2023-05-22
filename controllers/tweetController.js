const express = require('express')
const tweets = express.Router()
const {getAllTweets, getOneTweet, tweet, editTweet, deleteTweet} =require('../queries/tweets')

tweets.get('/', async(req,res)=>{
    const allTweets = await getAllTweets()
    if(!allTweets.error){
        res.status(202).json(allTweets)
    }else{
        res.status(404).json({error:allTweets.error})
    }
})
tweets.get('/:id', async(req,res)=>{
    const oneTweet = await getOneTweet(req.params.id)
    console.log(oneTweet)
    if(!oneTweet.error){
        res.status(202).json(oneTweet)
    }else {
        res.status(404).json({error:oneTweet.error})
    }
})
tweets.post('/', async (req,res)=>{
    const aTweet = await tweet(req.body)
    if(!tweet.error){
        res.status(202).json(aTweet)
    }else{
        res.status(404).json({error:aTweet.error})
    }
})

tweets.put('/:id', async(req, res)=>{
    const editedTweet = await editTweet(req.params.id, req.body)
    if(!editedTweet.error){
        res.status(202).json(editedTweet)
    }else{
        res.status(404).json({error:editedTweet.error})
    }
})
tweets.delete('/:id', async (req,res)=>{
    const deletedTweet = await deleteTweet(req.params.id)
    if(!deletedTweet.error){
        res.status(202).json(deletedTweet)
    }else{
        res.status(404).json({error:deletedTweet.error})
    }
})

module.exports = tweets