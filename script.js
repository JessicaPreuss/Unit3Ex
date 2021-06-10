console.log("This is Conditions Exercise 1");
// let actualTemp = 68, desiredTemp = 70;

// if (actualTemp > desiredTemp) {
// console.log("Run A/C");
// } else if (actualTemp < desiredTemp) {
//     console.log ("Run Heat");
// } else {
//     console.log ("Standby");
// }
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
