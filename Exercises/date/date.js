/*eslint-disable no-console, prefer-template*/
//1. Make a function which will return passed date object to passed format. Supported formats:
function dateFormat(date, format) {
  const currentDate = new Date(date);
  const year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1;
  let day = currentDate.getDate();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join(format);
}
console.log(dateFormat('01/12/2020', '-')); // - `dd/mm/yyyy`;
console.log(dateFormat('03/29/1992', '-')); // - `mm/dd/yyyy`;
console.log(dateFormat('1998/11/04', '-')); // - `yyyy/mm/dd`;

console.log(dateFormat('03/11/1999', '/')); // - `dd-mm-yyyy`;
console.log(dateFormat('12/11/1992', '/')); // - `mm-dd-yyyy`;
console.log(dateFormat('2017/11/18', '/')); // - `yyyy-mm-dd`;


//# Additional
//1.  Make a function which will translate passed date object to passed timezone.
function dateWithTimezone(date, timezone) {
  return new Date(date).toLocaleString('en-US', { timeZone: `${timezone}` });
}
console.log(dateWithTimezone('2012/04/10', 'Etc/GMT'));
console.log(dateWithTimezone('2012/04/10', 'Indian/Christmas'));
console.log(dateWithTimezone('2012/04/10', 'America/Toronto'));
