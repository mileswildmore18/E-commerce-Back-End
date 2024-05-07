const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // finds all categories include its associated Products
  Category.findAll().then((Products) => {
    res.json(Products);
  });
});

// finds one category by its `id` value including its associated Products
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
  }
  ).then((Products) => {
    res.json(Products);
  })

});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // deletes a category by its `id` value
  Category.destroy ({
    where :{
    id: req.params.id,
    },
  })
  .then((deletedCategory) => {
    res.json(deletedCategory);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
