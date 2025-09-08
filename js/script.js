/* 1.1.Variable Declaration
var name=prompt('enter your name:');
console.log(name);
let age=prompt('enter your age');
console.log(age);
const value=3.14;
console.log(value);

//output:lokesh,20,3.14
*/



/*1.2.swapping done
let a = prompt('Enter the first number:');
let b = prompt('Enter the second number:');
let temp;
temp = a;
a = b;
b = temp;
console.log('After swapping:');
console.log('a =', a);
console.log('b =', b);

//output:10,20==20,10
*/

/*Rectangle
let length = Number(prompt('Enter the length of the rectangle'));
let breadth = Number(prompt('Enter the breadth of the rectangle'));
let area=length*breadth;
let perimeter=2*(length + breadth);
console.log(area);
console.log(perimeter);
//output:length:10,breadth:20
//200
//60

/*2.4.datatype equation 
let a1=5;
let b1="5";
console.log(a1===b1);

output:false

let a1=5;
let b1="5";
console.log(a1==b1);

output:true

*/

/*2.5.Even or Odd
let n=prompt("enter the number");
let r=n%2;
if (r==0)
{
    console.log('even');
}
else {
    console.log('odd');
}
output:18==even,15==odd    
*/


/*3.6.voter eligibility
let age=prompt('enter your age:');
if(age>=18)
{
    console.log("eligible");
}
else {
    console.log("not eligible");
}
//output:21==eligible    
*/


/*3.7 largest number out of three
let a=prompt('enter the value of a');
let b=prompt('enter the value of b');
let c=prompt('enter the value of c');
if (a>b)
{
    console.log('a is greater:'+ a);
}
else if (b>c){
     console.log('b is greater:'+ b);
}
else if (c>a){
     console.log('c is greater:'+ c);
}
else if (b>a){
     console.log('b is greatr:' + b);
}*/


/*3.8.Vowel or Consonant
let a = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
let b = ['a','e','i','o','u'];
let c = prompt('Enter the character:').toLowerCase();
if (b.includes(c)) {
    console.log('Vowel');
} else if (a.includes(c)) {
    console.log('Consonant');
} else {
    console.log('Invalid input');
}
    //ouput:a==Vowel,b==Consonant
*/


/*//3.9.Switch Cases//

let a=Number(prompt('enter the a value'));
let b=Number(prompt('enter the b value'));
let n=Number(prompt('enter your choice'));
let c;
switch(n){
    case 1:
        c=a+b;
        console.log('Addition:'+c);
        break;
    case 2:
        c=a-b;
        console.log('Subtraction:'+c);
         break;
    case 3:
         c=a*b;
        console.log('Multiplication:'+c);
         break;
    case 4:
        c=a/b;
        console.log('Division:'+c);
        break;
    case 5:
         c=a%b;
         console.log('Remainder:'+c);
         break;
     default:
         console.log('none');
         break;
}*/


/*4.10.Natural Numbers
let a=10
for(let i=1;i<=a;i++){
    console.log(i);
}
//output:1,2,3,4,5,6,7,8,9,10    
*/


/*4.11.Multiplication of five/
let a = 5;
for (let i = 1; i <= 10; i++) 
{
  console.log(a+" * "+ i +" = "+(a * i));
}
//output:5*1=5
5*2=10
5*3=15
5*4=20
5*5=25
5*6=30
5*7=35
5*8=40
5*9=45
5*10=50
*/


/*4.12.Sum of Digits
let num = Number(prompt('Enter a number:'));
let sum = 0;
for(let i=0;i<=num;i++){
    sum += i;          
}
console.log('Sum of digits:', sum);

//output:5==15
*/

/*4.13.Reversing a number
let r;
let n=Number(prompt('enter the number'));
let rev=0;
while(n > 0) {
            r=n%10;
        rev=rev*10+r;
        n=parseInt(n/10);
}
  console.log(rev);

  //output:1012==2101
*/


/*4.14.Prime Number between 1-50
for (let i = 2; i <= 50; i++) 
{
    let prime = 1;

    for (let j = 2; j < i; j++) 
    {
        if (i % j === 0) 
        {
            prime = 0;
            break;
        }
    }

    if (prime) 
    {
        console.log(i);
    }
}

//output:2,3,5,7,11,13,17,19,23,31,37,41,43,47
*/


