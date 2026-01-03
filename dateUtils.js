// Constants that provide a map for the days of the week and months of the year:
const Week_Map = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const Month_Map = { January: 1, February: 4, March: 4, April: 0, May: 2, June: 5, July: 0, August: 3, September: 6, October: 1, November: 4, December: 6 }


//Function to determine if year provided is a leap year:
function isLeapYear(year) {

    const isMultipleOf4 = year % 4 === 0 
    const isMultipleOf100 = year % 100 === 0 
    const isMultipleOf400 = year % 400 === 0 

    if (isMultipleOf4) {
        if (isMultipleOf100) {
            if (isMultipleOf400) {
                return true;
            }
            return false;
        }
        return true;
    }   
    return false;
}

function offsetSpecialDates(month, year, monthValue, firstTwoYearDigits) {
    const isMonthJanOrFeb = (month === "January" || month === "February");

    if (isLeapYear(year) && isMonthJanOrFeb) {
        monthValue = monthValue - 1;
    }

    switch (firstTwoYearDigits) {
        case 16:
            monthValue = monthValue + 6
            break;
        case 17:
            monthValue = monthValue + 4
            break;
        case 18:
            monthValue = monthValue + 2
            break;
        case 20:
            monthValue = monthValue + 6
            break;
        case 21:
            monthValue = monthValue + 4
            break;  
    }

    return monthValue;
}

// Function to get the correct month value
function getMonthValue(month, firstTwoYearDigits, year) {
    let monthValue = Month_Map[month];

    monthValue = offsetSpecialDates(month, year, monthValue, firstTwoYearDigits)

    return monthValue;
}

//getTheDayOfTheWeek Function
function getDayOfTheWeek(year, month, date) {
    
    
    // Normalize month: lowercase, then capitalize first letter
    month = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();

    // Step 1: 
    year = String(year);
    const firstTwoYearDigits = year.substring(0,2);
    const lastTwoYearDigits = year.substring(2,4);
    
    // const lastTwoYearDigits = year % 100;
    const dividedBy12 = Math.floor(lastTwoYearDigits / 12)
    
    // Step 2: 
    const remainerOfDividedBy12 = lastTwoYearDigits % 12

    // Step 3:
    const dividedBy4 = Math.floor(remainerOfDividedBy12 / 4)

    // Step 4: The date is already available, but only the number should be stored if the user adds any letters after the number like 16th or 20th.
    date = parseInt(date, 10);

    // Step 5:
    const monthValue = getMonthValue(month, firstTwoYearDigits, year)

    // Step 6:
    const dayOfWeekValue = ((dividedBy12 + remainerOfDividedBy12 + dividedBy4 + date + monthValue) % 7);

    // Return the name of the day of the week for the date provided by user:
    return Week_Map[dayOfWeekValue];
}

//make Calendar Function:
function makeCalendar(year) {
    const months = Object.keys(Month_Map);

    const daysInMonth = {
        January: 31,
        February: isLeapYear(year) ? 29 : 28,
        March: 31,
        April: 30,
        May: 31,
        June: 30,
        July: 31,
        August: 31,
        September: 30,
        October: 31,
        November: 30,
        December: 31,
    };

    for (let m = 0; m < months.length; m++) {
        const month = months[m];
        for (let d = 1; d<=daysInMonth[month]; d++) {
            const dayOfWeek = getDayOfTheWeek(String(year), month, String(d));
            console.log(`${m+1}-${d}-${year} is a ${dayOfWeek}.`);
        }
    }
    
}

// Export the function (make the available in main.js
module.exports = { getDayOfTheWeek, makeCalendar };