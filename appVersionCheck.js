import _ from "lodash";

function getMeetsMinimumAppVersion() {
  const APP_VERSION = "3.3.21";

  const minAppVersion = "3.3.22";

  const APP_VERSION_SEGMENT_LENGTH = 3;
  if (!_.isString(APP_VERSION) || !_.isString(minAppVersion)) {
    console.log("boo");
    return false;
  }

  const appVersionSplit = APP_VERSION.split(".");
  const minAppVersionSplit = minAppVersion.split(".");

  if (
    _.size(appVersionSplit) !== APP_VERSION_SEGMENT_LENGTH ||
    _.size(minAppVersionSplit) !== APP_VERSION_SEGMENT_LENGTH
  ) {
    return false;
  }

  for (let i = 0; i < APP_VERSION_SEGMENT_LENGTH; i++) {
    if (appVersionSplit[i] < minAppVersionSplit[i]) {
      return false;
    }
  }
  return true;
}

const meetsMinimumAppVersion = getMeetsMinimumAppVersion();
console.log("meetsMinimumAppVersion", meetsMinimumAppVersion);
