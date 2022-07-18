/* Extra Questions 1-4*/
// Question 1.
// 1. If N is prime number True or false otherwise:
function isPrime(num) {
    if (num <= 1) return false;
    if (num == 2) return true;
  
    for (let i = 2; i <= num / 2; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
  
  console.log(isPrime(2));
  console.log(isPrime(53));

// Question 2
// 2. Write a function to reverse a number
function reverse_a_num(n)
  {
      n = n + "";
      return n.split("").reverse().join("");
  }
  console.log(Number(reverse_a_num(32243)));

// Question 3
// 3. Write a function 
function Char(str1) {
    var chars = {};
    str1.replace(/\S/g, function(l){chars[l] = (isNaN(chars[l]) ? 1 : chars[l] + 1);});
    return chars;
    }
    console.log(Char("Its a beautiful day in the neighborhood"));

// Question 4
// 4.Write a JavaScript function to find the lowest value in an array
function min(input) {
     if (toString.call(input) !== "[object Array]")  
       return false;
  return Math.min.apply(null, input);
}

console.log(min([12,34,56,1]));
console.log(min([-12,-34,0,-56,-1]));

// Main JS Day1 HW Questions
/*Q1- Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
// let dog_string = ["Hello Max, my name is Dog, and I have purple eyes!"]
// let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
let a = false;
for(let i = 0; i < dog_names.length; i++) {
  if (dog_string.search(dog_names[i]) !== -1) {
    a = true;
    return ("matched " + dog_names[i])
    }
}
  if (a == false){
    return("No Matches");
  }
}

console.log(findWords())


/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
function getName(arr) {
     for(let i = 0; i < arr.length; i++){
         console.log(arr[i])
 }
}
console.log(arr([0,2,4],1,'even index'))

// console.log(getName)
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]