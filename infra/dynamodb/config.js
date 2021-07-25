require('dotenv').config()

const {
  ListTablesCommand,
  CreateTableCommand,
} = require('@aws-sdk/client-dynamodb')

const { connection } = require('./connection')

const initialSetup = async () => {
  const { TableNames: tables } = await connection.send(
    new ListTablesCommand({})
  )

  if (tables.length) {
    return
  }

  const params = {
    TableName: 'UserService',
    KeySchema: [
      {
        AttributeName: 'id',
        KeyType: 'HASH',
      },
    ],
    AttributeDefinitions: [
      {
        AttributeName: 'id',
        AttributeType: 'S',
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
    },
  }

  await connection.send(new CreateTableCommand(params))
}

initialSetup()
