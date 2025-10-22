const user = {
  id: 101,
  name: "Aldo",
  age: 34,
  address: { city: "CDMX", zip: "01120" },
  roles: ["dev", "lead"],
  stats: { commits: 120, reviews: 45 },
  getLabel() { return `${this.name} (${this.id})`; }
};

function Logger(prefix) {
  this.prefix = prefix;
}

Logger.prototype.log = function(msg) { console.log(this.prefix + msg); };

/* ENUNCIADOS:

Ejercicio 1 — this en métodos vs funciones sueltas

Tarea: Explica y demuestra con código qué valor tiene this cuando llamas user.getLabel() vs const f = user.getLabel; f();.
Pista: muestra cómo usar bind para que f() conserve this.

Ejercicio 2 — Arrow function y this

Tarea: Crea un objeto con un método que dentro use un setTimeout para incrementar un contador en this. Implementa dos versiones: una con function y otra con =>. Muestra por qué una necesita bind o self = this.
Firma: function createTimerObj() { } devuelve objeto con método start().

Ejercicio 3 — Diferencia hoisting: function declaration vs function expression

Tarea: Escribe un ejemplo que llame a una función antes de declararla usando function foo(){} y otro con const bar = function(){}; explica diferencias de hoisting.
Firma: no aplica (ejemplo + explicación).

Ejercicio 4 — call, apply, bind en práctica

Tarea: Implementa invokeWithContext(fn, ctx, argsArray) que llame fn con ctx usando call, apply o bind según corresponda; demuestra con user.getLabel y con Logger.prototype.log.
Firma: function invokeWithContext(fn, ctx, argsArray) {  }

Ejercicio 5 — Paradoja de this con arrow methods en prototypes

Tarea: Añade un método arrow a Logger.prototype y compara comportamiento con método normal al instanciar new Logger('> '). Explica por qué no funciona como se espera.
Firma: no aplica (ejemplo + explicación).

Ejercicio 6 — Encadenamiento y this en métodos encadenables

Tarea: Implementa Chainable que permita Chainable().step1().step2().value() usando this correctamente.
Firma: function Chainable(initial) { }
Pista: cada método debe retornar this excepto value().

Ejercicio 7 — Closure + this

Tarea: Crea createCounter(obj) que añade a obj dos métodos inc() y get() que compartan un contador privado. Asegura que el contador no pueda modificarse desde afuera y que this siga apuntando al objeto cuando se usa obj.inc() como callback.
Firma: function createCounter(obj) { }

Ejercicio 8 — Variables: var, let, const y bucles

Tarea: Explica y demuestra con código por qué usar var en un for con setTimeout produce valores inesperados, y corrige usando let.
Firma: no aplica (ejemplo + corrección).

Ejercicio 9 — Método que pierde this cuando se destruye el objeto

Tarea: Dado const f = obj.method; obj = null; f() — muestra comportamiento y solución (por ejemplo bind o usar closure para capturar referencias).
Firma: no aplica (ejemplo + solución).

Ejercicio 10 — this en clases ES6 vs funciones constructoras

Tarea: Implementa una clase CounterClass y una función constructora CounterConstructor con el mismo API. Demuestra diferencias cuando se omite new.
Firma: class CounterClass {  } and function CounterConstructor() {  }

Ejercicio 11 — Arrow functions como métodos en objetos literales

Tarea: Crea un objeto con una propiedad arrow-method y otra función normal; compara this en ambos cuando se llaman desde el objeto y cuando se extraen a una variable.
Firma: const o = { a: () => this, b() { return this } }.

Ejercicio 12 — Rebinding con bind y creación de helpers

Tarea: Implementa const once = (fn, ctx) => { // devuelve wrapper que solo ejecuta fn una vez con ctx }. Asegúrate de que this dentro de fn sea ctx si se provee.
Firma: function once(fn, ctx) { }

Ejercicio 13 — Currying que respeta this

Tarea: Implementa curryThis(fn) que permite currificar una función y que, al ejecutarse, respete el this del llamador. Ej: const c = curryThis(function(a,b){ return this.x + a + b }); objMethod = c(1); objMethod.call({x:10},2) → 13.
Firma: function curryThis(fn) { }
Pista: devuelve función parcialmente aplicada que usa apply con this.

Ejercicio 14 — Mixins y this

Tarea: Implementa mixin(target, source) que copie métodos del source al target.prototype preservando acceso a this del target (para clases). Muestra ejemplo con class A {} y const m = { greet() { return this.name } }.
Firma: function mixin(targetClass, source) { }

Ejercicio 15 — Evaluar this en strict vs non-strict mode

Tarea: Crea ejemplos donde this sea undefined en strict mode y window (o global) en non-strict. Explica impacto en funciones sueltas y en callbacks.
Firma: no aplica (ejemplo + explicación).

Ejercicio 16 — this en eventos del DOM y addEventListener

Tarea: Crea un componente DOM (elemento button) con un handler que use this. Muestra la diferencia entre el.addEventListener('click', obj.method) y el.addEventListener('click', obj.method.bind(obj)).
Firma: no aplica (demo en DOM).

Ejercicio 17 — Variables y closures en loops asíncronos avanzados

Tarea: Implementa asyncMap(arr, asyncFn) que itera arr, ejecuta asyncFn con índice y valor, y devuelve resultados en orden correcto. Demuestra problemas si no se captura bien i.
Firma: async function asyncMap(arr, asyncFn) { }

Ejercicio 18 — Shadowing y comportamiento de variables en scopes anidados

Tarea: Escribe ejemplo con variable x en scope global, función A declara let x, función B interna declara var x y modifica; muestra cómo cambia y por qué. Explica hoisting y shadowing.
Firma: no aplica (ejemplo + explicación).

Ejercicio 19 — Transformar métodos que usan this para ser puramente funcionales

Tarea: Dado un objeto con métodos que mutan estado usando this, escribe una función toPure(obj) que genere nuevas funciones puras (no mutan, reciben el estado y devuelven nuevo estado). Ejemplo: { inc() { this.count++ } } → inc(state) => newState.
Firma: function toPure(obj) { }
Pista: usa Object.entries, function.prototype.toString() solo si quieres; una implementación práctica puede requerir reescribir manualmente.

Ejercicio 20 — Debug avanzado: identificar por qué this es undefined en un proyecto real

Tarea: Te doy un snippet con fallo; debes localizar el porqué this es undefined y proponer 3 soluciones viables (bind, arrow, closure).
Snippet (ejemplo):

class API {
  constructor() { this.token = 'abc' }
  request() { return fetch('/x', { headers: { Authorization: this.token } }) }
}
const api = new API();
setTimeout(api.request, 1000); // falla: this.token undefined

*/

