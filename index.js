// Import functions
const { getDayOfTheWeek, makeCalendar } = require("./dateUtils");
const readline = require("readline-sync");

// Ask user for inputs
console.log("This program has 2 functions: \n Function 1: Provides the day of the week for any date between the 1600s to the 2100s (Enter the Year, Month and Date to use this function). \n Function 2: Provides a calendar for any year between the 1600s to the 2100s (Only provide a year, then hit enter twice to use this function).")
const year = readline.question("Enter a year: ");
const month = readline.question("Enter a month (press Enter to skip): ");
const date = readline.question("Enter a date (press Enter to skip): ");

if (month && date) {
    // User entered full date
    const day = getDayOfTheWeek(year, month, date);
    console.log(`${month} ${date}, ${year} is a ${day.toLowerCase()}.`);
} else {
    // User only entered year -> print full calendar
    makeCalendar(year);
}
