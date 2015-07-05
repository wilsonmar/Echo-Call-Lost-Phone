var http = require('http');

/**
 * App ID for the skill
 */
var APP_ID = undefined; //replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');
   
var CallMe = function () {
    AlexaSkill.call(this, APP_ID);
};


// Extend AlexaSkill
CallMe.prototype = Object.create(AlexaSkill.prototype);
CallMe.prototype.constructor = CallMe;



CallMe.prototype.intentHandlers = {
        CallIntent: function (intent, session, response) {
        
        //No matter what she wants to tell you her opinion.
        
        function satisfyAlexa() {
                        response.tell("");
                        };
                        
        switch(intent.slots.Control.value) {
                
                case "Name":
                        
                        var post_data = 'call%5Bnumber%5D=###-###-####&call%5Bnum_retries%5D=0&call%5Bcall_now%5D=true&call%5Blocal_time_string%5D=&call%5Btime_zone%5D=Mountain+Time+%28US+%26+Canada%29&commit=I+accept.++Call+me.';

                        var options = {
                                host: '70.87.222.146',
                                port: 80,
                                path: '/trial',
                                method: 'POST',
                                headers: {
							          'Content-Type': 'application/x-www-form-urlencoded',
							          'Content-Length': post_data.length
							      }

                             };
                        
                        callback = function(response) {
						  var str = ''
						  response.on('data', function (chunk) {
						    str += chunk;
						    satisfyAlexa();
						  });

						  response.on('end', function () {
						    console.log(str);
						  });
						}

            
                        var req = http.request(options, callback);
                        req.write(post_data);
                        req.end();
                break;
                
                default:
                        response.tell("I didn't hear a person to call.");
                break;       
                
        }  
        }
}

exports.handler = function (event, context) {
       
        var callMe = new CallMe();
        callMe.execute(event, context);
        
};