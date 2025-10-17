const imageContainers = document.querySelectorAll('.flip-card-container');
const scoreText = document.querySelector('#currentScore');
const attemptsText = document.querySelector('#currentAttempts');

let score = 0;
let attempts = 0;
let lastClicked = null;
let clickAllowed = true;

imageContainers.forEach(function(element) {
    element.addEventListener("click", function() {

        /*Para que no se pueda auto-clickear el elemento, o si el click esta bloqueado, 
        o si es un elemento ya descubierto como correcto para no tratarlo como no descubierto*/
        if (lastClicked === element || clickAllowed == false || element.dataset.discovered == "1") return;

        element.style.transform = 'rotateY(0deg)';

        if (!lastClicked){
            lastClicked = element;
        }else{
            compareCards(element, lastClicked);
        }

    });
});

function restartGame(){
    score = 0;
    attempts = 0;
    imageContainers.forEach(function(element) {
        element.style.transform = 'rotateY(180deg)';
        element.dataset.discovered = '0';
    });
    scoreText.innerHTML = score;
    attemptsText.innerHTML = attempts;
}

function compareCards(firstCard, secondCard){
    if(firstCard == null || secondCard == null) return;

    clickAllowed = false;    
    attempts++;

    if(firstCard.dataset.name === secondCard.dataset.name){
        score += 100;
        scoreText.innerHTML = score;
        firstCard.dataset.discovered = '1';
        secondCard.dataset.discovered = '1';        
        clickAllowed = true;
    }else{
        setTimeout(() => {
            firstCard.style.transform = 'rotateY(180deg)';
            secondCard.style.transform = 'rotateY(180deg)';        
            clickAllowed = true; //Recién se puede volver a intentar luego de la animación
        }, 750); //Espera 0.75s antes de ejecutar la animación de vuelta
    }

    attemptsText.innerHTML = attempts;    
    lastClicked = null;
}