
// const insertionSort = arr => {
//     const len = arr.length;
//     for (let i=0; i<len; i++){
//         let el= arr[i];
//         let j;

//         for (j = i - 1; j >= 0 && arr[j] > el; j--) {
//             arr[j + 1] = arr[j];
//           }
//           arr[j + 1] = el;
//     }
//     return arr;
//   };
//   console.log(insertionSort([13,14,3,4,9,6,7,20]))


  const insertionSort = (array) => {
    const arr = Array.from(array);
    for (let i = 1; i < arr.length; i++) {
      for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
    return arr;
  };
  console.log(insertionSort([13,14,3,4,9,6,7,20]))
