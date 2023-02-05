const convertToCelsius = function(temp) {
  //(x − 32) × 5/9
  let celsiusTemp = (temp - 32) * (5/9);
  celsiusTemp = Number(celsiusTemp.toFixed(1));
  return celsiusTemp;
};

const convertToFahrenheit = function(temp) {
  //(x × 9/5 + 32)
  let fahrenTemp = temp * (9/5) + 32;
  fahrenTemp = Number(fahrenTemp.toFixed(1));
  return fahrenTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