/* RESOLUCION: */

//Ejercicio 1 - this en métodos vs funciones sueltas
//Aquí, no hay problema porque aquí tiene como this al objeto llamado (Implicit binding)
console.log(user.getLabel());

//Aquí se está asignando la función getLabel a f, pero f no tiene un contexto, solo recibe la función
//Por ello, al ser llamada la función (f) devuelve undefined
const f = user.getLabel;
console.log(f());

//Creamos una función f que vinculamos con user para que sea su contexto (Explicit binding)
//En este caso, lanza la función correctamente porque sí cuenta con el contexto
const fWithBind = user.getLabel.bind(user);
console.log(fWithBind());

//Ejercicio 2 - Arrow function y this
const createTimerObj = {
    normalCounter: 0,
    arrowCounter: 0,
    createTimerObj: function(){ //This es el createTimerObj objeto (Implicit binding)
        const self = this; //El contexto de esta función

        setTimeout(() => {
            self.normalCounter++;
            console.log('counter arrow: ', self.normalCounter);        
            console.log('arrow default this:', this); //Por lexical binding, su this es createTimerObj
        },100); //0.1s

        setTimeout(function() {
            self.arrowCounter++;
            console.log('counter normal:', self.arrowCounter);
            console.log('normal default this:', this); //Apunta al objeto global (default binding)
        },100); //0.1s            
    } ,
    start: function() { //This es el createTimerObj objeto (Implicit binding)
        return {normalCounter: this.normalCounter, arrowCounter: this.arrowCounter};
    }
};

