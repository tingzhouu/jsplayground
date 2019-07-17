




import _ from 'lodash';
const arr = [1, 2, 3];
_.forEach(arr, num => console.log(num));

console.log('-------------');

function main() {
  _.forEach(arr, num => {
    setTimeout(() => {
      console.log(num * 5);
    }, num * 1000);
  })
}
main();