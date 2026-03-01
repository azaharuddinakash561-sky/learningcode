let sentence = 'i am a javascript learner';

// let rev = '';
// for (let letter of sentence){
//     rev = letter + rev;
    
    // console.log(letter)
    // console.log(rev)
// }
// console.log(rev)
// let rev = '';
// for (let i = 0; i < sentence.length; i++){
    // console.log(i)
    // console.log(sentence[i])
//     const letter = sentence[i];
//     rev = letter + rev;

// }
// console.log(rev)

const reversed = sentence.split(' ').reverse().join(" ");
console.log(reversed)

