const { PutItemCommand } = require('@aws-sdk/client-dynamodb')
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { connection } = require('../../infra/index')

export const signUp = async (req, res) => {
  const body = req.body

  try {
    const hashPassword = bcrypt.hashSync(body.password, 10)

    const user = {
      id: uuidv4(),
      name: req.body.name,
      email: req.body.email,
    }

    await connection.send(
      new PutItemCommand({
        TableName: 'UserService',
        Item: {
          id: { S: user.id },
          name: { S: user.name },
          email: { S: user.email },
          password: { S: hashPassword },
        },
      })
    )

    const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET)

    return res.status(200).json({
      data: {
        user,
        token,
      },
    })
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}
