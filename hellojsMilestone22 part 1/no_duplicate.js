// // remove duplicate items from an array  

// const listclint = ['akash', 'akash', 'shanta', 'shapna', 'jorna', 'lake', 'jorna', 'pane', 'patal', 'haname',  ];


// function doubleremoverList (listclint){
//     const reaList = [];
//     for (const person of listclint) {
//         if (reaList.includes(person) === false) {
//             reaList.push(person);

//         }
//     }
//     return reaList;
// }

// const fullListPerson  = doubleremoverList(listclint);

// console.log(fullListPerson);
let arrayFst = [1, 3, 3, 4, 4, 5, 6, 6, 77];

function dublicatStop(numbers) {
    let shifMent = [];
    let shifMent1 = [];
    for (let number of numbers) {
        if (!shifMent.includes(number) && !shifMent1.includes(number)) {
            shifMent.push(number)
            
        }else{

            shifMent1.push(number)
        }
    }
 
       return {shifMent, shifMent1}
}

let paraMet = dublicatStop(arrayFst);
console.log(paraMet);
