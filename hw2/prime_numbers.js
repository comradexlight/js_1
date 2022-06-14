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

