// var num = [100, -2, 300, -1];

// const getMinimumNumber = (num) => {
//   let temp;
//   for (let i = 0; i < num.length; i++) {
//     for (let j = i + 1; j < num.length; j++) {
//       if (num[i] > num[j]) {
//         temp = num[i];
//         num[i] = num[j];
//         num[j] = temp;
//       }
//     }
//   }
//   return num;
// };

// const getMaximumNumber = (num) => {
//   let temp;
//   for (let i = 0; i < num.length; i++) {
//     for (let j = i + 1; j < num.length; j++) {
//       if (num[i] < num[j]) {
//         temp = num[j];
//         num[j] = num[i];
//         num[i] = temp;
//       }
//     }
//   }
//   return num;
// };

// const res = getMinimumNumber(num);
// // const res2 = getMaximumNumber(num);
// console.log(res);
// // console.log(res2);

let currentDate = new Date().toJSON();
console.log(currentDate); // "2022-06-17"
