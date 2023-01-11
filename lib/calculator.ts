import { Operation } from "../components";

export interface OperationStack {
  [k: string]: (v1: number, v2: number) => number;
}

export interface MathFunctionStack {
  [k: string]: (v1: number) => number;
}

const operations3: OperationStack = {
  '-': (v1, v2) => v1 - v2,
  '+': (v1, v2) => v1 + v2,
}

const operations2: OperationStack = { 
  '*': (v1, v2) => v1 * v2,
  '/': (v1, v2) => v1 / v2,
  '*-': (v1, v2) => v1 *- v2,
  '/-': (v1, v2) => v1 /- v2
}

type NumberOrString = number | string

const operations1: OperationStack = {
  '^': (v1, v2) => v1 ** v2
}

const mathFunctions: MathFunctionStack = {
  'l': (v1) => Math.log10(v1),
  'r': (v1) => v1 ** (1 / 2),
}

const allOperations = ['+', '-', '*', '/', '^'];
const allFunctions = ['l', 'r'];
const functionsAndOperations = [...allOperations, ...allFunctions];
const parentheses = ['(', ')'];
const operationsAfterParentheses = [...allOperations, ...parentheses];

function placeIn<T>(array: Array<T>, value: T, start: number, end: number) {
  const leftSlice = start > 0? array.slice(0, start): [];
  const rightSlice = array.slice(end);

  return [leftSlice, value, rightSlice].flat();
}

function polishSimplifiedResult(input: number, beforeParentheses: string, afterParentheses: string) {
  let stringInput = String(input);

  if (beforeParentheses && !['*', '/', '^', ...allFunctions].includes(beforeParentheses)) {
    if (['-', '+'].includes(beforeParentheses)) {
      stringInput = '1*' + stringInput;
    } else {
      stringInput = '*' + stringInput;
    }
  }

  if (afterParentheses && !operationsAfterParentheses.includes(afterParentheses)) stringInput += '*';

  return stringInput;
}

function smallSimplify(input: string, parI: number) {
  let opened = 1;
  let newInput = '';
  let i = parI + 1;

  for (i; i < input.length; i++) {
    switch (input[i]) {
      case '(':
        opened += 1;
        break;
      case ')':
        opened -= 1;
        break;
    }
    if (opened === 0) break;
    newInput += input[i];
  }

  let bp = input[parI - 1];
  let ap = input[i + 1];

  let result = rawCalculate(newInput);

  if (allFunctions.includes(bp)) {
    result = mathFunctions[bp](result);
    parI -= 1;
    bp = input[parI - 1];
  }

  let polishedResult = polishSimplifiedResult(result, bp, ap);

  return input.slice(0, parI) + polishedResult + input.slice(i + 1);
}

function fullSimplify(input: string) {
  let parI = input.indexOf('(');

  while (parI !== -1) {
    input = smallSimplify(input, parI);

    parI = input.indexOf('(');
  }

  return input;
}

function separate(input: string) {
  let values = [];
  
  for (let i = 0; i < input.length; i++) {
    let char = input[i];

    if (functionsAndOperations.includes(char)) {
      switch (input[i + 1]) {
        case '-':
          char += '-';
          i += 1;
          break
        case '+':
          i += 1;
          break
      }

      values.push(char, '');
    } else {
      if (values[values.length - 1] === undefined) values.push('');

      values[values.length - 1] += char;
    }
  }

  return values;
}

function parseNumbers(values: NumberOrString[]) {
  for (let i = 0; i < values.length; i++) {
    const numberValue = Number(values[i])

    if (!Number.isNaN(numberValue)) values[i] = numberValue;
  }

  return values;
}

function operate(values: NumberOrString[], operations: OperationStack) {
  for (let i = 0; i < values.length; i++) {
    let op = values[i];

    const beforeOp = values[i - 1] ?? 0;
    if (typeof beforeOp !== 'number') continue;

    const afterOp = values[i + 1];
    if (typeof afterOp !== 'number') continue;

    if (operations[op]) {
      const result = operations[op](beforeOp, afterOp);

      values = placeIn(values, result, i - 1, i + 2);
      i -= 1
    }
  }

  return values;
}

function realizeOperations(values: NumberOrString[]) {
  for (let operationStack of [operations1, operations2, operations3]) {
    values = operate(values, operationStack);
  }

  return Number(values[0]);
}

const correctFormates: {[k: string]: string} = {
  [Operation.Log]: 'l',
  [Operation.RootSquare]: 'r',
  [Operation.Division]: '/',
  [Operation.Multiplication]: '*',
  [Operation.Sin]: 's',
  [Operation.Cos]: 'c',
  ',': '.'
};

function formatValues(input: string) {
  for (let key in correctFormates) {
    input = input.replace(RegExp(key, 'g'), correctFormates[key]);
  }

  return input;
}

function rawCalculate(input: string) {
  let simpleEquation = fullSimplify(input);

  let separatedValues = separate(simpleEquation);

  let numbersAndOperations = parseNumbers(separatedValues);

  let result = realizeOperations(numbersAndOperations);
  
  return result;
}

export function calculate(input: string) {
  let formatedInput = formatValues(input);

  let result = rawCalculate(formatedInput);

  if (Number.isNaN(result)) throw new SyntaxError(`Can't calculate string '${input}'`);

  return result;
}