const logger = require('appventurez_js_custom_logger');
const { PROJECT_NAME } = "js_custom_logger"

function areAnagrams(str1, str2) {
  // Remove whitespace and convert strings to lowercase
  str1 = str1.replace(/\s/g, '').toLowerCase();
  str2 = str2.replace(/\s/g, '').toLowerCase();

  // Check if the lengths of the two strings are equal
  if (str1.length !== str2.length) {
    const error = new Error('The strings have different lengths');
    const logObject = {
      logLevel: 'error',
      event: error,
      projectName: PROJECT_NAME,
      timeZone: 'Africa/Abidjan',
    };
    logger(logObject);
    return false;
  }

  // Create frequency counters for each string
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  // Count the frequency of each character in str1
  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  // Count the frequency of each character in str2
  for (let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }

  // Compare the frequency counters
  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      const error = new Error('The strings are not anagrams');
      const logObject = {
        logLevel: 'error',
        event: error,
        projectName: PROJECT_NAME,
        timeZone: 'Africa/Abidjan',
      };
      logger(logObject);
      return false;
    }
  }

  return true;
}

// Test cases
const string1 = 'listen';
const string2 = 'silent';
console.log(`Are "${string1}" and "${string2}" anagrams?`, areAnagrams(string1, string2));

const string3 = 'hello';
const string4 = 'world';
console.log(`Are "${string3}" and "${string4}" anagrams?`, areAnagrams(string3, string4));