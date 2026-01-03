# Day of the Week Calculator & CLI Calendar

A Node.js command-line interface (CLI) tool that mathematically calculates the day of the week for any date between the 1600s and the 2100s. It creates a calendar without relying on JavaScript's built-in `Date` object logic.

## Features

* **Day Calculation:** Input a specific date (Year, Month, Date) to find out exactly what day of the week it falls on.
* **Full Year Calendar:** Input just a year to generate a list of every date in that year with its corresponding day of the week.
* **Leap Year Handling:** Correctly accounts for leap years and century rules.
* **Custom Algorithm:** Uses a variation of Zeller's Congruence/Key Value method to perform calculations manually.

## Prerequisites

To run this project, you need:
* [Node.js](https://nodejs.org/) installed on your machine.

## Installation & Setup

1.  **Clone the repository** (or download the files):
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **File Structure:**
    Ensure your code is split into the following two files:
    * `dateUtils.js` (Contains the logic functions: `getDayOfTheWeek`, `makeCalendar`, etc.)
    * `index.js` (The main entry point containing user input and execution logic)

3.  **Install Dependencies:**
    This project uses `readline-sync` for user input. Run the following command in your terminal:
    ```bash
    npm install readline-sync
    ```

## Usage

Run the program using Node.js via the entry file:

```bash
node index.js
