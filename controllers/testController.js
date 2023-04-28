const terrain = (req, res, next) => {
  const numVariable = req.query.number
  console.log(req.query)
  res.status(200).send(`All checks ${numVariable}`)
}

module.exports = {
  terrain,
}
