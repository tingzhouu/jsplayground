import axios from 'axios';
import _ from 'lodash';

const url = 'https://api.github.com/users';

async function fetchPublicReposCount(username) {
  const response = await axios.get(`${url}/${username}`);
  return response.data.public_repos;
}

const users = [ // github usernames that we want to fetch info about from Github API.
  'ArfatSalman',
  'octocat',
  'norvig'
];

async function fetchAllCounts(users) {
  // when we use .map function, there is a callback function for each user in the array.
  // how do we use async await to ensure that we process the results only when the function for all users are complete?
  const userPublicRepos = _.map(users, async (user) => {
    const numPublicRepos = await fetchPublicReposCount(user);
    return numPublicRepos; // we return a Promise for each user
  });
  return Promise.all(userPublicRepos); // Promise.all receives an array of promises
  // as input and returns a promise as an output.
  // The returned promise resolves with an array of all promise resolutions
  // or rejects with the first rejection.
}

async function run() {
  const count = await fetchAllCounts(users);
  console.log('count', count); // returns an array of each user's public repo count
  console.log('_.sum(count)', _.sum(count)); // we can process and calculate sum of all users' public repo count
}
run();