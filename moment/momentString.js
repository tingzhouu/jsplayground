import moment from "moment";

// first check if string matches ISO 8601 format
//
// 2020-05-22T15:23:00Z refers to the UTC time, you can take it as UK time, 8 hours before SG time
// 2200hrs in SG is 1400hrs in UK
//
const isoFormattedDate = moment("2020-05-22T15:00:00Z");
console.log("isoFormattedDate", isoFormattedDate); // prints Moment<2020-05-22T23:00:00+08:00>

// second check if string matches RFC 2822 Date time format
const rfcFormattedDate = moment("22 May 2020 15:00 GMT");
console.log("rfcFormattedDate", rfcFormattedDate); // prints Moment<2020-05-22T23:00:00+08:00>

// falls back to new Date(string)
const jsDate = new Date("2020-05-22T15:00:00"); // note that there is no 'Z' at the end
// this is taking your current timezone as the time
console.log("jsDate", jsDate); // prints 2020-05-22T07:00:00.000Z

// If you know the format of an input string, you can use that to parse a moment.
// get first day of the month, defaults to current year
const justMonth = moment("January", "MMMM");
console.log("justMonth", justMonth); // prints Moment<2020-01-01T00:00:00+08:00>
