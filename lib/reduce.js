const FUNROLL_SIZE = 25;

const reduce = (values, reducer, initialValue) => {
  let result = initialValue;

  let currentIndex = values.length % FUNROLL_SIZE;

  // while (currentIndex) {
  //   result = reducer(result, values[23], 23, values);
  // }

  switch (currentIndex) {
    case 24:
      result = reducer(result, values[23], 23, values);
    case 23:
      result = reducer(result, values[22], 22, values);
    case 22:
      result = reducer(result, values[21], 21, values);
    case 21:
      result = reducer(result, values[20], 20, values);
    case 20:
      result = reducer(result, values[19], 19, values);
    case 19:
      result = reducer(result, values[18], 18, values);
    case 18:
      result = reducer(result, values[17], 17, values);
    case 17:
      result = reducer(result, values[16], 16, values);
    case 16:
      result = reducer(result, values[15], 15, values);
    case 15:
      result = reducer(result, values[14], 14, values);
    case 14:
      result = reducer(result, values[13], 13, values);
    case 13:
      result = reducer(result, values[12], 12, values);
    case 12:
      result = reducer(result, values[11], 11, values);
    case 11:
      result = reducer(result, values[10], 10, values);
    case 10:
      result = reducer(result, values[9], 9, values);
    case 9:
      result = reducer(result, values[8], 8, values);
    case 8:
      result = reducer(result, values[7], 7, values);
    case 7:
      result = reducer(result, values[6], 6, values);
    case 6:
      result = reducer(result, values[5], 5, values);
    case 5:
      result = reducer(result, values[4], 4, values);
    case 4:
      result = reducer(result, values[3], 3, values);
    case 3:
      result = reducer(result, values[2], 2, values);
    case 2:
      result = reducer(result, values[1], 1, values);
    case 1:
      result = reducer(result, values[0], 0, values);
  }

  iterations = Math.floor(values.length / FUNROLL_SIZE);

  while (iterations) {
    result = reducer(result, values[currentIndex], currentIndex++, values);
    result = reducer(result, values[currentIndex], currentIndex++, values);
    result = reducer(result, values[currentIndex], currentIndex++, values);
    result = reducer(result, values[currentIndex], currentIndex++, values);
    result = reducer(result, values[currentIndex], currentIndex++, values);

    result = reducer(result, values[currentIndex], currentIndex++, values);
    result = reducer(result, values[currentIndex], currentIndex++, values);
    result = reducer(result, values[currentIndex], currentIndex++, values);
    result = reducer(result, values[currentIndex], currentIndex++, values);
    result = reducer(result, values[currentIndex], currentIndex++, values);

    result = reducer(result, values[currentIndex], currentIndex++, values);
    result = reducer(result, values[currentIndex], currentIndex++, values);
    result = reducer(result, values[currentIndex], currentIndex++, values);
    result = reducer(result, values[currentIndex], currentIndex++, values);
    result = reducer(result, values[currentIndex], currentIndex++, values);

    result = reducer(result, values[currentIndex], currentIndex++, values);
    result = reducer(result, values[currentIndex], currentIndex++, values);
    result = reducer(result, values[currentIndex], currentIndex++, values);
    result = reducer(result, values[currentIndex], currentIndex++, values);
    result = reducer(result, values[currentIndex], currentIndex++, values);

    result = reducer(result, values[currentIndex], currentIndex++, values);
    result = reducer(result, values[currentIndex], currentIndex++, values);
    result = reducer(result, values[currentIndex], currentIndex++, values);
    result = reducer(result, values[currentIndex], currentIndex++, values);
    result = reducer(result, values[currentIndex], currentIndex++, values);

    iterations--;
  }

  return result;
};

module.exports = reduce;
