const users = [
  {name: 'Joshua', age: 21},
  {name: 'Faith', age: 20},
  {name: 'Tori', age: 19}
]

// const usersAge = users.map(function(users){
//   allAges = users.age;
//   return allAges
// })

// console.log(usersAge)

// function mapUsers(arr){
//     const usersAge = arr.map(function(users){
//     allAges = users.name;
//     return allAges;
//     })
//     return usersAge;
// }

// console.log(mapUsers(users))

const numbers = [1,2,3,4,5,6,7,8,9,10];

// const filteredNum = numbers.filter((num) => 
//   num % 2 === 1 
// );

// console.log(filteredNum);

// const doubledNum = (num) => {
//   const numberContainer = [];
//   num.forEach((n) => {
//     const doubled = n * 2;
//     numberContainer.push(doubled);
//   });
//   return numberContainer;
// }

// console.log(doubledNum(numbers))

// change arguments to array

function showAllarg(x){
  const args = Array.prototype.slice.call(arguments, showAllarg.length);
  console.log(args);
}

showAllarg(3, 5, 7, 9, 1);