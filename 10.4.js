// задание 3
s = prompt("Hello");
function reverse(s){
    return s.split("").reverse().join("");
}
console.log(reverse(s));

// задание 4
function  getRandomRange(min, max) {
    return Math.floor(Math.random() * (max-min));
  }
  
  console.log(getRandomRange(0, 100));