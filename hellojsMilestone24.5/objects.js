const nayok = {
    name : 'sakib khan',
    id: 121,
    address: 'Movie Cinema',
    isSingle: true, 
    // obejct key  ta array oo use hoi ta para
    friends: ['apu', 'Raaz', 'Salman', 'aamir'],
    moveis: [{name: 'no. 1', year: 2015}, {name: 'king khan', year :2018}],
    act: function(){
        console.log('acting like sakib khan');
    },

    // abar object ar vitor object hoi ta para 
    car: {
        brand: 'tesla',
        price : 5000000,
        made: 2025, 
        manufacturer: {
            name: 'tesla',
            ceo: 'Elon Mask'
        }
    }
}

// console.log(student)
// console.log(nayok.act())
// nayok.act()

let a = 0;
function func(a) {
    console.log(a);
    var a = 5;
    
    
}
func (10)