/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return Math.abs(number) === number;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  }
  if (b >= a && b >= c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  ) {
    return true;
  }
  return false;
}
// function canQueenCaptureKing(queen, king) {
//   // Проверяю, находятся ли королева и король на одной вертикали, горизонтали или диагонали
//   if (
//     queen.x === king.x ||
//     queen.y === king.y ||
//     Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
//   ) {
//     return true;
//   }
//   return false;
// }

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a && b && c) {
    if (isPositive(a) && isPositive(b) && isPositive(c)) {
      if (a + b > c && a + c > b && b + c > a) {
        if (a === b || a === c || b === c) {
          return true;
        }
      }
    }
  }
  return false;
}
// function isIsoscelesTriangle(a, b, c) {
//   if (a && b && c) { // исключаю 0
// исключаю отрицательные значения
//     if (isPositive(a) && isPositive(b) && isPositive(c)) { // использую решение-функцию объявленную выше (первая задача)
//       if (a + b > c && a + c > b && b + c > a) {
//         if (a === b || a === c || b === c) {
//           return true;
//         }
//       }
//     }
//   }
//   return false;
// }

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const romanNum = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
  };

  const keyNumArr = [10, 9, 5, 4, 1];
  let tempNum = num;
  let result = '';

  for (let i = 0; i < keyNumArr.length; i += 1) {
    while (tempNum >= keyNumArr[i]) {
      result += romanNum[keyNumArr[i]];
      tempNum -= keyNumArr[i];
    }
  }

  return result;
}
// function convertToRomanNumerals(num) {
//   const romanNum = {
//     1: 'I',
//     4: 'IV',
//     5: 'V',
//     9: 'IX',
//     10: 'X',
//   };

//   const keyNumArr = [10, 9, 5, 4, 1]; // ставлю цифры-ключи в порядке убывания
//   let tempNum = num;
//   let result = '';

//   for (let i = 0; i < keyNumArr.length; i += 1) {
// перебираю римские цифры в порядке убывания и проверяю, сколько раз каждая римская цифра помещается в число num
//     while (tempNum >= keyNumArr[i]) {
//       result += romanNum[keyNumArr[i]];
//       tempNum -= keyNumArr[i];
//     }
//   }

//   return result;
// }

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const digitWordObj = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    '.': 'point',
    ',': 'point',
    '-': 'minus',
  };

  let result = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
      case ',':
      case '-':
        result += digitWordObj[numberStr[i]];
        break;
      default:
        break;
    }

    if (i !== numberStr.length - 1) {
      result = `${result} `;
    }
  }
  return result;
}
// function convertNumberToString(numberStr) {
//   const digitWordObj = {
//     0: 'zero',
//     1: 'one',
//     2: 'two',
//     3: 'three',
//     4: 'four',
//     5: 'five',
//     6: 'six',
//     7: 'seven',
//     8: 'eight',
//     9: 'nine',
//     '.': 'point',
//     ',': 'point',
//     '-': 'minus',
//   };

//   let result = '';

