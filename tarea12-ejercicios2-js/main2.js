'use strict';

//Este es exclusivamente para cuestiones con el modo strict
function strict1(){
    console.log('strict1:', this);
}

function strictCallback(){
    console.log('strictCallback:', this);
}

const strictObject = {
    callFunction(fn) { fn(); }
};

strict1(); //Apunta a undefined porque en modo strict se apunta ahí en vez de global para funciones sueltas
strictObject.callFunction(strictCallback); //La función declarada del callback es suelta, por lo que apunta a undefined
