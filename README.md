# Echo-Call-Lost-Phone
Use Amazon Echo to call your lost phone.

## Setup

Refer to https://developer.amazon.com/appsandservices/solutions/alexa/alexa-skills-kit/docs/developing-an-alexa-skill-as-a-lambda-function for more detailed information.

1. In index.js on line 37 replace "Name" with your name.
2. In index.js on line 37 replace ###-###-#### in var post_data with your phone number.
3. Compress index.js and AlexaSkill.js into a ZIP archive and upload to AWS Lambda.
4. Save and Invoke using the following:
```
{
  "version": "1.0",
  "session": {
    "new": false,
    "application": {
      "applicationId": "amzn1.echo-sdk-ams.app.[unique-value-here]"
    },
    "sessionId": "session1234",
    "attributes": {},
    "user": {
      "userId": null
    }
  },
  "request": {
    "type": "IntentRequest",
    "requestId": "request5678",
    "intent": {
      "name": "CallIntent",
      "slots": {
        "Control": {
          "name": "Control",
          "value": "Name"
        }
      }
    }
  }
}
```
4. In SampleUtterances.txt replace "Name" with your name.
5. Set up new Alexa Skill on https://developer.amazon.com/edw/home.html#/ and utilize intentSchema.json and SampleUtterances.txt to help let Alexa know what she should be listening for.
6. Save everything and tell Alexa to do something on your Roku.

######Sample Statements
* Alexa, tell phone to call Jack.
* Alexa, tell phone to call Amy.
