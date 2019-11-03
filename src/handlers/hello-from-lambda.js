/**
 * A Lambda function that returns a string.
 */
exports.helloFromLambdaHandler = async () => {
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
};

