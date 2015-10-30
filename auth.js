// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1665068047108024', // your App ID
        'clientSecret'  : '3f3810253a817371eeeea9b54dcd7262', // your App Secret
        'callbackURL'   : 'http://node-js-135612.nitrousapp.com:3000/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://node-js-135612.nitrousapp.com:3000/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://node-js-135612.nitrousapp.com:3000/auth/google/callback'
    }

};
