const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/index').User;

passport.use(new LocalStrategy({}, 
    async function(username, password, done) {
        try {
            const user = await User.findOne({ where: { username } });
            if (!user) {
                return done(null, false, {});
            }
            if (!user.validatePassword(password)) {
                return done(null, false, {});            
            }

            return done(null, user);
        } catch (err) {
            console.log('ERROR', err);
        }
    }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(async function (user, done) {
    try {
        const userDB = await User.findById(user.id);
        if (!userDB) {
            return done(new Error('Invalid user'));
        }
        return done(null, userDB);
    } catch (err) {
        console.log("ERROR", err);
    }
});

module.exports = passport;