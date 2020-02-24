import axios from 'axios';
import moment from 'moment';

const url = 'https://apps.apple.com/sg/app/policypal/id1118511972';
const TIME_INTERVAL_IN_MINUTES = 5;
const CURRENT_APP_VERSION = 'Version 3.3.14';

async function checkIfAppVersionHasChanged() {
  const response = await axios.get(url);
  const data = response.data;
  
  const isSameAppVersion = data.includes(CURRENT_APP_VERSION);
  const timeNow = moment().format('h:mm:ss a');
  const outputString = `Run at ${timeNow}, app version has ${isSameAppVersion ? 'not changed yet.' : 'HAS CHANGED!'}`;
  console.log(outputString);
}

setInterval(() => {
  checkIfAppVersionHasChanged();
}, TIME_INTERVAL_IN_MINUTES * 60 * 1000);
