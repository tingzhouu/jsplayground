import moment from "moment";

const timeFuture = moment().add(70, "s");
const timeCurrent = moment();

// timeA.diff(timeB) returns (timeA - time B). If timeA is before timeB, you get a negative result.
const diffInSeconds = timeCurrent.diff(timeFuture, "seconds");
console.log("diffInSeconds", diffInSeconds); // prints -44

// if no format is specified, returns milliseconds
const diffInMilliseconds = timeCurrent.diff(timeFuture);
console.log("diffInMilliseconds", diffInMilliseconds); // prints -44999

//
// Example of a timer that goes from "1 min 59 sec" format to  "40 sec" format
setInterval(() => {
  const timeDiff = timeFuture.diff(moment());
  const durationOfTimeDiff = moment.duration(timeDiff);

  const numSeconds = durationOfTimeDiff.seconds();
  const numMinutes = durationOfTimeDiff.minutes();

  if (numMinutes === 0) {
    console.log(`${numSeconds} sec`);
  } else {
    console.log(`${numMinutes} min ${numSeconds} sec`);
  }
}, 1000);
