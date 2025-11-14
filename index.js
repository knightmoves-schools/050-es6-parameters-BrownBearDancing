function calculateTotal(subtotal,shipping = 2.50) {
 return subtotal + shipping;
};

function printTopThreeHeadlines(...headlines) {
  return headlines.slice(0, 3).join('\n');

console.log(calculateTotal(10));    
console.log(
  printTopThreeHeadlines(
    "Headline One",
    "Headline Two",
    "Headline Three",
    "Headline Four"
  )
);
  
//should create a function named calculateTotal that takes two parameters subtotal and shipping and returns the sum of both values
//should set a default value for shipping to 2.50
//should create a function named printTopThreeHeadlines that takes a rest parameter list of string headlines named headlines and returns the top three headlines with a new line between each headline









