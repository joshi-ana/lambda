/**
 * A Lambda function that returns a string.
 */

'use strict';

module.exports.helloFromLambdaHandler = async event => {
  return {
    statusCode: 200,
    headers: {
        "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(
      {
        message: 'OK',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
