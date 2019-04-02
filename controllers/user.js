const Follow = require('../models/Follow');
const Tweets = require('../models/Tweet');

const FollowUser = async (req, res) => {
    if (req.params.id == req.user.id) {
        throw badRequestError('You cannot follow yourself');
    }
    let payload = {
        following_user: req.user.id,
        followed_user: req.params.id
    }

    let followUser = await Follow.query().insertAndFetch(payload);
    return createdResponse(res, followUser);
}

const CreateTweet = async (req, res) => {
    let payload = {
        userId: req.user.id,
        tweet: req.body.tweet
    };
    let insertedTweet = await Tweets.query().insertAndFetch(payload);
    return createdResponse(res, insertedTweet);
}

const DeleteTweet = async (req, res) => {
    let id = req.params.id;
    if (await Tweets.query().where('id', id)) {
        let deletedTweet = await Tweets.query().deleteById(id);
        return noContentResponse(res);
    } else {
        throw badRequestError('Tweet does not exist!');
    }
}

const FetchUserTweets = async (req, res) => {
    let user = await Follow.query().select('followed_user').where('following_user', req.user.id);
    let ids = user.map(c => c.followed_user);
    if (ids.length < 1) {
        return okResponse(res, []);
    }
    let tweets = await Tweets.query().whereIn('userId', ids);
    return okResponse(res, tweets);
}

module.exports = {
    FollowUser,
    CreateTweet,
    DeleteTweet,
    FetchUserTweets
}
