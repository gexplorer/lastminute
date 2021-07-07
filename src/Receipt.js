/** Class representing a receipt. */
class Receipt {
  constructor() {
    /** @type {import('./ReceiptLine')[]} */
    this.lines = [];
    this.taxes = 0;
    this.total = 0;
  }
}

module.exports = Receipt;
