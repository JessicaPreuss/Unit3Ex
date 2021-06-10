console.log("This is Conditions Exercise 1");
let actualTemp = 68, desiredTemp = 70;

if (actualTemp > desiredTemp) {
console.log("Run A/C");
} else if (actualTemp < desiredTemp) {
    console.log ("Run Heat");
} else {
    console.log ("Standby");
}
console.log("This is Conditions Exercise 2");

let name1 = "Grace", name2 = "Richard", name3 = "Ava";

if (name1.length > name2.length && name1.length > name3.length) {
    console.log(name1 `has the longest name`);
} else if (name2.length > name1.length && name2.length > name3.length) {
    console.log(name2, `has the longest name`);
} else if (name3.length > name2.length && name3.length > name1.length) {
    console.log(name3 `has the longest name`);
} else if (name1.length === name2.length && name2.length === name3.length) {
    console.log( `All three names`, name1, name2,`and`, name3, `are the same length` );
} else if (name3.length === name1.length && name2.length > name1.length) {
    console.log(name2 `has the longest name`);
} else if (name1.length === name2.length && name3.length > name2.length) {
    console.log(name3 `has the longest name`);
} else if (name2.length === name3.length && name1.length > name3.length) {
    console.log(name1 `has the longest name`);
}

console.log("This is Loops Exercise")

// for loop count from 1 - 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// for loop count from 10 - 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
// while loop count from 1-10 
let i = 1; 
while (i < 11) {
    console.log(i);
    i++;
}

// while loop count from 10-1
let j = 10; 
while (j > 0) {
    console.log(j);
    j--;
}
// do while loop count from 1 - 10
let k = 1
do {
    console.log(k)
    k++;
}

while (k < 11)
// do while loop count from 10 - 1
let l = 10
do {
    console.log(l)
    l--;
}

while (l > 0)
// for..of loop with array : const numbers = [1,2,3,4,5,6,7,8,9,10]; log numbers
const numbers = [1,2,3,4,5,6,7,8,9,10];
for (let number of numbers) {
    console.log(numbers);
}