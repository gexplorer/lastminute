/** Class representing a receipt line. */
class ReceiptLine {
  /**
   * @constructor
   * @param {string} name - Name of the item
   * @param {number} quantity - Quantity of the item
   * @param {number} price - Price of the item
   */
  constructor(
    name,
    quantity,
    price,
  ) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }
}

module.exports = ReceiptLine;
