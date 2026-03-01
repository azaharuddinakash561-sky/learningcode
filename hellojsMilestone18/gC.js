let result = '101';
if(result >= 90 && result <= 100){
    console.log('Grade A')
}else if(result >= 80 && result <= 89){
    console.log('Grade B')
}else if(result >= 70 && result <= 79){
    console.log('Grade C')
}
else if(result >= 60 && result <= 69){
    console.log('Grade D')
}else if(result >= 0 && result <= 59){
    console.log('Grade f')
}else {
    console.log('Invalid score! Please enter a number between 0 and 100.')
}

// let score = prompt("Enter the student's score (0 - 100):");
// score = Number(score);

// let grade;

// if (score >= 90 && score <= 100) {
//     grade = "A";
// } else if (score >= 80 && score <= 89) {
//     grade = "B";
// } else if (score >= 70 && score <= 79) {
//     grade = "C";
// } else if (score >= 60 && score <= 69) {
//     grade = "D";
// } else if (score >= 0 && score <= 59) {
//     grade = "F";
// } else {
//     grade = "Invalid score! Please enter a number between 0 and 100.";
// }

// alert("The student's grade is: " + grade);