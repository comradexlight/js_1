//function isPrime(i, primes) {
//    for (let prime in primes) {
//        if (!(i === prime || i % prime)) {
//            return false;
//        }
//    }
//    primes.push(i);
//    return i
//}
//
//function getNprimes(n) {
//    const primes = [2,];
//    let i = 2;
//    let p = 0;
//    while (true) {
//        if (isPrime(i, primes)) {
//            p++
//            if (p === n) {
//                return primes
//            }
//        }
//        i++;
//    }
//}
//
function getNprimes(n){
  const arr = [];
  let i = 2

  while (arr.length < n) {
    if (isPrime(i)) {
      arr.push(i)
    }
    i++
  } 
  return arr;

  function isPrime(n) {

    if ( n < 2 ) {
      return false
    }

    for ( let i = 2; i <= Math.sqrt(n); i++ ) {
      if ( n % i === 0 ) {
          return false;
      } 
    }
    return true
  }

}

console.time();
console.log(getNprimes(process.argv[2]));
console.timeEnd();

