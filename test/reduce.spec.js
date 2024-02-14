const { describe, it } = require('mocha');
const generateElements = require('./generateElements');
const reduce = require('../lib/reduce');
const _ = require('lodash');

const copier = (result, currentValue, currentIndex, array) => {
  result.push(currentValue);
  return result;
};

const mapper = (result, currentValue, currentIndex, array) => {
  // if reduce works, this is effectively "result[currentValue] = true"
  result[currentValue] = currentValue === array[currentIndex];
  return result;
};

const FUNROLL_SIZE = 25; // update all the tests in one step

describe('reduce', () => {
  let actualInput;
  let actualOutput;
  let expectedInput;
  let expectedOutput;

  context('array input', () => {
    context('empty arrays', () => {
      beforeEach(() => {
        actualInput = [];
        expectedInput = [...actualInput];
      });

      context('array output', () => {
        beforeEach(() => {
          actualOutput = reduce(actualInput, copier, []);
          expectedOutput = _.reduce(actualInput, copier, []);
        });

        it('should return a copy of the input', () => {
          expect(actualOutput).to.be.eql(expectedOutput);
        });
        it('should not modify the input', () => {
          expect(actualInput).to.be.eql(expectedInput);
        });
      });

      context('object output', () => {
        beforeEach(() => {
          actualOutput = reduce(actualInput, mapper, []);
          expectedOutput = _.reduce(actualInput, mapper, []);
        });

        it('should deeply equal the expected output', () => {
          expect(actualOutput).to.be.eql(expectedOutput);
        });

        it('should not modify the input', () => {
          expect(actualInput).to.be.eql(expectedInput);
        });
      });
    });

    context('array with 1 element', () => {
      beforeEach(() => {
        actualInput = [57];
        expectedInput = [...actualInput];
      });

      context('array output', () => {
        beforeEach(() => {
          actualOutput = reduce(actualInput, copier, []);
          expectedOutput = _.reduce(actualInput, copier, []);
        });

        it('should contain the same elements as the input', () => {
          expect(actualOutput).to.have.members(expectedOutput);
        });

        it('should deeply equal the input', () => {
          expect(actualOutput).to.be.eql(expectedOutput);
        });

        it('should not modify the input', () => {
          expect(actualInput).to.be.eql(expectedInput);
        });
      });

      context('object output', () => {
        beforeEach(() => {
          actualOutput = reduce(actualInput, mapper, []);
          expectedOutput = _.reduce(actualInput, mapper, []);
        });

        it('should deeply equal the expected output', () => {
          expect(actualOutput).to.be.eql(expectedOutput);
        });

        it('should not modify the input', () => {
          expect(actualInput).to.be.eql(expectedInput);
        });
      });
    });

    context('array with FUNROLL_SIZE - 1 elements', () => {
      beforeEach(() => {
        actualInput = generateElements(FUNROLL_SIZE - 1);
        expectedInput = [...actualInput];
      });

      context('array output', () => {
        beforeEach(() => {
          actualOutput = reduce(actualInput, copier, []);
          expectedOutput = _.reduce(actualInput, copier, []);
        });

        it('should contain the same elements as the input', () => {
          expect(actualOutput).to.have.members(expectedOutput);
        });

        it.skip('should deeply equal the input', () => {
          // TODO replace switch-statement fallthrough
          expect(actualOutput).to.be.eql(expectedOutput);
        });

        it('should not modify the input', () => {
          expect(actualInput).to.be.eql(expectedInput);
        });
      });

      context('object output', () => {
        beforeEach(() => {
          actualOutput = reduce(actualInput, mapper, []);
          expectedOutput = _.reduce(actualInput, mapper, []);
        });

        it('should deeply equal the expected output', () => {
          expect(actualOutput).to.be.eql(expectedOutput);
        });

        it('should not modify the input', () => {
          expect(actualInput).to.be.eql(expectedInput);
        });
      });
    });

    context('array with FUNROLL_SIZE elements', () => {
      beforeEach(() => {
        actualInput = generateElements(FUNROLL_SIZE);
        expectedInput = [...actualInput];
      });

      context('array output', () => {
        beforeEach(() => {
          actualOutput = reduce(actualInput, copier, []);
          expectedOutput = _.reduce(actualInput, copier, []);
        });

        it('should contain the same elements as the input', () => {
          expect(actualOutput).to.have.members(expectedOutput);
        });

        it.skip('should deeply equal the input', () => {
          // TODO replace switch-statement fallthrough
          expect(actualOutput).to.be.eql(expectedOutput);
        });

        it('should not modify the input', () => {
          expect(actualInput).to.be.eql(expectedInput);
        });
      });

      context('object output', () => {
        beforeEach(() => {
          actualOutput = reduce(actualInput, mapper, []);
          expectedOutput = _.reduce(actualInput, mapper, []);
        });

        it('should deeply equal the expected output', () => {
          expect(actualOutput).to.be.eql(expectedOutput);
        });

        it('should not modify the input', () => {
          expect(actualInput).to.be.eql(expectedInput);
        });
      });
    });

    context('array with FUNROLL_SIZE + 1 elements', () => {
      beforeEach(() => {
        actualInput = generateElements(FUNROLL_SIZE + 1);
        expectedInput = [...actualInput];
      });

      context('array output', () => {
        beforeEach(() => {
          actualOutput = reduce(actualInput, copier, []);
          expectedOutput = _.reduce(actualInput, copier, []);
        });

        it('should contain the same elements as the input', () => {
          expect(actualOutput).to.have.members(expectedOutput);
        });

        it.skip('should deeply equal the input', () => {
          // TODO replace switch-statement fallthrough
          expect(actualOutput).to.be.eql(expectedOutput);
        });

        it('should not modify the input', () => {
          expect(actualInput).to.be.eql(expectedInput);
        });
      });

      context('object output', () => {
        beforeEach(() => {
          actualOutput = reduce(actualInput, mapper, []);
          expectedOutput = _.reduce(actualInput, mapper, []);
        });

        it('should deeply equal the expected output', () => {
          expect(actualOutput).to.be.eql(expectedOutput);
        });

        it('should not modify the input', () => {
          expect(actualInput).to.be.eql(expectedInput);
        });
      });
    });

    context('array with 2 * FUNROLL_SIZE - 1 elements', () => {
      beforeEach(() => {
        actualInput = generateElements(2 * FUNROLL_SIZE - 1);
        expectedInput = [...actualInput];
      });

      context('array output', () => {
        beforeEach(() => {
          actualOutput = reduce(actualInput, copier, []);
          expectedOutput = _.reduce(actualInput, copier, []);
        });

        it('should contain the same elements as the input', () => {
          expect(actualOutput).to.have.members(expectedOutput);
        });

        it.skip('should deeply equal the input', () => {
          // TODO replace switch-statement fallthrough
          expect(actualOutput).to.be.eql(expectedOutput);
        });

        it('should not modify the input', () => {
          expect(actualInput).to.be.eql(expectedInput);
        });
      });

      context('object output', () => {
        beforeEach(() => {
          actualOutput = reduce(actualInput, mapper, []);
          expectedOutput = _.reduce(actualInput, mapper, []);
        });

        it('should deeply equal the expected output', () => {
          expect(actualOutput).to.be.eql(expectedOutput);
        });

        it('should not modify the input', () => {
          expect(actualInput).to.be.eql(expectedInput);
        });
      });
    });

    context('array with 2 * FUNROLL_SIZE element', () => {
      beforeEach(() => {
        actualInput = generateElements(2 * FUNROLL_SIZE);
        expectedInput = [...actualInput];
      });

      context('array output', () => {
        beforeEach(() => {
          actualOutput = reduce(actualInput, copier, []);
          expectedOutput = _.reduce(actualInput, copier, []);
        });

        it('should contain the same elements as the input', () => {
          expect(actualOutput).to.have.members(expectedOutput);
        });

        it.skip('should deeply equal the input', () => {
          // TODO replace switch-statement fallthrough
          expect(actualOutput).to.be.eql(expectedOutput);
        });

        it('should not modify the input', () => {
          expect(actualInput).to.be.eql(expectedInput);
        });
      });

      context('object output', () => {
        beforeEach(() => {
          actualOutput = reduce(actualInput, mapper, []);
          expectedOutput = _.reduce(actualInput, mapper, []);
        });

        it('should deeply equal the expected output', () => {
          expect(actualOutput).to.be.eql(expectedOutput);
        });

        it('should not modify the input', () => {
          expect(actualInput).to.be.eql(expectedInput);
        });
      });
    });

    context('array with 2 * FUNROLL_SIZE + 1 element', () => {
      beforeEach(() => {
        actualInput = generateElements(2 * FUNROLL_SIZE + 1);
        expectedInput = [...actualInput];
      });

      context('array output', () => {
        beforeEach(() => {
          actualOutput = reduce(actualInput, copier, []);
          expectedOutput = _.reduce(actualInput, copier, []);
        });

        it('should contain the same elements as the input', () => {
          expect(actualOutput).to.have.members(expectedOutput);
        });

        it.skip('should deeply equal the input', () => {
          // TODO replace switch-statement fallthrough
          expect(actualOutput).to.be.eql(expectedOutput);
        });

        it('should not modify the input', () => {
          expect(actualInput).to.be.eql(expectedInput);
        });
      });

      context('object output', () => {
        beforeEach(() => {
          actualOutput = reduce(actualInput, mapper, []);
          expectedOutput = _.reduce(actualInput, mapper, []);
        });

        it('should deeply equal the expected output', () => {
          expect(actualOutput).to.be.eql(expectedOutput);
        });

        it('should not modify the input', () => {
          expect(actualInput).to.be.eql(expectedInput);
        });
      });
    });
  });
});
