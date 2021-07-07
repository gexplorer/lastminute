/** Class representing an item. */
class Item {
  /**
   * @constructor
   * @param {string} name - Name of the item
   * @param {number} quantity - Quantity of the item
   * @param {number} price - Price of the item
   * @param {import('./ItemCategory')} category - Category of the item
   * @param {boolean?} imported - True if the item is imported
   */
  constructor(
    name,
    quantity,
    price,
    category,
    imported = false,
  ) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.category = category;
    this.imported = imported;
  }
}

module.exports = Item;
