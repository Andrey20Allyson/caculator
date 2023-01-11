import { Calculator } from './components';
import * as lib from './lib';

export default function App() {

  function callback(input: string) {
    return String(lib.calculate(input));
  }

  return (
    <Calculator calculatorCallback={callback}/>
  );
}