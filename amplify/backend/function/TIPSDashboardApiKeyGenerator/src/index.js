const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
const apigatewaymanagementapi = new AWS.ApiGatewayManagementApi({endpoint:"gvooly8690.execute-api.us-west-2.amazonaws.com/prod",region:"us-west-2"});

const pushResponse = async (connectionId, response) => {
    const response2 = await apigatewaymanagementapi.postToConnection({
        ConnectionId: connectionId,
        Data: JSON.stringify(response)
    }).promise();
    
    console.log(response2)
    
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    }
}

exports.handler = async (event) => {
  const { connectionId } = event.requestContext;
  const { key } = JSON.parse(event.body);

  const result = await docClient.get({
    TableName: 'ApiKeys',
    Key: {
      "id": key
    }
  }).promise();

  if (!result || !result.Item) return {
    statusCode: 401,
  }

  await docClient.update({
    TableName: 'Connections',
    Key: {
      "id": connectionId,
    },
    UpdateExpression: "set #a = :b",
    ExpressionAttributeNames: {'#a' : 'authorized'},
    ExpressionAttributeValues: {
      ':b' : true
    }
  }).promise();

  return await pushResponse(connectionId, {
    statusCode: 200,
    body: {
      authorized: true
    }
  })
};