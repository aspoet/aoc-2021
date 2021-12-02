export function one(_input: string[]): number {
  const input = _input;
  let posX = 0;
  let depth = 0;

  function followPath(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].startsWith("f")) {
        posX += toInt(array[i]);
      } else if (array[i].startsWith("d")) {
        depth += toInt(array[i]);
      } else if (array[i].startsWith("u")) {
        depth -= toInt(array[i]);
      }
    }
    return posX * depth;
  }

  function toInt(string) {
    let res = parseInt(string.replace(/\D/g, ""));
    return res;
  }

  return followPath(input);
}

export function two(_input: string[]): number {
  const input = _input;
  let posX = 0;
  let depth = 0;
  let aim = 0;

  function followPath(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].startsWith("f")) {
        posX += toInt(array[i]);
        depth += aim * toInt(array[i]);
      } else if (array[i].startsWith("d")) {
        aim += toInt(array[i]);
      } else if (array[i].startsWith("u")) {
        aim -= toInt(array[i]);
      }
    }
    return posX * depth;
  }

  function toInt(string) {
    let res = parseInt(string.replace(/\D/g, ""));
    return res;
  }

  return followPath(input);
}