createTimerObj.createTimerObj();
console.log(createTimerObj.start());

//Ejercicio 3 - Diferencia hoisting: function declaration vs function expression
foo(); //Lanza normal porque foo es una function declaration, la cual sí está incluida en el hoisting

try{
    bar(); //Lanza error porque const bar es una function expression, por lo que no está incluida en el hoisting
}catch(e){
    console.log('Error de bar:', e);
}

function foo() {
    console.log('foo', this);
}

const bar = function() {
    console.log('bar', this);
}

foo();
bar();

//Ejercicio 4 - call, apply, bind en práctica
function invokeWithContext(fn, ctx, argsArray){
    //En este caso usaría apply porque su estructura es la más similar (el arreglo al final)
    return fn.apply(ctx, argsArray);
}

const noCtxGetLabel = user.getLabel;
console.log(invokeWithContext(noCtxGetLabel,user,[])); //Se le asigna context user, y no pasa params

const logger = new Logger();
const loggerContext = { prefix: 'REAL PREFIX - ' };
invokeWithContext(Logger.prototype.log,loggerContext,['ESTE ES UN MENSAJE']); //Se asigna contexto y su mensaje

//Ejercicio 5 - Paradoja de this con arrow methods en prototypes
Logger.prototype.example1 = function() { console.log('normal:', this); };
Logger.prototype.example2 = () => { console.log('arrow:', this); };
const newLogger = new Logger('> ');
//En el método normal, toma como contexto la instancia en cuestión
newLogger.example1();
//En el método arrow, toma como contexto al objeto global por estar siendo definido como prototype 
//y no dentro de una función como un atributo de un objeto o similar de dónde heredar el contexto
newLogger.example2();

//Ejercicio 6 - Encadenamiento y this en métodos encadenables
function Chainable(initial) {
    this.initialValue = initial;
}

Chainable.prototype.step1 = function() {
    this.initialValue += '. Paso 1 procesado';
    return this;
}

Chainable.prototype.step2 = function() {
    this.initialValue += '. Paso 2 procesado.';
    return this;
}

Chainable.prototype.value = function() {
    return this.initialValue;
}

const excercise6 = new Chainable('Eris el erizo').step1().step2().value();
console.log('Chainable:', excercise6);

//Ejercicio 7 - Closure + this
function createCounter(obj) {
    let counter = 0;

    obj.inc = function() {
        counter++;
    }.bind(obj); //Con esto se mantiene el this en ambos métodos

    obj.get = function() {
        return counter;
    }.bind(obj);
}

const excercise7 = { name: 'Adrian', age: 23, gender: 'male' };
createCounter(excercise7);
excercise7.inc();
console.log(excercise7.get());

// Ejercicio 8 - Variables: var, let, const y bucles
for(var i = 0; i < 5; i++){
    setTimeout(() => {
        console.log('var:', i); //Por su scope, cada iteración comparte la misma var que es del global
    },100);
}

for(let i = 0; i < 5; i++){
    setTimeout(() => {
        console.log('let:', i); //Por el scope de bloque, se usa un let i diferente cada iteración
    },100);
}

//Ejercicio 9 - Método que pierde this cuando se destruye el objeto
let object9 = { method: function() {console.log('Soy el metodo method', this);} };
const excercise9 = object9.method.bind(object9);
object9 = null;
excercise9(); //Por defecto sin bind, mostraría el objeto global, si se hace bind antes de borrar 
//Entonces conserva el contexto incluso luego de borrar el objeto

//Ejercicio 10 - this en clases ES6 vs funciones constructoras
class CounterClass{ //ES6 = sugar syntaxis o algo así
    constructor(number, increment){
        this.number = number;
        this.increment = increment;
    }
}

function CounterConstructor(number,increment){ //pre-ES6: constructor antiguo
    this.number = number;
    this.increment = increment;
}

