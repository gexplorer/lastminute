const ItemCategory = require('./ItemCategory');
const round = require('./round');

/**
 * Calculate taxes
 * @param {import('./Item')} item - Item to calculate the taxes
 * @returns {number}
 */
function calculateTaxes(item) {
  let taxes = 0;
  if (item.category === ItemCategory.other) {
    taxes += item.price * 0.1;
  }
  if (item.imported) {
    taxes += item.price * 0.05;
  }
  return round(taxes, 0.05, true);
}

module.exports = calculateTaxes;
