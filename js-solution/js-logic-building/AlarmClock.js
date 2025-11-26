const prompt = require('prompt-sync')();

function setAlarm(hour, minute) {
  const now = new Date();
  const alarmDate = new Date();

  alarmDate.setHours(hour);
  alarmDate.setMinutes(minute);

  const diffrence = alarmDate - now;
  if (diffrence < 0) {
    console.log('Please provide future time');
    return;
  }
  setTimeout(() => {
    console.log('Time is up! Alarm Alarm Alarm....');
  }, diffrence);
  console.log(now, alarmDate, diffrence);
}
let hour = acceptInputFromUser(
  'What hour should the alarm go off?: ',
  23,
  'Please enter a valid value for hour. Hour should be a positive integer between 0 and 23'
);
let minute = acceptInputFromUser(
  'What minute should the alarm go off?: ',
  59,
  'Please enter a valid value for minute. Minute should be a positive integer between 0 and 59'
);
setAlarm(hour, minute);

function acceptInputFromUser(promptMessage, maxValue, invalidValueMessage) {
  let result = null;
  while (result === null) {
    result = prompt(promptMessage);
    result = parseInt(result);
    if (!Number.isInteger(result) || result < 0 || result > maxValue) {
      console.log(invalidValueMessage);
      result = null;
    }
  }
  return result;
}
