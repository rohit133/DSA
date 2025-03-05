/** 
 * @param date 
 */

function getNumberOfDays(date) {
    let dateArr = date.split('/'); // conveting the string date into date arr => 02/02/2025 = ['02','02','2025']
    let formattedDate = new Date(`${dateArr[1]}/${dateArr[0]}/${dateArr[2]}`).getTime() // getting the time in miliseconds => 
    let curretndate = new Date().getTime(); // get the current time in milisecods => '1739179309689'
    return Math.floor((curretndate - formattedDate) / (1000 * 60 * 60 * 24));  
    
    /*
    returing the difference of days using the formula Math.floor(diff/(1000*60*60*24)) 
        - diff = time difference betweent the curretnDate and the givenDate
        - In an second there's a 1000 miliseonds 
        - In a min there are 60 seconds
        - In an hour there are 60 mins
        - In a day there are 24 hours
    */
}
console.log(getNumberOfDays('02/02/2025'));

module.exports = getNumberOfDays;