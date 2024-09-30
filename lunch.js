/*
 * Modify the contents of the function below, such that:
 *
 * If we're not hungry, we want to tell ourselves to get back to work.
 * Otherwise, we want to pick something up and eat it in the lab when
 * we've got less than 20 minutes or to try a place nearby if we've
 * got between 20 and 30 minutes. If we have any more time than that,
 * we want to remind ourselves that we're in a bootcamp and that we
 * should reconsider how much time we actually have to spare.
 *
 * hungry is a Boolean, representing if you're hungry or not.
 * availableTime is a Number representing the time you have for lunch,
 * in minutes.
 */

//assignment
//comment with Francis assistance
const whatToDoForLunch = function(hungry, availableTime) {

// first thing to decide is whether or not you hungry, so thats a binary conditional, true/false. if false, command returns nothing; if true, then down the rabbit hole we go
// time only becomes a consideration if we are actually hungry, to which we have the following conditionals afterwards
// if we have less than 20 minutes, program should say: "Pick up a snack or grab something you have ready at home"
// if we have between 20 to 30 minutes, program should say, "You deserve a break and should take time to cook a tasty meal"
// if we have more than 30 minutes, program should say: "This is an intense program after all, and you should probably reconsider"

  if (!hungry) {
    console.log("I'm not hungry so I'll keep working.");
    return;
  }
  if (availableTime < 20) {
    console.log("Pick up a snack or grab something you have ready at home.");
  } else if (availableTime >= 20 && availableTime <= 30) {
    console.log("You deserve a break and should take time to cook a tasty meal.");
  } else if (availableTime >30) {
    console.log("This is an intense program after all, and you should probably reconsider,");
  } else {
    console.log("I dont know what to do!");
  }

}

whatToDoForLunch(false, 5); // Output: I'm not hungry so I'll keep working.
whatToDoForLunch(true, 15); // Output: Pick up a snack or grab something you have ready at home.
whatToDoForLunch(true, 25); // Output: You deserve a break and should take time to cook a tasty meal.
whatToDoForLunch(true, 35); // Output: This is an intense program after all, and you should probably reconsider.


/* this is my initial try; it was incorrect, the code above was with the help of LarryAI and Pedro the mentor
if whatToDoForLunch(false, >= 1) {
  console.log("I'm not hungry so I'll keep working.")
} else if whatToDoForLunch(true, <= 20) {
  console.log("I'm hungry and I have 20 minutes for lunch. I will pick up a snack or grab something I already have at home.")
} else if whatToDoForLunch(true, > 20 && <= 30) {
  console.log("I'm hungry and I have between 20 and 30 minutes to eat. I deserve a break and should take time to cook a tasty meal.")
} else whatToDoForLunch(true, >30) {
  console.log("This is an intense program after all, and I should probably reconsider and go back to work")
}

*/

  // Write your code here








//

/* the code below is what I am initially given

const whatToDoForLunch = function(hungry, availableTime) {
  console.log("I don't know what to do!");
}


 * This is some test runner code that's simply calling our whatToDoForLunch function
 * defined above to verify we're making the right decisions. Do not modify it!
 */
/*
console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);
*/

