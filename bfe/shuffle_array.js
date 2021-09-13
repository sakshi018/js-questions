/**
 * 
How would you implement a shuffle() ?

When passed with an array, it should modify the array inline to generate a randomly picked permutation at the same probability.

for an array like this:

const arr = [1, 2, 3, 4]
there would be possibly 4! = 24 permutations
 */

function shuffle(arr) {
    for (let i = 0; i < arr.length; i++) {
      const j = i + Math.floor(Math.random() * (arr.length - i))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
