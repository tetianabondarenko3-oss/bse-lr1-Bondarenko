// function that returns a random fact from an array of strings
function getRandomFact() {
  const facts = [
    "The Great Wall of China is over 13,000 miles long.",
    "Honey never spoils and can last thousands of years.",
    "A group of flamingos is called a 'flamboyance'.",
    "The human brain uses about 20% of the body's energy.",
    "Octopuses have three hearts and blue blood."
  ];
  return facts[Math.floor(Math.random() * facts.length)];
}
console.log(getRandomFact());