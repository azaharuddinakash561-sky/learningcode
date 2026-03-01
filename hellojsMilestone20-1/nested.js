let college = {
    name : 'mangrove', 
    class : ['11', '22'], 
    events : ['boisake', 'boimala', '16 dec'],

    uniq : {
        color: 'blue',
        result: {
            gpa: 5,
            rank: 'golden (+)'
        }
    }
}
// change rank 
college.uniq.result.rank= 'A+ in gold'


console.log(college.uniq)
console.log(college.uniq.color)
console.log(college.uniq.result)
// array ar moda change korta caila 
college.events[2] = 'kolakai'
console.log(college.events)
delete college.class;
console.log(college)