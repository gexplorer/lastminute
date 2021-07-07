/**
 * Round number to the nearest precision
 * @param {number} number - Number to round
 * @param {number} precission - Precission for the rounding
 * @param {boolean} ceil - True if rounding to ceil
 * @returns {number}
 */
function round(number, precission, ceil) {
  const factor = 1 / precission;
  const roundingFunction = ceil ? Math.ceil : Math.round;
  const result = (roundingFunction(number * factor) / factor);
  return result;
}

module.exports = round;