const counterClass1 = new CounterClass(6,5);
console.log('counterClass1:', counterClass1);
try{
    //Aquí se produce un error porque las class necesitan el "new", no aceptan contextos implícitos (o default)
    const counterClass2 = CounterClass(6,5);
}catch(e){
    console.log('counterClass2:', e);
}

const counterConstructor1 = new CounterConstructor(6,5);
console.log('counterConstructor1:', counterConstructor1);
//Aquí deja pasar el error y lo pasa al scope global, lo cual los classes actuales previenen, pero este no
const counterConstructor2 = CounterConstructor(6,5);
console.log('counterConstructor2:', counterConstructor2);
console.log('this.number:', this.number);

//Ejercicio 11 - Arrow functiosn como métodos en objetos literales
const o = {
    a: () => this,
    b() {return this}
};

console.log('o.a():', o.a()); //Tiene como contexto al objeto global
console.log('o.b():', o.b()); //Tiene como contexto la instancia

const excercise11a= o.a;
console.log('excercise11a:', excercise11a()); //Tiene como contexto al objeto global
const excercise11b= o.b;
console.log('excercise11b:', excercise11b()); //Tiene como contexto al objeto global

//Ejercicio 12 - Rebinding con bind y creación de helpers
const once = (fn,ctx) => {
    let alreadyCalled = false; //Estado interno de enclosure

    return function(...args){
        if(alreadyCalled){
            console.log('Nop. El método ya fue llamado una vez.');
        }else{
            alreadyCalled = true;
            return fn.bind(ctx);
        }
    }
};

const excercise12 = {
    name: 'Soy el nombre',
    age: 321,
    methodA: function(){
        console.log( 'methodA this:', this );
    }
};

const excercise12temp = excercise12.methodA; //Apunta al global
const callOnce = once(excercise12temp, excercise12); //Asignación de la función a variable
callOnce(); //Llama con contexto
callOnce(); //Ya no puede llamar por no pasar del enclosure (alreadyCalled = true)
excercise12temp(); //Apunta al global

//Ejercicio 13 - Currying que respeta this
function curryThis(fn){

    //Con esta estructura, primero debería definirse el curryThis(fn), luego el (a), luego el (b)
    return function(a){
        return function(b){
            return fn.apply(this, [a,b]);
        }
    }

}

const excercise13 = curryThis(function(a,b){ return this.x + a + b });

const objMethod = excercise13(1);
console.log( objMethod.call({x:10},2) ); //Acá antes de poner al segundo parámetro, se define el this con call

const objMethod2 = excercise13(13);
console.log( objMethod2.bind({x:25})(12) ); //Antes de lanzar la última parte del currying, se vincula el this
console.log( curryThis(function(a,b){return a*b})(5)(6) );  //Aquí es un ejemplo liber de this y full currying

//Ejercicio 14 - Mixins y this
function mixin(targetClass, source) { //Se pueden hacer así también en vez de arrow functions
    return Object.assign(targetClass.prototype, source);
}

class A {
    constructor(name, p1, p2){
        this.name = name;
        this.p1 = p1;
        this.p2 = p2;
    }
};

const m = { greet() { return this.name } };
mixin(A, m);
const tempA = new A('Eris', 'a', 'b');
console.log(tempA.greet());

//Ejercicio 15 - Evaluar this en strict vs non-strict mode
function notStrict1(){
    console.log('notStrict1:', this);
}

function notStrictCallback(){
    console.log('notStrictCallback:', this);
}

const notStrictObject = {
    callFunction(fn) { fn(); }
};

notStrict1(); //Apunta a window/global por ser una función suelta
notStrictObject.callFunction(notStrictCallback); //Apunta a window/global, aunque haya una instancia, lo que corre es la función suelta declarada antes

//Los ejercicios de strict están en main2.js (se puede cambiar el script de index.html por main2)

//Ejercicio 16 - this en eventos del DOM y addEventListener
const excercise16 = { method() {console.log('method:', this);} };
const domElement = document.createElement('button');
domElement.innerHTML = 'BOTON sin bind';
domElement.addEventListener('click', excercise16.method);

const domElement2 = document.createElement('button');
domElement2.addEventListener('click', excercise16.method.bind(excercise16));
domElement2.innerHTML = 'BOTON con bind';

