const calculateReceipt = require('./calculateReceipt');

/**
 * Print the receipt of a purchase
 * @param {Item[]} items - Items to be purchased
 */
function printReceipt(items) {
  const receipt = calculateReceipt(items);
  let output = '';
  receipt.lines.forEach((line) => {
    output += `${line.quantity} ${line.name}: ${line.price.toFixed(2)}\n`;
  });
  output += `Sales Taxes: ${receipt.taxes.toFixed(2)}\n`;
  output += `Total: ${receipt.total.toFixed(2)}`;
  console.log(output);
}

module.exports = printReceipt;
