const Product = require('../models/product');
const router = require('express').Router();

//CREATE

router.post('/', async (req, res) => {
  try {
    const createdProduct = await Product.create(req.body)
    res.status(200).json(createdProduct)
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error.message })
  }
})

//READ
  //INDEX

  router.get('/', async (req, res) => {
    try {
      const allProducts = await Product.find({})
      res.status(200).json(allProducts)
    } catch (error) {
      console.log(error)
      res.status(400).json({ message: error.message })
    }
  })

  //SHOW

  router.get('/:id', async (req, res) => {
    try {
      const oneProduct = await Product.findById(req.params.id)
      res.status(200).json(oneProduct)
    } catch (error) {
      console.log(error)
      res.status(400).json({ message: error.message })
    }
  })

//UPDATE

router.put('/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true})
    res.status(200).json(updatedProduct)
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error.message })
  }
})

//DELETE

router.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedProduct)
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error.message })
  }
})

module.exports = router;