document.body.appendChild(domElement); //Su context es el elemento HTML
document.body.appendChild(domElement2); //Su context es el objeto excercise16 vinculado con bind

//Ejercicio 17 - Variables y closures en loops asíncronos avanzados
async function asyncMap(arr, asyncFn){
    const results = [];

    for(let i = 0; i < arr.length; i++){
        try{
            const result = await asyncFn(arr[i]);
            results.push(result);
        }catch(e){
            console.log('Async error:', e);
        }
    }

    return results;
}

const asyncExcercise17 = async (value) => {
    await new Promise(resolve => 
        setTimeout(resolve, 100));
        return value + 2;
};

const arrExcercise17 = [1,3,5,7,9];
const mappedArray = asyncMap(arrExcercise17, asyncExcercise17)
                    .then(result => console.log('mappedArray:', result));

//Ejercicio 18 - Shadowing y comportamiento de variables en scopes anidados
let x = 900; //Se está asignando al scope global por defecto (modo no strict)
console.log('Declaracion de x en ejercicio 18:', x);

function A2() {
    let x = 600; //Acá se produce el shadowing, como hay una variable x nueva en A2, "esconde"/"ignora" la que está en el scope más externo (global)
    console.log('En funcion A2 sin B:', x);

    function B(){
        console.log('En funcion B antes de declarar:', x); //Hoisting da undefined
        var x = 300; //Usamos var para hoisting porque con let y const lanzaría error
        console.log('En funcion B despues de declarar:', x); //Ahora solo se considera la de este scope
    }

    B();
    console.log('En funcion A2 luego de B:', x); //La variable del scope de A2 se mantiene
}

A2();
console.log('Resultado de la variable x:', x); //La variable del scope global se mantiene

//Ejercicio 19 - Transformar métodos que usan this para ser puramente funcionales
const excercise19 = {
    counter: 0,
    inc() {this.counter++}
};

function toPure(obj){
    const pureObj = {};

    for(const [key,value] of Object.entries(obj)){ //Se recorre el objeto en key value pairs, se usa const para que haya un closure en cada iteración y recuerde los value

        if(typeof value === 'function'){
            pureObj[key] = (state, ...args) => { //Definiendo la función
                const newState = {... state}; //Se produce una copia de la entrada para no tener efectos secundarios
                value.call(newState, ...args);//Llama a la función original PERO con el contexto de la copia
                return newState;
            }
        }
    }

    return pureObj;
}

const pureFunction = toPure(excercise19);
console.log('pureFunction:', pureFunction);

let state = { counter: 20 };
state = pureFunction.inc(state);
console.log('state:', state);
console.log('initial object:',excercise19);

//Ejercicio 20 - Debug avanzando: identificar por qué this es undefined en un proyecto real
class API {
  constructor() { this.token = 'abc' }
  request() { return fetch('/x', 
    { headers: { Authorization: this.token } }
    ) }
  print() { console.log(this) }
};

const api = new API();
api.print(); //Aquí el this efectivamente le pertenece a la instancia creada
console.log(api.token); //token es 'abc'

api.request.bind(new API());
api.request().then(result => console.log('api request:', result));

//Si lo llamamos de esta manera, el contexto de this va a ser undefined o window, dependiendo de la strictness
setTimeout(api.request, 1000); // falla: this.token undefined
setTimeout(api.print, 1000); // falla: this.token undefined

//Solución 1: típico bind
setTimeout(api.request.bind(api), 1000);
setTimeout(api.print.bind(api), 1000);

//Solución 2: cambiar a arrow function
setTimeout(() => api.request(), 1000);
setTimeout(() => api.print(), 1000);

//Solución 3: darle closure
const closedPrint = api.print.bind(api); //Igualmente aplica el bind para mantener contexto, sin él se iría nuevamente a undefined/window
const closedRequest = api.request.bind(api);
setTimeout(closedPrint, 1000);
setTimeout(closedRequest, 1000);
//Ojo que igual habrán errores en consola pero es por el error 404 que no puede hacer fetch de /x que no tenemos
