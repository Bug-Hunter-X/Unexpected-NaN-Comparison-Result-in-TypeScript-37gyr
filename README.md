# Unexpected NaN Comparison Result in TypeScript

This repository demonstrates a subtle issue in TypeScript where comparing NaN (Not a Number) with itself using the standard comparison operators yields 0 instead of false as expected.  This can lead to unexpected behavior in comparison functions that handle numbers.

The `bug.ts` file contains the buggy code.  The solution, found in `bugSolution.ts`, demonstrates how to correctly handle NaN comparisons using `Number.isNaN()`.

## How to Reproduce

1. Clone this repository.
2. Run `tsc bug.ts` to compile the code.
3. Run `node bug.js` to observe the unexpected result.
4. Compile and run `bugSolution.ts` to see the correct handling of NaN comparison.

## Lessons Learned

Always explicitly check for NaN values using `Number.isNaN()` to avoid unexpected behavior in numerical comparisons.  TypeScript's type system does not inherently protect against this, underscoring the importance of writing robust comparison logic.