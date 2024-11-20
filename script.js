const facts = [
    "I am 20 years old and have a passion for exploring mountains.",
    "I love hiking and have already visited several mountain ranges.",
    "I am fascinated by the geology and ecosystems of mountainous regions.",
    "I enjoy capturing the beauty of mountains through photography.",
    "I am planning to climb one of the tallest peaks in my country next year."
];

document.getElementById('generate-fact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];
    document.getElementById('fact-display').textContent = randomFact;
});
