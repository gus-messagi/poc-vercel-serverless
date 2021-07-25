export const signUp = (req, res) => {
  const body = req.body

  console.log(body)
  return res.status(200).json({ message: 'Hello World' })
}
