// function that returns a random fact from an array of strings
function getRandomFact() {
  const facts = [
    "Honey never spoils",
    "A group of flamingos is called a 'flamboyance'",
    "Octopuses have three hearts",
    "The Eiffel Tower can be 15 cm taller in summer",
    "Bananas are berries, but strawberries are not"
  ];
  return facts[Math.floor(Math.random() * facts.length)];
}
console.log(getRandomFact());