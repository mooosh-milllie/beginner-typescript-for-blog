type Operation = 'multiply' | 'add' | 'divide';
// type OPerationReturn = number | string;
const calculator = (a: number, b: number, op: Operation): number | string => {
  let result: number;
  switch (op) {
    case 'multiply':
      result = a * b;
      break;
    case 'add':
      result = a + b;
      break;
    case 'divide':
      if (b === 0) {
        throw new Error('Can\'t divide by 0!');
      }
      result = a / b;
      break;
    default:
      throw new Error(`${op} is not a valid operation`);
  }
  return result;
};

// try {
//   console.log(multiply(5, 0, 'divide'));
// } catch (error: unknown) {
//   let errorMessage = "Something went wrong";
//   if(error instanceof Error) {
//     errorMessage = error.message;
//   }
//   console.log(errorMessage);
// }
export {calculator};