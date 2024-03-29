const mongoose=require('mongoose');

const tweetSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    userEmail:{
        type:String
    },
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }

    ]
},{timestamps:true});
tweetSchema.virtual('contentWithEmail').get(function (){
    return `${this.content}\ncreated by ${this.userEmail}`;
})
//Tweet will be model and it will follow the schema of tweetSchema
const Tweet=mongoose.model('Tweet',tweetSchema);
module.exports=Tweet;