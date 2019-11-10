import moment from 'moment';
const now = moment(new Date())

const justNow = moment(new Date("2019-10-25T16:30:13"));

console.log('now', now.format('LLLL'));
console.log('justNow', justNow.format('LLLL'));

const difference = now.diff(justNow, 'minutes');
console.log('difference', difference);