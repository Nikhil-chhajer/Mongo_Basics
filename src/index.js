const express=require('express');
const connect=require('./config/database');
const Tweet=require('./models/tweet');
const app=express();
const Comment =require('./models/commnet');
const TweetRepository=require('./repository/tweet-repository');
app.listen(3000,async()=>{
    console.log(`server started`);
    await connect();
    console.log("MongoDB connected");

    // const tweet=await Tweet.create({
    //     content:'first tweet ',
    //     userEmail: 'a@b.com'
    // });
    // const tweet2=await Tweet.create({
    //     content:'this is my second tweet'
    // })
   //const tweets=await Tweet.find({userEmail:'a@b.com'});
    //const tweet=await Tweet.findById();





     const tweetRepo=new TweetRepository();
    // const tweet=await tweetRepo.create({
    //     content:'tweet with comment Schema'
    // });
    // console.log(tweet);
    // const comment=await Comment.create({
    //     content:'tweet with comment'
    // });
    // tweet.comments.push(comment);
    // await tweet.save();

    // const tweet=await tweetRepo.getWithComments('65997b8cc24a031d1eecfc44');

    const tweet=await tweetRepo.getAll(2,4);
    console.log(tweet[0].contentWithEmail);
})