const { Category } = require('../models');

//stores data of all the categories based on names
const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];
//creates the categories in a data
const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