//   for (let i = 0; i < numberStr.length; i += 1) {
//     result += digitWordObj[numberStr[i]];
//     if (i !== numberStr.length - 1) {
//       result = `${result} `;
//     }
//   }
//   return result;
// }

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  const len = Math.floor(str.length / 2);
  for (let i = 0; i < len; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  const len = str.length;
  for (let i = 0; i < len; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let numTemp = num;
  while (numTemp) {
    if (numTemp % 10 === digit) return true;
    numTemp = Math.floor(numTemp / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 1; i < arr.length - 1; i += 1) {
    let leftSum = 0;
    let rightSum = 0;

    for (let leftEl = 0; leftEl < i; leftEl += 1) {
      leftSum += arr[leftEl];
    }

    for (let rightEl = i + 1; rightEl < arr.length; rightEl += 1) {
      rightSum += arr[rightEl];
    }

    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}
// function getBalanceIndex(arr) {
// прохожу по всем элементам с первого до предпоследнего (чтобы были элементы слева и справа)
//   for (let i = 1; i < arr.length - 1; i += 1) {
//     let leftSum = 0;
//     let rightSum = 0;
// считаю сумму слева от элемента
//     for (let leftEl = 0; leftEl < i; leftEl += 1) {
//       leftSum += arr[leftEl];
//     }
// считаю сумму справа от элемента
//     for (let rightEl = i + 1; rightEl < arr.length; rightEl += 1) {
//       rightSum += arr[rightEl];
//     }

//     if (leftSum === rightSum) {
//       return i;
//     }
//   }

//   return -1;
// }

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const resultMatrix = [];
  for (let i = 0; i < size; i += 1) {
    resultMatrix[i] = [];
  }

  let elementMatrix = 1;
  let rightDirect = 0;
  let downDirect = size - 1;
  let leftDirect = 0;
  let upDirect = size - 1;

  while (rightDirect <= downDirect && leftDirect <= upDirect) {
    for (let i = leftDirect; i <= upDirect; i += 1) {
      resultMatrix[rightDirect][i] = elementMatrix;
      elementMatrix += 1;
    }
    rightDirect += 1;

    for (let i = rightDirect; i <= downDirect; i += 1) {
      resultMatrix[i][upDirect] = elementMatrix;
      elementMatrix += 1;
    }
    upDirect -= 1;

    for (let i = upDirect; i >= leftDirect; i -= 1) {
      resultMatrix[downDirect][i] = elementMatrix;
      elementMatrix += 1;
    }
    downDirect -= 1;

    for (let i = downDirect; i >= rightDirect; i -= 1) {
      resultMatrix[i][leftDirect] = elementMatrix;
      elementMatrix += 1;
    }
    leftDirect += 1;
  }

  return resultMatrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */

function rotateMatrix(matrix) {
  const resultMatrix = matrix;

  const tempMatrix = [];
  for (let i = 0; i < matrix[0].length; i += 1) {
    tempMatrix[i] = [];
  }
  for (let i = 0; i < matrix.length; i += 1) {
    for (let k = 0; k < matrix.length; k += 1) {
      tempMatrix[i][k] = matrix[matrix.length - 1 - k][i];
    }
  }
  for (let i = 0; i < matrix.length; i += 1) {
    for (let k = 0; k < matrix.length; k += 1) {
      resultMatrix[i][k] = tempMatrix[i][k];
    }
  }

  return matrix;
}
// function rotateMatrix(matrix) {
// Надо изменять именно matrix. Поэтому в решении пришлось потанцевать с бубном
//   const resultMatrix = [];
//   for (let i = 0; i < matrix[0].length; i += 1) {
//     resultMatrix[i] = [];
//   }

//   for (let i = 0; i < matrix.length; i += 1) {
//     for (let k = 0; k < matrix.length; k += 1) {
//       resultMatrix[i][k] = matrix[matrix.length - 1 - k][i];
//     }
//   }

//   return resultMatrix;
// }

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */

function sortByAsc(arr01) {
  const arr = arr01;
  const stack = [{ low: 0, high: arr.length - 1 }];
  let index = 0;

  while (index >= 0) {
    const { low, high } = stack[index];
    const base = arr[high];
    let i = low - 1;
    let j;

    for (j = low; j < high; j += 1) {
      if (arr[j] < base) {
        i += 1;
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }

    const temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    const baseIndex = i + 1;

    if (baseIndex - 1 > low) {
      stack[index] = { low, high: baseIndex - 1 };
      index += 1;
    }
    if (baseIndex + 1 < high) {
      stack[index] = { low: baseIndex + 1, high };
      index += 1;
    }
    index -= 1;
  }

  return arr01;
}
// function sortByAsc(arr01) {
//   const arr = arr01; // создаю копию ссылки, чтобы не изменять исходный массив
// извращаюсь со стеком и реструкторизацией из-за ограничений на работу с методами массива
// засовываю в стек объект с переменными с мин и макс индексами
//   const stack = [{ low: 0, high: arr.length - 1 }];
// переменная index для отслеживания текущего элемента стека.
//   let index = 0;

//   while (index >= 0) {
// достаю индексы-переменные из стека
//     const { low, high } = stack[index];
//     const base = arr[high];
// Разделения массива на две части относительно базового элемента
//     let i = low - 1;
//     let j;

//     for (j = low; j < high; j += 1) {
//       if (arr[j] < base) {
//         i += 1;
// Обмениваем элементы arr[i] и arr[j]
//         const temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
// Помещаю базовый элемент в правильное положение
//     const temp = arr[i + 1];
//     arr[i + 1] = arr[high];
//     arr[high] = temp;
//     const baseIndex = i + 1;
// передвигаюсь по массиву и меняю значения индексов-переменных в стеке
//     if (baseIndex - 1 > low) {
//       stack[index] = { low, high: baseIndex - 1 };
//       index += 1;
//     }
//     if (baseIndex + 1 < high) {
//       stack[index] = { low: baseIndex + 1, high };
//       index += 1;
//     }
//     index -= 1;
//   }

//   return arr01;
// }

// со скорость всё впорядке, но надо убрать методы массива
// function sortByAsc(arr01) {
//   const arr = arr01;
//   const stack = [{ low: 0, high: arr.length - 1 }];

//   while (stack.length > 0) {
//     const { low, high } = stack.pop();
//     const base = arr[high];
//     let i = low - 1;
//     for (let j = low; j < high; j += 1) {
//       if (arr[j] < base) {
//         i += 1;
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//       }
//     }
//     [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
//     const baseIndex = i + 1;

//     if (baseIndex - 1 > low) {
//       stack.push({ low, high: baseIndex - 1 });
//     }
//     if (pivotIndex + 1 < high) {
//       stack.push({ low: baseIndex + 1, high });
//     }
//   }

//   return arr01;
// }

// function sortByAsc(arr1) {
//   const arr = arr1;
//   const n = arr.length;
//   for (let i = 0; i < n; i += 1) {
//     for (let j = 0; j < n - i - 1; j += 1) {
//       if (arr[j] > arr[j + 1]) {
//         const temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr1;
// }

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */

function shuffleChar(str, iterations) {
  let charArray = str;

  const arr = [];

  for (let j = 0; j < iterations; j += 1) {
    let left = '';
    let right = '';

    for (let i = 1; i < charArray.length; i += 2) {
      right += charArray[i];
      left += charArray[i - 1];
    }

    charArray = left + right;
    arr[j] = charArray;
    if (charArray === str) {
      return arr[(iterations % (j + 1)) - 1];
    }
  }

  return charArray;
}

// Собираю левую и правую часть стороки (с четными и нечетными индексами)
// Создаю массив строк для поиска повторений.
// Как только строка повторяется вывожу результат

// function shuffleChar(str, iterations) {
//   const len = str.length;
//   let arr = str.split('');
//   let resultStr = '';

//   for (let it = 0; it < iterations; it += 1) {
//     const result = [];

//     for (let i = 0; i < len; i += 1) {
//       let newPos;
//       if (i % 2 === 0) {
//         newPos = Math.floor(i / 2);
//       } else {
//         newPos = Math.floor((len + i) / 2);
//       }
//       result[newPos % len] = arr[i];
//     }

//     arr = result;
//   }

//   for (let i = 0; i < len; i += 1) {
//     resultStr += arr[i];
//   }

//   return resultStr;
// }
// function shuffleChar(str, iterations) {
//   const len = str.length;
//   let arr = str.split('');
//   let resultStr = '';

//   for (let it = 0; it < iterations; it += 1) {
//     const result = new Array(len);

//     for (let i = 0; i < len; i += 1) {
//       let newPos;
//       if (i % 2 === 0) {
//         newPos = Math.floor(i / 2);
//       } else {
//         newPos = Math.floor((len + i) / 2);
//       }
//       result[newPos % len] = arr[i];
//     }

//     arr = result;
//   }

//   for (let i = 0; i < len; i += 1) {
//     resultStr += arr[i];
//   }

//   return resultStr;
// }
// function shuffleChar(str, iterations) {
//   const n = str.length;
//   let arr = str.split('');
//   let resultStr = '';

//   for (let it = 0; it < iterations; it += 1) {
//     const result = new Array(n);

//     for (let i = 0; i < n; i += 1) {
//       const newPos = i % 2 === 0 ? Math.floor(i / 2) : Math.floor((n + i) / 2);
//       result[newPos % n] = arr[i];
//     }

//     arr = result;
//   }

//   for (let i = 0; i < n; i += 1) {
//     resultStr += arr[i];
//   }

//   return resultStr;
// }
// function shuffleChar(str, iterations) {
//   let charArray = str;
//   let repeat = iterations;

//   while (repeat > 0) {
//     let left = '';
//     let right = '';

//     for (let i = 1; i < charArray.length; i += 2) {
//       right += charArray[i];
//       left += charArray[i - 1];
//     }

//     charArray = left + right;

//     repeat -= 1;
//   }

//   return charArray;
// }

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */

function getNearestBigger(number) {
  const digitsArr = [];

  let temp01 = number;

  while (temp01) {
    digitsArr.push(temp01 % 10);
    temp01 = Math.floor(temp01 / 10);
  }

  digitsArr.reverse();

  let baseIndex = -1;
  for (let i = digitsArr.length - 1; i > 0; i -= 1) {
    if (digitsArr[i] > digitsArr[i - 1]) {
      baseIndex = i - 1;
      break;
    }
  }
  if (baseIndex === -1) {
    return number;
  }

  let nextLargestIndex = baseIndex + 1;
  for (let i = baseIndex + 1; i < digitsArr.length; i += 1) {
    if (
      digitsArr[i] > digitsArr[baseIndex] &&
      digitsArr[i] < digitsArr[nextLargestIndex]
    ) {
      nextLargestIndex = i;
    }
  }

  const temp02 = digitsArr[baseIndex];
  digitsArr[baseIndex] = digitsArr[nextLargestIndex];
  digitsArr[nextLargestIndex] = temp02;

  const rightDigitsArr = digitsArr.splice(baseIndex + 1);
  rightDigitsArr.sort((a, b) => a - b);
  digitsArr.push(...rightDigitsArr);

  return Number(digitsArr.join(''));
}

// Преобразую исходное число в массив цифр.
// Беру индекс первой цифры справа, которая меньше цифры справа от нее. (baseIndex)
// Если "baseIndex" существует, найдем самую маленькую цифру справа от "baseIndex", которая больше цифры в "baseIndex", и поменяем эти две цифры местами.
// Cортирую все цифры справа от "baseIndex" по возрастанию.
// Массив обратно в число и возвращаю его.

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
