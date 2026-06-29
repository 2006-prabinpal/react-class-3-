// Declare a variable named age.
// The value is a STRING because it is inside quotation marks.
let age = "21";

// The switch statement compares the value of age
// with each case using strict equality (===).
switch (age) {

  // This case checks if age is the string "21".
  case "21":
    console.log("Age is 21");
    break; // Stops checking other cases.

  // This case checks if age is the string "22".
  case "22":
    console.log("Age is 22");
    break;

  // Runs if none of the above cases match.
  default:
    console.log("No matching age found.");
}
