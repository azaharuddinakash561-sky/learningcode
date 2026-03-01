// this mathod r not porper right X
function isleapYear(Year) {
    if (Year % 4 !== 0) {
        return true 
        
    }else{

        return false;
    }
}

let lipYear = isleapYear( 2022);


// console.log(lipYear);


// those year cann't  be divisible by 100, if the year is divisible by 4 then it will be a leap year
function isLeapYear(year) {

    if(year % 100 !==0 && year % 4 ===0){
        return true;
    }
    else if (year % 100 ===0 && year % 400 ===0) {
        return true;
    }else{ 

        return false;

    }
}
let isLeapYear1 = isLeapYear(2022);
let isLeapYear2 = isLeapYear(2023);
let isLeapYear3 = isLeapYear(2024);
let isLeapYear4 = isLeapYear(2026);
let isLeapYear5 = isLeapYear(2007);
let isLeapYear6 = isLeapYear(2028);
console.log(isLeapYear1, isLeapYear2, isLeapYear3, isLeapYear4, isLeapYear5, isLeapYear6);

 