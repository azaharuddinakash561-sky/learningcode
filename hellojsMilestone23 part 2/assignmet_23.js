// problem 1

function calculateTax(income, expenses) {
   if(typeof income !== 'number'||
     typeof expenses !== 'number'||
     income < 0|| 
     expenses < 0 ||
     income < expenses){
        return "Invalid Input";
    }  
    const difference_In_Ex = income - expenses;
    const tex = difference_In_Ex * 0.20;  
    return tex;
}
// let econome_Text = calculateTax(10000, 3000);
// console.log(econome_Text);
// problem 2
function sendNotification(email) {
  // Check if email contains '@'
  if (!email.includes('@')) {
    return "Invalid Email";
  }

  // Split username and domain
  const parts = email.split('@');
  const username = parts[0];
  const domain = parts[1];

  // Create notification message
  return `${username} sent you an email from ${domain}`;
}

// console.log(sendNotification("zihad.ph@gmail.com"));
// console.log(sendNotification("zihad.phgmail.com"));

// problem 2 try 1 time 

function sendNotification(email) {
    if(!email.includes('@')){  //jode email a na taka includes('@')tahola 
        return "Invalid Email";
    }
    let parts = email.split('@')
    let username = parts[0];
    let domain = parts[1];
    return `${username} sent you an email from ${domain}`;

}
// console.log(sendNotification('zihad.ph@gmail.com'))
// console.log(sendNotification('zihad.phgmail.com'))

// problem 3
function checkDigitsInName(name) {
    if (typeof name !== "string") {
        return "Invalid Input";
    }

    return /\d/.test(name);
}
// console.log(checkDigitsInName("Raju123"));
  // true
// checkDigitsInName("Raju");      // false
// checkDigitsInName(456);         // "Invalid Input"
// checkDigitsInName("John9Doe");  // true
// problem 4

function calculateFinalScore(Obj) {
    const student = {
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: true
    }; 


    // calculateFinalScore({
    //     name: "Rajib",
    //     testScore: 40,
    //     schoolGrade: 20,
    //     isFFamily: false
    // });




    if(typeof Obj !== "object" || student  === null ){
        return 'invalid Input';
    }

    const {name, testScore, schoolGrade, isFFamily}= Obj;
    
    if(typeof name !== "String" ||
         typeof testScore !== 'number' || testScore <= 50 
         || typeof schoolGrade !== 'number'|| schoolGrade <= 30 ||
         typeof isFFamily !== 'boolean'){
        return 'invalid input';
    }

    let finalScore =  testScore + schoolGrade;
    if(isFFamily){
        finalScore += 20;
    }

    return finalScore >= 80;

    
}

console.log(calculateFinalScore("Rajib"))