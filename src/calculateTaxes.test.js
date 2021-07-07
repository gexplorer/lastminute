const Item = require('./Item');
const ItemCategory = require('./ItemCategory');
const calculateTaxes = require('./calculateTaxes');

describe('calculateTaxes', () => {
  let category;
  let price;

  describe('books', () => {
    beforeEach(() => {
      category = ItemCategory.book;
      price = 11.25;
    });

    test('when local taxes should be 0%', () => {
      const result = calculateTaxes(new Item('item', 1, price, category));
      expect(result).toBe(0);
    });

    test('when imported taxes should be 5%', () => {
      const result = calculateTaxes(new Item('item', 1, price, category, true));
      expect(result).toBe(0.6);
    });
  });

  describe('food', () => {
    beforeEach(() => {
      category = ItemCategory.food;
      price = 11.25;
    });

    test('when local taxes should be 0%', () => {
      const result = calculateTaxes(new Item('item', 1, price, category));
      expect(result).toBe(0);
    });

    test('when imported taxes should be 5%', () => {
      const result = calculateTaxes(new Item('item', 1, price, category, true));
      expect(result).toBe(0.6);
    });
  });

  describe('medical supplies', () => {
    beforeEach(() => {
      category = ItemCategory.medical;
      price = 11.25;
    });

    test('when local taxes should be 0%', () => {
      const result = calculateTaxes(new Item('item', 1, price, category));
      expect(result).toBe(0);
    });

    test('when imported taxes should be 5%', () => {
      const result = calculateTaxes(new Item('item', 1, price, category, true));
      expect(result).toBe(0.6);
    });
  });

  describe('other items', () => {
    beforeEach(() => {
      category = ItemCategory.other;
      price = 27.99;
    });

    test('when local taxes should be 10%', () => {
      const result = calculateTaxes(new Item('item', 1, price, category));
      expect(result).toBe(2.8);
    });

    test('when imported taxes should be 15%', () => {
      const result = calculateTaxes(new Item('item', 1, price, category, true));
      expect(result).toBe(4.2);
    });
  });
});
