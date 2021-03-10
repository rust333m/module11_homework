export function getPercents(percent, num) {
  let result;
  if (percent < 0 && num >= 0) {
    result = 'Percent must be greater or equat to zero';
  }
  else if (num <= 0 && percent >= 0) {
    result = 'Number must be greater than zero';
  }
  else if (num <= 0 && percent < 0) {
    result = 'You\'ve entered incorrect values';
  }
  else {
    result = percent * num / 100;
  }
  return result;
}

