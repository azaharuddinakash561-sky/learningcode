// amr kaj holo sorbocho / heights number findout kora
// let heights = [65, 66, 68, 72, 78, 60, 65, 66]

// function getMax(numbers) {
    
//     let max = numbers[0];
//     for (const num of numbers) {
        
//         if(num > max){
//             max = num;
//         }
//     }return max ;

    
// }
// let max = getMax(heights);
// console.log('max tallest value: ',max);

let heights = [65, 66, 68, 72, 78, 60, 65, 66]

function tallestvalue(numbers) {
    let max = numbers[0]  //ok i say this like 0 index 65 then loop // contion compair to the numbers
    for (const num of numbers) {
        if (max > num) {
            max = num;
        }
    }return max;
}

console.log(tallestvalue(heights))

