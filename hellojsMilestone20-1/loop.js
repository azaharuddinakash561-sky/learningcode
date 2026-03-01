let mobile = {
    brand: 'nokia',
    price: 20000,
    color: 'black',
    camera : '12mp',
    iSNew: true,
}

// use in for in object

// for(let pro in mobile ){
//     console.log(pro)
//     console.log(mobile[pro])
// }
let keys = Object.keys(mobile)

console.log(keys);

for (let key of keys){
    console.log(key , '', mobile[key]);
    
}
// console.log(mobile[key]);