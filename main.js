// www.codewars.com
// KATA 1 8kyu
const positiveSum = arr => {
  let total = 0;
  const test = arr.forEach(num => {
    if (num > 0) {
      total+= num;
    }
  })
  return total;
}

console.log(positiveSum([1,-4,7,12]));

// KATA 2 6kyu
const solution = num => {
  let sum = 0;
 for (let i = 1; i < num; i++) {
 if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  } 
 } 
 return sum;
}

console.log(solution(15));
console.log(solution(-15));

// KATA 3 7kyu
const gimme = arr => arr.indexOf([...arr].sort((a,b) => a - b)[1]);

console.log(gimme([2,3,1]));
console.log(gimme([5,10,15]));

