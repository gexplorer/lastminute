const printReceipt = require('./printReceipt');
const Item = require('./Item');
const ItemCategory = require('./ItemCategory');

const loggerMock = jest.spyOn(global.console, 'log').mockImplementation();

describe('printReceipt', () => {
  let items;

  beforeEach(() => {
    loggerMock.mockClear();
  });

  describe('example1', () => {
    test('should print the receipt correctly formatted', () => {
      items = [
        new Item('book', 1, 12.49, ItemCategory.book),
        new Item('music CD', 1, 14.99, ItemCategory.other),
        new Item('chocolate bar', 1, 0.85, ItemCategory.food),
      ];

      printReceipt(items);
      expect(loggerMock).toBeCalledWith(`1 book: 12.49
1 music CD: 16.49
1 chocolate bar: 0.85
Sales Taxes: 1.50
Total: 29.83`);
    });
  });

  describe('example2', () => {
    test('should print the receipt correctly formatted', () => {
      items = [
        new Item('imported box of chocolates', 1, 10, ItemCategory.food, true),
        new Item('imported bottle of perfume', 1, 47.5, ItemCategory.other, true),
      ];

      printReceipt(items);
      expect(loggerMock).toBeCalledWith(`1 imported box of chocolates: 10.50
1 imported bottle of perfume: 54.65
Sales Taxes: 7.65
Total: 65.15`);
    });
  });

  describe('example3', () => {
    test('should print the receipt correctly formatted', () => {
      items = [
        new Item('imported box of chocolates', 1, 27.99, ItemCategory.other, true),
        new Item('bottle of perfume', 1, 18.99, ItemCategory.other),
        new Item('packet of headache pills', 1, 9.75, ItemCategory.medical),
        new Item('imported box of chocolates', 1, 11.25, ItemCategory.food, true),
      ];

      printReceipt(items);
      expect(loggerMock).toBeCalledWith(`1 imported box of chocolates: 32.19
1 bottle of perfume: 20.89
1 packet of headache pills: 9.75
1 imported box of chocolates: 11.85
Sales Taxes: 6.70
Total: 74.68`);
    });
  });
});
