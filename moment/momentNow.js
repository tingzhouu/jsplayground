import moment from "moment";

// Moment Now
const currTime = moment();
console.log("currTime", currTime);
// the following also return the current time
moment(undefined);
moment([]);
moment({});

// By default, moment parses and displays date in local time.
// to parse or display a moment in UTC, use .utc()
const currTimeInLocalTime = moment().format();
const currTimeInUTCTime = moment().utc().format();
console.log("currTimeInLocalTime", currTimeInLocalTime);
console.log("currTimeInUTCTime", currTimeInUTCTime);
