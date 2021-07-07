const calculateReceipt = require('./calculateReceipt');
const Item = require('./Item');
const ItemCategory = require('./ItemCategory');

describe('calculateReceipt', () => {
  let items;

  describe('example1', () => {
    beforeEach(() => {
      items = [
        new Item('book', 1, 12.49, ItemCategory.book),
        new Item('music CD', 1, 14.99, ItemCategory.other),
        new Item('chocolate bar', 1, 0.85, ItemCategory.food),
      ];
    });

    test('each item should include it\'s taxes', () => {
      const result = calculateReceipt(items);
      expect(result.lines.length).toBe(3);
      expect(result.lines[0].name).toBe(items[0].name);
      expect(result.lines[0].quantity).toBe(items[0].quantity);
      expect(result.lines[0].price).toBe(12.49);
      expect(result.lines[1].name).toBe(items[1].name);
      expect(result.lines[1].quantity).toBe(items[1].quantity);
      expect(result.lines[1].price).toBe(16.49);
      expect(result.lines[2].name).toBe(items[2].name);
      expect(result.lines[2].quantity).toBe(items[2].quantity);
      expect(result.lines[2].price).toBe(0.85);
    });

    test('should accumulate the taxes of all items', () => {
      const result = calculateReceipt(items);
      expect(result.taxes).toBe(1.50);
    });

    test('should accumulate the total of all items plus taxes', () => {
      const result = calculateReceipt(items);
      expect(result.total).toBe(29.83);
    });
  });

  describe('example2', () => {
    beforeEach(() => {
      items = [
        new Item('imported box of chocolates', 1, 10, ItemCategory.food, true),
        new Item('imported bottle of perfume', 1, 47.5, ItemCategory.other, true),
      ];
    });

    test('each item should include it\'s taxes', () => {
      const result = calculateReceipt(items);
      expect(result.lines.length).toBe(2);
      expect(result.lines[0].name).toBe(items[0].name);
      expect(result.lines[0].quantity).toBe(items[0].quantity);
      expect(result.lines[0].price).toBe(10.5);
      expect(result.lines[1].name).toBe(items[1].name);
      expect(result.lines[1].quantity).toBe(items[1].quantity);
      expect(result.lines[1].price).toBe(54.65);
    });

    test('should accumulate the taxes of all items', () => {
      const result = calculateReceipt(items);
      expect(result.taxes).toBe(7.65);
    });

    test('should accumulate the total of all items plus taxes', () => {
      const result = calculateReceipt(items);
      expect(result.total).toBe(65.15);
    });
  });

  describe('example3', () => {
    beforeEach(() => {
      items = [
        new Item('imported box of chocolates', 1, 27.99, ItemCategory.other, true),
        new Item('bottle of perfume', 1, 18.99, ItemCategory.other),
        new Item('packet of headache pills', 1, 9.75, ItemCategory.medical),
        new Item('imported box of chocolates', 1, 11.25, ItemCategory.food, true),
      ];
    });

    test('each item should include it\'s taxes', () => {
      const result = calculateReceipt(items);
      expect(result.lines.length).toBe(4);
      expect(result.lines[0].name).toBe(items[0].name);
      expect(result.lines[0].quantity).toBe(items[0].quantity);
      expect(result.lines[0].price).toBe(32.19);
      expect(result.lines[1].name).toBe(items[1].name);
      expect(result.lines[1].quantity).toBe(items[1].quantity);
      expect(result.lines[1].price).toBe(20.89);
      expect(result.lines[2].name).toBe(items[2].name);
      expect(result.lines[2].quantity).toBe(items[2].quantity);
      expect(result.lines[2].price).toBe(9.75);
      expect(result.lines[3].name).toBe(items[3].name);
      expect(result.lines[3].quantity).toBe(items[3].quantity);
      expect(result.lines[3].price).toBe(11.85);
    });

    test('should accumulate the taxes of all items', () => {
      const result = calculateReceipt(items);
      expect(result.taxes).toBe(6.7);
    });

    test('should accumulate the total of all items plus taxes', () => {
      const result = calculateReceipt(items);
      expect(result.total).toBe(74.68);
    });
  });
});
