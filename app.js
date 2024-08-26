function createParagraph() {
    var wordOne = document.getElementById('wordOne').value;
    var wordTwo = document.getElementById('wordTwo').value;
    var wordThree = document.getElementById('wordThree').value; 
    var wordFour = document.getElementById('wordFour').value;
    var wordFive = document.getElementById('wordFive').value;
    var wordSix = document.getElementById('wordSix').value;
    var wordSeven = document.getElementById('wordSeven').value; 
    var wordEight = document.getElementById('wordEight').value;
    var wordNine = document.getElementById('wordNine').value;
    var wordTen = document.getElementById('wordTen').value;
    var wordEleven = document.getElementById('wordEleven').value; 
    var wordTwelve = document.getElementById('wordTwelve').value;
    var wordThirteen = document.getElementById('wordThirteen').value; 
    var wordFourteen = document.getElementById('wordFourteen').value;
    var wordFifteen = document.getElementById('wordFifteen').value;
    var wordSixteen = document.getElementById('wordSixteen').value;
    var wordSeventeen = document.getElementById('wordSeventeen').value; 
    var wordEighteen = document.getElementById('wordEighteen').value;

    var paragraph = `When you show up for a rooftop brunch, the ${wordOne} you choose to drink is very important. 
        After all, the weather is usually ${wordTwo}, the brunch lasts for ${wordThree} hours, and you don't want to get ${wordFour} too early. 
        So what should you drink? You take a look at the bar and the first ${wordFive} you come across is a bloody mary. 
        You usually love to drinking this rich, ${wordSix} cocktail, but drinking ketchup might be a little too ${wordSeven} for this occasion. 
        You don't want to feel like a vampire like you just bit your first ${wordEight}. What about a gluten-free mimosa? It seems like the most ${wordNine} choice for a summer brunch. 
        You love the ${wordTen} taste, but it also gives you a raging ${wordEleven}-ache. 
        In the end you choose a ${wordTwelve}, your usual go-to. It's ${wordThirteen}, easy to ${wordFourteen}, and goes with all the ${wordFifteen} you plan to eat. 
        Only problem is you might have to make more trips to the ${wordSixteen} than usual. ${wordSeventeen} makes you ${wordEighteen} all night long.`;

    document.getElementById('answer').innerHTML = paragraph; 
}