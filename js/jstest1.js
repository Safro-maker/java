/*function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}
alert(showPrimes(10));*/                                    //test1 сколько простых чисел от 1 до n
/*function checkAge(age) {
  return (age > 18) || confirm("Did your parents for you?")}
alert(checkAge(10));*/                                      //test2 есть 18 или нет
/*function minn(a,b) {
    if(a<b) return a;
    if(b<a) return b;
    return a;
}
alert(minn(5,5));*/                                         //test3 мин число
/*function pow(x,n) {
    let c=x;
    for(let i = 1;i<n;i++){
        x*=c;
    }
    return x;
}
alert(pow(5,3));*/                                          //test 4 возведение в степень
/*function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}*/                                                            //возыедение в степень с любыми значениями
let age = 16; // take 16 as an example

if (age < 18) {
  welcome();               // \   (runs)
                           //  |
  function welcome() {     //  |
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
  welcome();               // /   (runs)

 } else {

  function welcome() {
    alert("Greetings!");
  }
 }

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined