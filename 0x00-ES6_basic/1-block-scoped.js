export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // eslint-disable-line unused variables
    const task2 = false; // eslint-disable-line unused variabes
  }

  return [task, task2];
}
