// const str = 'sayem';
// console.log(str.slice(1))
// console.log(`${str[0].toUpperCase()}${str.slice(1)}`)



function password(obj) {
    if(typeof obj !== "object" || Array.isArray(obj)){
        return "invalid"
    }
    else if(!obj.name || !obj.birthYear || !obj.siteName){
        return "invalid"
    }

    const {name, birthYear, siteName} = obj;
    const birthYearString = birthYear.toString();
    if(birthYearString.length !== 4){
        return "invalid";
    }
    
    const websiteFirstLetter = siteName[0].toUpperCase();
    const websiteName = websiteFirstLetter + siteName.slice(1);
    
    const password = `${websiteName}#${name}@${birthYear}`;
    return password;
}
const makePassWord = {
    name: 'Kolimuddin',
    birthYear: 1996, 
    siteName: 'google'
}

console.log(password(makePassWord));

