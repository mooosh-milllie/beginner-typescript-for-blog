import express, {Request, Response} from 'express';
import {calculator} from './calculator';

interface CalculatorInputs {
  firstOperand: number;
  secondOperand: number;
  operator: 'multiply' | 'add' | 'divide';
}
// interface CalculatorRes {
//   result: number | string
// }
const app = express();
// app.use(express.urlencoded());
app.use(express.json({limit: '1mb'}));
app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.post('/calculator', (req: Request<Record<string, unknown>, Record<number, string>, {values: CalculatorInputs}>, res: Response) => {

  const values: CalculatorInputs = req.body.values;

  const {firstOperand, secondOperand, operator} = values;
  
  if ( !firstOperand || isNaN(Number(firstOperand))) {
    return res.status(400).send({ error: 'Operand has to be a number'});
  }
  if( !secondOperand || isNaN(Number(secondOperand))) {
    return res.status(400).send({ error: 'Operand has to be a number'});
  }

  const result: number | string = calculator(Number(firstOperand), Number(secondOperand), operator);
  return res.json({result});
  
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


