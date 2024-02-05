/**
 * year will be a leap year if the year is divisble by 4
 * */ 

const isLeapYear = (year) => {
    if(year % 4 === 0){
        return true;
    }
    else {
        return false;
    }
}

const checkLeapYear  =  isLeapYear(2030)
console.log(checkLeapYear)


/**
 * 1. Those year that is not divisbble by 100. if the year is divisble bby 4:
 * will be the leap year
 * 2. if the year is divisble by 400 then it will be the leap yearodd
 * */ 

const isLeapYear2 = (year) => {
    if(year % 100 !== 0  && year % 4 === 0){
        return true;
    }
    else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else {
        return false;
    }
}

const isLeap = isLeapYear2(2000)