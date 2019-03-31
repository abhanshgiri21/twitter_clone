const passport = require('passport');

const {
    CreateUser,
    LoginUser,
    GetUserDetails
} = require('./controllers/auth');

require('./middleware/passport')(passport);

module.exports = router => {
    router.post('/signup', CreateUser);

    router.post('/login', LoginUser);

    router.get('/me', passport.authenticate('jwt', {
        session: false
    }), GetUserDetails);
}
