const array = [];

function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "fizzBuzz";
  } else if (number % 3 === 0) {
    return "fizz";
  } else if (number % 5 === 0) {
    return "buzz";
  }
}
