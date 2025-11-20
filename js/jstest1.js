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
/*let age = 16; // take 16 as an example

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

welcome(); // Error: welcome is not defined*/
/*p=Number(prompt("Number?"," "));
for(let i=10;i<=p;i++){
  alert(i);
}*/
/*["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});*/
/*let strr = "list-style-image";
function camelize(str) {
  mass=str.split("-");
  mass=mass.map((word,index) => index==0 ? word : word[0].toUpperCase() + word.slice(1));
  mas=mass.join("");
  return mas;
}
console.log(camelize(strr));*/
/*function filterRange(arr,a,b) {
  return arr=arr.filter(item => (a<=item&&b>=item));
}
let arr=[5,3,8,1];
let filtered = filterRange(arr,1,4);
console.log(arr);
console.log(filtered);*/
/*function sorted(arr) {
  let red = arr.slice().sort();
  return red;
}
let array = ["Albion", "DOTA2", "CS2", "VALHEIM"];
console.log(sorted(array));
console.log(array);*/
const container = document.querySelector("#container");
const p = document.createElement("p");
  p.classList.add("p");
    p.textContent = "Hey! I am red!";
      p.setAttribute("style", "color:red");
  container.appendChild(p);
const h3 = document.createElement("h3");
  h3.classList.add("h3");
    h3.textContent = "I am blue h3!";
      h3.setAttribute("style","color:blue");
  container.appendChild(h3);
const div = document.createElement("div");
  div.classList.add("div");
    div.setAttribute("style", "border:2px solid black;background-color:pink;");
const hdiv = document.createElement("h1");
  hdiv.classList.add("hdiv");
    hdiv.textContent = "I am in block!";
const pdiv = document.createElement("p");
  pdiv.classList.add("pdiv");
    pdiv.textContent = "I am too!";
div.appendChild(hdiv);
div.appendChild(pdiv);
container.appendChild(div);
let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("It was clicked!");
});



