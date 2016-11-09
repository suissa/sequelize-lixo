

module.exports = (Model) => {
// console.log('Model', Model)
const findAll = (req, res, next) => Model.find()
  .then((data) => {
  res.json(data)
})
const findById = (req, res, next) => Model.findById()
  .then((data) => {
  res.json(data)
})
const create = (req, res, next) => Model.create(req.body)
  .then((data) => {
  res.json(data)
})


  return {findAll,
      findById,
      create
    }
}
