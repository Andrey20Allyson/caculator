import { calculate } from './calculator';
import { expect, test } from 'vitest';

function createCalculateTest(expectedValue: number, input: string) {
  test(`calculate function must return ${expectedValue} if recive is '${input}'`, (ctx) => {
    const result = calculate(input);

    expect(result).toEqual(expectedValue);
  });
}

createCalculateTest(2, '10/5');
createCalculateTest(256, '2^8');
createCalculateTest(-2, '2(-1)');
createCalculateTest(0, '5-5');
createCalculateTest(3, 'log(1000)');
createCalculateTest(-1000, '10^log(1000)(1-2)');
createCalculateTest(20, '(20^2)^(1/2)');