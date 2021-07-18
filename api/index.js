const dynamodb = require('@aws-sdk/client-dynamodb')
const { connection } = require('../infra')

module.exports = async (req, res) => {
  const params = {
    TableName: 'User',
    KeySchema: [
      {
        AttributeName: 'id',
        KeyType: 'HASH',
      },
    ],
    AttributeDefinitions: [
      {
        AttributeName: 'id',
        AttributeType: 'N',
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
    },
  }

  await connection.send(new dynamodb.CreateTableCommand(params))

  return res.status(200).json({ message: 'Welcome to POC API v2' })
}
