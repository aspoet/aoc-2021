export function one(_input: string[]): number {
  const input = _input.map((x) => Number.parseInt(x, 10));
  let counter = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > input[i - 1]) {
      counter++;
    }
  }
  return counter;
}

export function two(_input: string[]): number {
  const input = _input.map((x) => Number.parseInt(x, 10));
  let counter = 0;
  let denoisedInput = denoise(input);

  function denoise(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      let chunk = array.slice(i, i + 3);
      result.push(chunk);
    }
    return result;
  }

  function compareArray(array) {
    for (let i = 1; i < array.length; i++) {
      if (sumArr(array[i]) > sumArr(array[i - 1])) {
        counter++;
      }
    }
    return counter;
  }

  function sumArr(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }

  return compareArray(denoisedInput);
}
