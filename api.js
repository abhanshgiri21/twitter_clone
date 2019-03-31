const passport = require('passport');

const {
    CreateUser,
    LoginUser
} = require('./controllers/auth');

require('./middleware/passport')(passport);

module.exports = router => {
    router.post('/signup', CreateUser);

    router.post('/login', LoginUser);
}
