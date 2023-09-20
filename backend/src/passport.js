const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require('passport-local').Strategy;
const passport = require("passport");
const User = require("./models/user");

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			callbackURL: "/auth/google/callback",
			scope: ["profile", "email"]
		},
		async function (accessToken, refreshToken, profile, callback) {
			try{


				const {name,email,picture,sub}=profile['_json']
				const provider=profile.provider
				let user=await User.findOne({subject:sub})
				console.log("found",user)
				if(!user){
					user=new User({
						name,
						email,
						profileUrl:picture,
						subject:sub
					})
					console.log("hello:",user)
					// await user.save()
				}
				callback(null, user);
			}catch(e){
				callback(e)
			}
            
		}
	)
);
const credentials={
	usernameField:"email",
	passwordField:"password"
}
const strategy2=new LocalStrategy( async function verify(email, password, cb) {
	console.log("hello",email,password)
	try{
		const user=await User.findByCredentials(email,password)
		console.log(user)
		cb(null,user)
	}catch(e){
		
		cb(e)
	}
    
   
  })
passport.use(strategy2);
passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});