const calculateTaxes = require('./calculateTaxes');
const round = require('./round');
const Receipt = require('./Receipt');
const ReceiptLine = require('./ReceiptLine');

/**
 * Calculate the receipt of a purchase
 * @param {Item[]} items - Items to be purchased
 * @returns {Receipt} receipt - Receipt of the purchase
 */
function calculateReceipt(items) {
  const receipt = new Receipt();
  items.reduce((acc, item) => {
    const itemTaxes = calculateTaxes(item);
    const priceWithTaxes = round(item.price + itemTaxes, 0.01);
    acc.lines.push(new ReceiptLine(
      item.name,
      item.quantity,
      priceWithTaxes,
    ));
    acc.taxes = round(acc.taxes + itemTaxes, 0.01);
    acc.total = round(acc.total + item.price + itemTaxes, 0.01);
    return acc;
  }, receipt);

  return receipt;
}

module.exports = calculateReceipt;
