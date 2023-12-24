                                      // Chapter-5 Project

                                      // Math multiplication table
/*In this project, you will create a math multiplication table using loops. You can do 
this using your own creativity or by following some of the following suggested steps:
1. Set up a blank array to contain the final multiplication table.
2. Set a value variable to specify how many values you want to multiply with 
one another and show the results for.
3. Create an outer for loop to iterate through each row and a temp array to store 
the row values. Each row will be an array of cells that will be nested into the 
final table.
4. Add an inner for loop for the column values, which will push the multiplied 
row and column values to the temp array.
5. Add the temporary row data that contains the calculated solutions to the 
main array of the final table. The final result will add a row of values for the 
calculations. */

// Answer:
let multiplicationTable = [];
let maxValue = 10; 
for (let i = 0; i <= maxValue; i++) {
    let tempRow = [];

    for (let j = 0; j <= maxValue; j++) {
        tempRow.push(i * j);
    }
    multiplicationTable.push(tempRow);
}

// Output the multiplication table
console.log("Multiplication Table:");
console.table(multiplicationTable);



                                       // Self-check quiz
//1. What is the expected output for the following code?
let step = 3;
for (let i = 0; i < 1000; i += step) {
 if (i > 10) {
 break;
 }
 console.log(i);
}

/* Answer:
0
3
6
9
*/

//2. What is the final value for myArray, and what is expected in the console?
const myArray = [1,5,7];
for(el in myArray){
 console.log(Number(el));
 el = Number(el) + 5;
 console.log(el);
}
console.log(myArray);

/* Answer:
0
5
1
6
2
7
[1, 5, 7]*/