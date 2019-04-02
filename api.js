const passport = require('passport');

const {
    CreateUser,
    LoginUser,
    GetUserDetails,
    GetUsersList
} = require('./controllers/auth');

const {
    FollowUser,
    CreateTweet,
    DeleteTweet,
    FetchUserTweets
} = require('./controllers/user');

require('./middleware/passport')(passport);

module.exports = router => {
    router.post('/signup', CreateUser);

    router.post('/login', LoginUser);

    router.get('/me', passport.authenticate('jwt', {
        session: false
    }), GetUserDetails);

    router.get('/follow/:id', passport.authenticate('jwt', {
        session: false
    }), FollowUser);

    router.post('/tweet', passport.authenticate('jwt', {
        session: false
    }), CreateTweet);

    router.delete('/tweet/:id', passport.authenticate('jwt', {
        session: false
    }), DeleteTweet);

    router.get('/tweets', passport.authenticate('jwt', {
        session: false
    }), FetchUserTweets);

    router.get('/users', GetUsersList);
}
