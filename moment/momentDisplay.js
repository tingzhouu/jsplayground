import moment from "moment";

const fullDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log("fullDate", fullDate); // example output: Monday, Jan 1st 2020, 11:59:59pm

// To escape characters in format strings, you can wrap the characters in square brackets.
const dateWithOwnString = moment().format("[Today is] dddd");
console.log("dateWithOwnString", dateWithOwnString); // example output: Today is Sunday
