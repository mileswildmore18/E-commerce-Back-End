const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // finds all tags including its associated Product
  Tag.findAll().then((Product) => {
    res.json(Product);
  });
});

// finds one tag by its `id` value including its associated Product data
router.get('/:id', (req, res) => {

  Tag.findOne({
    where: {
      id: req.params.id
    },
  }
  ).then((Product) => {
    res.json(Product);
  })
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
