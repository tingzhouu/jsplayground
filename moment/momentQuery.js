import moment from "moment";

const timeFuture = moment().add(70, "s");
const timeCurrent = moment();

const isAfter = timeCurrent.isAfter(timeFuture);
const isSameOrAfter = timeCurrent.isSameOrAfter(timeFuture);
console.log("isAfter", isAfter); // prints false
console.log("isSameOrAfter", isSameOrAfter); // prints false

const isBefore = timeCurrent.isBefore(timeFuture);
const isSameOrBefore = timeCurrent.isSameOrBefore(timeFuture);
console.log("isBefore", isBefore); // prints true
console.log("isSameOrBefore", isSameOrBefore); // prints true

const isSame = timeFuture.isSame(timeFuture);
console.log("isSame", isSame); // prints true
