export function arraysEqual(param1, param2) {
    const convertToString = (param) => (Array.isArray(param) ? param.join('') : param);

    const str1 = convertToString(param1);
    const str2 = convertToString(param2);

    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}


export function getRandomArray(array, count) {
    // Copy the original array to avoid modifying it
    const shuffledArray = array.slice();
  
    // Shuffle the array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  
    // Return a slice of the shuffled array with the specified count
    return shuffledArray.slice(0, count);
  }