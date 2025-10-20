//Full arrow functions
const calculatorButtons = document.querySelectorAll('.calculator-button');
const answerContainer = document.querySelector('#answerContainer');

const executeOperation = operation => {
    operation = operation.replaceAll('x','*');
    try {
        //Si se deja pasar 'Error', se hace un eval de 'Error' y lanza un function('Error') medio raro
        if(operation !== 'Error'){
            operation = eval(operation);
            //En caso de decimales, redondear a aprox 6 cifras significativas en general
            if(operation%1 !== 0) operation = operation.toPrecision(6);
        } 
    }catch(e){
        operation = 'Error';
    }
    return operation;
};

const buttonFunctions = {
    '=': (operation) => answerContainer.innerHTML = executeOperation(operation),
    'CE': () => answerContainer.innerHTML = '0'
}

const updateAnswerContainer = value => {
    if(answerContainer.innerHTML === '0' || answerContainer.innerHTML === 'Error'){
        answerContainer.innerHTML = value;
    }else{
        answerContainer.innerHTML += value;
    }
    answerContainer.scrollLeft = answerContainer.scrollWidth;    
};

calculatorButtons.forEach((element) => {
    element.addEventListener('click', () => {
        const buttonValue = element.innerHTML.trim();
        buttonFunctions[buttonValue]?.(answerContainer.innerHTML) ?? updateAnswerContainer(buttonValue);
    });
});


