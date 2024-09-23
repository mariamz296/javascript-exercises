const convertToCelsius = function(degree) {
  let celsius = (degree - 32) * (5/9);
  let rounded = Math.round(celsius * 10) / 10;

  return rounded;
};

const convertToFahrenheit = function(degree) {
  let fahrenheit = degree * (9 / 5) + 32;
  let rounded = Math.round(fahrenheit * 10) / 10;

  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
