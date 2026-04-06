
function getRandomFact() {
    const facts = [
        "Люди сміються в середньому 15 разів на день",
        "Найкоротша війна тривала 38 хвилин",
        "Мед ніколи не псується",
        "Осьминоги мають 3 серця",
        "Банани — це ягоди"
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
}

console.log(getRandomFact());