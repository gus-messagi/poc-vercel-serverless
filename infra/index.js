const { DynamoDBClient } = require('@aws-sdk/client-dynamodb')

export const connection = new DynamoDBClient({
  region: process.env.DYNAMODB_REGION,
  endpoint: process.env.DYNAMODB_ENDPOINT,
})
