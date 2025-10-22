//Full arrow functions
const calculatorButtons = document.querySelectorAll('.calculator-button');
const answerContainer = document.querySelector('#answerContainer');

const executeOperation = operation => {
    operation = operation.replaceAll('x','*');
    try {
        //Si se deja pasar 'Error', se hace un eval de 'Error' y lanza un function('Error') medio raro
        if(operation !== 'Error'){
            //Primero se "tokeniza" la operacion, siendo notacion infija con numeros y operadores separados
            // en un arreglo, se pasa de postfix a infix, y se procede a evaluar para calcular el resultado
            operation = evaluatePostfix(infixToPostfix(tokenize(operation)));
            //En caso de decimales, redondear a 2 cifras decimales
            if(operation%1 !== 0) operation = operation.toFixed(2);
        } 
    }catch(e){
        operation = 'Error';
    }
    return operation;
};

//Básicamente, la operación se convierte en arreglo separando por números y operadores (ejm: 37+6-3*5 = ['37', '+', '6', '-', '3', '5'])
const tokenize = expresion => expresion.match(/\d+(?:\.\d+)?|[+\-*/()%]/g);

const infixToPostfix = (operation) => {

    const result = [];
    const postfixPile = [];
    const precedence = { '+': 1, '-': 1, '*': 2, '/': 2, '%': 2, '(': 3, ')': 3 }; //Pendiente: añadir lógica de paréntesis

    for (let item of operation){

        if(!isNaN(item)){
            result.push(item);
        }else if(item === '('){ //Si es (, empieza a apilar en la pila de postfijos
            postfixPile.push(item);
        }else if(item === ')'){ //En este caso, desapila, va añadiendo a result lo que añadió en la pila de postfijos hasta que se acaba
            while(postfixPile.length && postfixPile.at(-1) !== '('){
                result.push(postfixPile.pop());
            }
            postfixPile.pop(); //Se deshace del ( en la pila
        }else{
            while(postfixPile.length && precedence[postfixPile.at(-1)] >= precedence[item]
                    && postfixPile.at(-1) !== '('){
                result.push(postfixPile.pop());
            }
            postfixPile.push(item);            
        }
    }

    while(postfixPile.length){
        result.push(postfixPile.pop());
    }

    return result;
}

const evaluatePostfix = (expression) => {
    const result = [];
    for(let item of expression){
        if(!isNaN(item)){
            result.push(Number(item));
        }else{
            const b = result.pop(); //Se extraen como b y a, porque b seria el último numero, a el penúltimo
            const a = result.pop();
            switch(item){
                case '+': result.push(a+b); break;
                case '-': result.push(a-b); break;
                case '*': result.push(a*b); break;
                case '/': result.push(a/b); break;                                    
                case '%': result.push(a%b); break;                                                    
            }            
        }
    }
    return result[0]; //El último elemento resultante tras todos los push y pop al recorrer el postfix
}

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