/*5.15.let str = prompt('Enter a string:');
let count = 0;
for (let i = 0; i < str.length; i++) 
    {
    let ch = str[i].toLowerCase();
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') 
        {
        count++;
        }
    }
console.log('Number of vowels:', count);

//output:loki
//Number of vowels:2
*/

/* 5.16.Palindrome String
let str = prompt('Enter a string:');
let Palindrome = true;

for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
        Palindrome = false;
        break;
    }
}
if (Palindrome) {
    console.log('Yes');
} else {
    console.log('No');
} 
    //output:lolol==Yes
//lolo==No
 */


/*5.17.Reverse a string
let str = prompt('Enter a string:');
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log(reversed);

//output:lokesh reddy==ydder hsekol
*/


/*5.18.Replace the spaces with '-'
let str = prompt('Enter a string:');
let replace = str.replace(/ /g, '-');
console.log(replace);

//output:lokesh reddy yama==lokesh-reddy-yama
*/

/*5.19.No.of Words In a Sentence
let sentence = prompt('Enter a sentence:');
let words = sentence.trim().split(/\s+/);
console.log('Word count:', words.length);
*/

/*6.20.Largest Array Element
let arr = [12, 5, 81, 200, 44];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log('Largest element:' + max);

//output:200
*/


/* 6.21.Reverse of an Array
let arr = [1, 2, 3, 4, 5];
let n = arr.length;

for (let i = 0; i < Math.floor(n / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[n - 1 - i];
    arr[n - 1 - i] = temp;
}
console.log(arr);

//output:5,4,3,2,1
*/


/*6.22.Element existence in an array
const arr = [1, 2, 3, 4, 5];
const target = 2;
if (arr.includes(target)) {
  console.log("Element exists in an array.");
} else {
  console.log("Element does not exist in the array.");
}

//output:Element exists in an array.
*/

/*6.23.Adding of two arrays
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const add = arr1.concat(arr2);
console.log(add); 

// output: [1,2,3,4,5,6]
*/

/*6.24.Removing Duplicate numbers
const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); 

// output: [1, 2, 3, 4, 5]
*/


/*6.25.Sum of Numbers
let arr = [];
let n = prompt("Enter the number of elements:");
for (let i = 0; i < n; i++) {
  let element = prompt("Enter element:");
  arr.push(Number(element)); 
}
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i]; 
}
console.log("Sum of all elements in the array is:", sum);
*/


/*6.26.Factorail
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5)); 

// Output: 120
*/


/*7.27.Max Number
function getMax(arr) 
{
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) 
  {
    if (arr[i] > max) 
    {
      max = arr[i];
    }
  }
  return max;
}
console.log(getMax([4, 9, 2, 11, 3])); 

// Output: 11
*/

/*7.28.Checking number is Prime/not
function isPrime(num) {
  if (num <= 1) {
     return false;
  } 
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0)
     {
      return false; 
    }
  }
  return true; 
}
console.log(isPrime(11)); 
// Output: true
console.log(isPrime(4));
// Output: false
*/


/*7.29.Upper case Writing
function toTitleCase(str) {
  return str.replace(/\b\w/g, function(char) 
  {
    return char.toUpperCase();
  });
}
console.log(toTitleCase("hello world")); 
// Output: "Hello World"
*/


/*8.30.Creating a student object properties
const student = {
  name: "Alice",
  age: 20,
  marks: 85
};
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Marks:", student.marks);

//output: Name: Alice
 Age: 20
Marks: 85
*/

/*8.31.getdetails
const student = {
  name: "Alice",
  age: 20,
  marks: 85,
  getDetails: function() {
    console.log("Name: " + this.name + ", Age: " + this.age + ", Marks: " + this.marks);
  }
};
student.getDetails();  

// Output: Name: Alice, Age: 20, Marks: 85
*/


/*8.32.nested objects
const company = {
  name: "tech Solutions",
  ceo: "John Smith",
  departments: {
    IT: "information technology",
    HR: "human resources",
    Finance: "finance department"
  }
};
console.log( company.ceo);
console.log( company.departments.IT);

//output:  john smith,information technology
*/

/*8.33.
function getKeys(obj) 
{
  return Object.keys(obj);
}
const person = { name: "John", age: 30, city: "New York" };
console.log(getKeys(person)); 

// Output: ["name", "age", "city"]
*/

/*3.34.No.of properties
function countProperties(obj) {
  return Object.keys(obj).length;
}
const student = {
  name: "Alice",
  age: 20,
  marks: 85
};
console.log(countProperties(student)); 

// Output: 3
*/
