// Formula BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in variables

const johnMass = parseFloat(prompt("Enter John's mass in kg"));
const markMass = parseFloat(prompt("Enter Mark's mass in kg"));

// 2. Store Mark's and John's height in variables
const johnHeight = parseFloat(prompt("Enter John's height in meters"));
const markHeight = parseFloat(prompt("Enter Mark's height in meters"));

// 3. Calculate both their BMI
const johnBMI = johnMass / (johnHeight * johnHeight);
const markBMI = markMass / markHeight ** 2;

// 4. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
const markHigherBMI = markBMI > johnBMI; // True or False

console.log(`Mark's BMI is ${markBMI} and John's BMI is ${johnBMI}`);
const result = markHigherBMI ? "Mark has a higher BMI than John." : "John has a higher BMI than Mark."
console.log(result);

if (markHigherBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than John's BMI ${johnBMI}`);
} else {
  console.log(`John's BMI ${johnBMI} is higher than Mark's BMI ${markBMI}`);
}
