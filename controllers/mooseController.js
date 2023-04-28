const moose = (req, res, next) => {
    
    console.log(req.query)
    res.status(200).send(`MOOOSE ON THE LOOSE!`)
  }
  
  module.exports = {
    moose,
  }