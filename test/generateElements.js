/**
 * Returns an array of elements with the specified number of elements.
 * Optionally, the ratio of duplicates can be specified.
 *
 * Example usage:
 * ```js
 * // create 1000 unique elements
 * const allUniques = generateElements(1000);
 *
 * // create 1000 elements with 1% duplicates
 * const sparceDuplicates = generateElements(1000, 0.01);
 *
 * // create 1000 elements with 99% duplicates
 * const frequentDuplicates = generateElements(1000, 0.99);
 * ```
 *
 * @param {number} size the size of the array
 * @param {number?} dupRatio ratio of duplicates
 * @returns {number[]} an array with the specified number of elements
 */
const generateElements = (size, dupRatio) => {
  const elements = new Array(size);

  if (dupRatio) {
    // for very large arrays, its worth skipping modulus math if its not strictly necessary

    const rollover = -(dupRatio * size - size);

    for (let i = 0; i < size; i++) {
      elements[i] = i % rollover;
    }
  } else {
    for (let i = 0; i < size; i++) {
      elements[i] = i;
    }
  }

  return elements;
};

module.exports = generateElements;
