const { DynamoDBClient } = require('@aws-sdk/client-dynamodb')

const connection = new DynamoDBClient({
  region: process.env.DYNAMODB_REGION,
  endpoint: process.env.DYNAMODB_ENDPOINT,
})

module.exports = {
  connection,
}
