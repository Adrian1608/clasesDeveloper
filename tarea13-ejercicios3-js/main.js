/**
 * ENUNCIADOS:

Ejercicio 1 — Clase base + método en prototype y sobreescritura

ElectricCar hereda de Car, añade batteryCapacity y sobrescribe info() invocando el info() 
del prototipo padre (no usar super — usa Vehicle.prototype.info.call o equivalente).
Firma sugerida: clases Vehicle, Car, ElectricCar.
Restricción: demuestra la igualdad entre ElectricCar.prototype.__proto__ y Car.prototype.
Pista: prueba tanto con new como examinando la cadena de prototipos.
Ejemplo:

const tesla = new ElectricCar('Tesla','Model 3',2021,4,75);
tesla.info(); // "Tesla Model 3 (2021) — battery: 75 kWh"

Ejercicio 2 — Mixins (composición de comportamiento)

Tarea: Implementa un sistema de mixins que permita añadir capacidades reutilizables a clases.

Crea mixins EventEmitterMixin (on/off/emit) y SerializableMixin (toJSON/fromJSON estático).

Aplica ambos a una clase Device (ej: class Device extends applyMixins(Base, [EventEmitterMixin, SerializableMixin])).
Firma sugerida: function applyMixins(BaseClass, mixins) y la clase Device.
Restricción: los métodos del mixin deben poder usar this del objeto final.
Pista: mixins devuelven clases que extienden una clase pasada; usar class extends en cadena.
Ejemplo:

const d = new Device('sensor-1');
d.on('change', data => console.log(data));
d.emit('change', {value: 42});
const json = Device.toJSON(d);

Ejercicio 3 — Agregación vs composición (modelado de relaciones)

Tarea: Modela una Library que agrega Books y compone Shelfs.

Book es un objeto independiente (puede existir fuera de la Library).

Shelf pertenece exclusivamente a una Library (si la Library se clona, sus Shelfs también deben clonarse).

Implementa métodos para: library.addBook(book), library.addShelf(shelf), library.moveBook(bookId, fromShelfId, toShelfId).
Firma sugerida: clases Book, Shelf, Library.
Restricción: demuestra la diferencia: clonar un Book compartido vs clonar la Library debe deep-clonar Shelfs.
Pista: para composición, usa clonación defensiva en el constructor de Library.

Ejercicio 4 — Prototypal inheritance manual (Object.create)

Tarea: Sin usar class ni function constructora, crea objetos que formen una cadena prototípica: animalProto → mammalProto → human.

animalProto tiene método eat().

mammalProto añade warmBlooded: true.

human debe crearse con Object.create(mammalProto) y añadir propiedades propias.
Firma sugerida: no aplica (usa Object.create).
Restricción: muestra cómo hasOwnProperty distingue propiedades propias vs heredadas.
Ejemplo:

human.eat(); // funciona
console.log(human.warmBlooded); // true
console.log(human.hasOwnProperty('warmBlooded')); // false

Ejercicio 5 — Clases con campos privados y prototype methods (interoperabilidad)

Tarea: Implementa BankAccount usando campos privados de clase (#balance) y métodos públicos en prototype (ej: deposit, withdraw, toString).

Asegura que el campo privado no sea accesible desde instancias ni desde prototype.

Añade un método estático BankAccount.transfer(from, to, amount) que use los métodos públicos.
Firma sugerida: class BankAccount { #balance = 0; constructor(...) { } ... }
Restricción: demostrar que BankAccount.prototype.hasOwnProperty('#balance') es false.
Pista: los campos privados no aparecen en el objeto ni en el prototipo; muestra pruebas.

Ejercicio 6 — Symbol.hasInstance y control de instanceof

Tarea: Crea una clase Range que permita:

new Range(1,10) y que x instanceof Range devuelva true si x es un número dentro del rango.

Implementa static [Symbol.hasInstance](instance) para personalizar instanceof.
Firma sugerida: class Range { constructor(min,max) { ... } static [Symbol.hasInstance](instance) { ... } }
Restricción: instanceof con un número debe funcionar como describo, y una instancia de Range debe seguir siendo instanceof Range.
Ejemplo:

const r = new Range(1,3);
console.log(2 instanceof Range); // true
console.log(5 instanceof Range); // false
console.log(r instanceof Range); // true

Ejercicio 7 — Herencia múltiple por agregación (delegación)

Tarea: JavaScript no soporta herencia múltiple directa. Implementa MultiRole que combine comportamientos de varias clases mediante delegación (no mixins).

Por ejemplo, crea CanFly, CanSwim, CanWalk como clases con métodos fly(), swim(), walk().

Crea class SuperAgent que agrega instancias de esas capacidades y delega llamadas (superAgent.fly() debe llamar internamente a this._flyer.fly() si existe).
Firma sugerida: class SuperAgent { constructor({flyer, swimmer, walker}) { ... } }
Restricción: delegación dinámica: si no se pasa swimmer, superAgent.swim() debe lanzar con mensaje claro.
Pista: usa Proxy opcionalmente para delegar automáticamente métodos no presentes.

Ejercicio 8 — Serialización/Deserialización con preservación de prototipo

Tarea: Implementa funciones serialize(obj) y deserialize(str) que:

Serialicen un objeto con su clase si proviene de una instancia registrada (p. ej. Person, Employee), guardando el tipo.

deserialize debe reconstruir la instancia con el prototipo correcto (no solo object literal).

Soporta nested objects que sean instancias de clases registradas.
Firma sugerida: registerClass(name, ctor), serialize(obj), deserialize(jsonStr).
Restricción: no uses eval. Usa un mapa de clases registradas.
Ejemplo:

registerClass('Person', Person);
const p = new Person('Ana');
const s = serialize({ owner: p });
const restored = deserialize(s);
restored.owner instanceof Person; // true

Ejercicio 9 — Performance: método en prototype vs método por instancia

Tarea: Diseña un benchmark que compare crear 100k instancias de una clase con:

Método definido en prototype, y

Método definido en el constructor (por instancia).
Mide tiempo de creación y memoria aproximada (usar performance.now() y contar propiedades propias).
Firma sugerida: benchmarkPrototypeVsInstance(iterations = 100000).
Restricción: muestra resultados y concluye cuál es más eficiente y por qué.
Pista: el método por instancia duplica la función por cada objeto; el prototype comparte la referencia.

Ejercicio 10 — Patrón Decorator con clases y prototype (runtime wrapping)

Tarea: Implementa un LoggerDecorator que envuelva cualquier instancia y loguee llamadas a métodos (nombre del método, args, tiempo de ejecución).

Debe funcionar sin cambiar la clase original y sin heredar de ella (usa Proxy o creación dinámica de objeto con el mismo prototipo).

Asegura que decorated instanceof OriginalClass siga siendo true si es posible. (Si no es posible con Proxy, documenta la limitación y demuestra alternativa con Object.setPrototypeOf).
Firma sugerida: function decorateWithLogger(instance) { return decoratedInstance }
Restricción: preservar this correcto dentro de los métodos originales y soportar métodos asíncronos (deben mostrar tiempo real de ejecución).
Ejemplo:

const orig = new SomeService();
const d = decorateWithLogger(orig);
await d.fetchData(1); // logs "fetchData args:[1] - took 32ms"

*/

//RESOLUCIÓN:

//Ejercicio 1 - Clase base + método en prototype y sobreescritura
console.log('------------ EJERCICIO 1 -----------------');

class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    info(){
        return `${this.make} ${this.model} (${this.year})`;
    }
};

class Car extends Vehicle{
    constructor(make, model, year, doors){
        super(make, model, year);
        this.doors = doors;
    }

};

class ElectricCar extends Car{
    constructor(make, model, year, doors, batteryCapacity){
        super(make, model, year, doors);
        this.batteryCapacity = batteryCapacity;
    }

    info(){
        const inheritedInfo = Vehicle.prototype.info.call(this);
        return `${inheritedInfo} - battery: ${this.batteryCapacity}`;
    }
};

const vehicle = new Vehicle('Make', 'Model 1', '2020');
const car = new Car('Maker', 'Model 2', '2023', 'convertible');
const electricCar = new ElectricCar('Remaker', 'Model 3', '2025', 'not-convertible', '2000kWh');

console.log(vehicle);
console.log(car);
console.log(electricCar);

//Prototipo del prototipo de electricCar es el mismo que el prototipo de car (es true porque ambos nacen de Vehiculo)
console.log(Object.getPrototypeOf(electricCar).__proto__ === Object.getPrototypeOf(car));

//info() reescrito
console.log(electricCar.info());

//Ejercicio 2 - Mixins(composición de comportamiento)
console.log('------------ EJERCICIO 2 -----------------');

class EventEmitterMixin {
    on(event, fn){
        this._events = this._events || {}; //Se define un objeto _events vacío
        this._events[event] = this._events[event] || []; //Se define como key representando el tipo de evento a escuchar
        this._events[event].push(fn); //Se asigna la función como value al key que es el tipo de evento
    }

    off(event, fn){ //Acá debería ser un off
        //código
    }
    emit(event, fn){
        if(!this._events || !this._events[event]) return; //Si no se definió on, o no existe key para el event, no se lanza
        this._events[event].forEach(f => f(fn)); //Se emite cada función relacionada con ese tipo de event (key)
    }
};

class SerializableMixin {
    static toJSON(object){
        return JSON.stringify(object);
    }

    static fromJSON(json){
        return JSON.parse(json);
    }
};

function applyMixins(BaseClass, mixins) {

    class Mixed extends BaseClass {};

    for(const mixin of mixins){
        Object.getOwnPropertyNames(mixin.prototype).forEach(name => {
            if(name !== 'constructor'){
                Mixed.prototype[name] = mixin.prototype[name];
            }
        });

        Object.getOwnPropertyNames(mixin).forEach(name => {
            if(name !== 'prototype' && name !== 'name' && name !== 'length'){
                Mixed[name] = mixin[name];
            }
        });
    }

    return Mixed;
};

class Device extends applyMixins(Object, [EventEmitterMixin, SerializableMixin]){
    constructor(type){
        super();
        this.type = type;
    }
};

const device = new Device('sensor-1');
device.on('change', function(data) { console.log('Evento recibido', data); }); //Se asigna que on change, se logea
device.emit('change', { value: 42 }); //Se emite un evento change, que debería lanzar el on previo
const json = Device.toJSON(device);
console.log('json', json); //Ojo: en el resultado manda change: null, porque JSON no serializa funciones en su comportamiento por defecto

//Ejercicio 3 - Agregación vs composición (modelado de relaciones)
console.log('------------ EJERCICIO 3 -----------------');
class Book {
    constructor(id, title, author){
        this.id = id;
        this.title = title;
        this.author = author;
    }

    info(){
        return `${this.id}: ${this.title} - ${this.author}`;
    }

    clone(){
        return new Book(this.id, this.title, this.author);
    }
};

class Shelf {
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.books = [];
    }

    addBook(book){
        this.books.push(book);
    }

    removeBook(bookId){
        const bookIndex = this.books.findIndex(b => b.id === bookId);
        if(bookIndex >= 0){//Si es menor que 0 es porque no lo encontró
            return this.books.splice(bookIndex,1)[0]; //splice retorna un array de 1 elemento, se devuelve ese elemento
        }
        return null; //Si llega aquí es porque no había el susodicho libro
    }

    clone(){
        const newShelf = new Shelf(this.id, this.name);
        newShelf.books = [...this.books]; //Se le asigna una copia de la lista de libros actual por su relación
        return newShelf;
    }
};

class Library {
    constructor(name){
        this.name = name;
        this.shelves = [];
        this.books = [];
    }

    addBook(book){
        this.books.push(book);
    }

    addShelf(shelf){
        this.shelves.push(shelf);
    }

    moveBook(bookId, fromShelfId, toShelfId){
        const fromShelf = this.shelves.find(shelf => shelf.id === fromShelfId);
        const toShelf = this.shelves.find(shelf => shelf.id === toShelfId);        

        if(!fromShelf || !toShelf){
            console.log('Uno de los estantes (destino u origen) no existe.');
            return; //Para la ejecución
        }

        const book = fromShelf.removeBook(bookId);
        if(book){
            toShelf.addBook(book);
        }else{
            console.log('No se encontró el libro pedido en el estante de origen.');
        }
    }

    clone(){
        const newLibrary = new Library(this.name);
        newLibrary.books = [...this.books]; //Se le asigna copia de libros
        newLibrary.shelves = this.shelves.map(shelf => shelf.clone()); //Se clona cada shelf con su método propio
        return newLibrary;
    }
};

const book1 = new Book(1, 'Robinson Crusoe', 'Daniel Defoe');
const book2 = new Book(2, 'Flowers For Algernon', 'Daniel Keyes');
const shelf1 = new Shelf(1, 'Aventura');
const shelf2 = new Shelf(2, 'Historias cortas');
shelf1.addBook(book1);
shelf2.addBook(book2);

const library = new Library('Nueva biblioteca casi vacía');
library.addBook(book1);
library.addBook(book2);
library.addShelf(shelf1);
library.addShelf(shelf2);

const libraryClone = library.clone();
console.log(library.shelves === libraryClone.shelves); //Los estantes de ambas bibliotecas deberían ser distintos, aunque sean copiados
console.log(library.books === libraryClone.books); //Los libros de ambas bibliotecas también deberían ser distintos, porque pertenecen a cada uno
console.log(library.books[0] === libraryClone.books[0]); //Los libros en sí mismos sí deberian ser iguales, por referencia
console.log('original -> ' + library.books[0].info(), ', clon -> ' + libraryClone.books[0].info())
console.log(library.books[1] === libraryClone.books[1]);

//Ejercicio 4 - Prototypal inheritance manual (Object.create)
console.log('------------ EJERCICIO 4 -----------------');
const animalProto = {
    eat() {return 'NOM NOM'}
};

const mammalProto = {
    warmBlooded: true
};

//Se asigna como prototipo de mammalProto a animalProto (animalProto -> mammalProto -> ...)
Object.setPrototypeOf(mammalProto, animalProto); //mammalProto.__proto__ = animalProto; //también válido pero se ve más actual lo del Object

const human = Object.create(mammalProto);
human.name = 'Adrian';
console.log('Object human', human); //Respeta la cadena prototípica

//Aquí en general, hasOwnProperty devuelve true solo para atributos 100% propios del objeto, no cuenta heredados
console.log( "human.hasOwnProperty('name')", human.hasOwnProperty('name') );
console.log('human.name', human.name);
console.log( "human.hasOwnProperty('warmBlooded')", human.hasOwnProperty('warmBlooded') );
console.log('human.warmBlooded', human.warmBlooded);
console.log( "human.hasOwnProperty('eat')", human.hasOwnProperty('eat') );
console.log('human.eat()', human.eat());

//Ejercicio 5 - Clases con campos privados y prototype methods (interoperabilidad)
console.log('------------ EJERCICIO 5 -----------------');
class BankAccount{
    #balance = 0;

    constructor(id){
        this.id = id;
    }

    static transfer(from, to, amount){
        from.withdraw(amount);
        to.deposit(amount);
        console.log(from.toString());
        console.log(to.toString());
    } 

    deposit(amount){
        this.#balance += amount;
    }

    withdraw(amount){
        this.#balance -= amount;
    }

    toString(){
        return `Balance actual de cuenta ${this.id} tras transferencias: ${this._balance}`;
    }

    get _balance(){
        return this.#balance;
    }

    set _balance(balance){
        this.#balance = balance;
    }
};

//Transferencia de 500 por ejemplo de una cuenta de 1000 monedas (soles o etc) a una de 100 monedas
const bankAccount1 = new BankAccount(1);
bankAccount1.deposit(1000);
const bankAccount2 = new BankAccount(2);
bankAccount2.deposit(100);

BankAccount.transfer(bankAccount1, bankAccount2, 500);
console.log(bankAccount1);
console.log(bankAccount2);

//Validaciones
console.log("BankAccount.prototype.hasOwnProperty('#balance')", BankAccount.prototype.hasOwnProperty('#balance'));
console.log("bankAccount1.hasOwnProperty('#balance')", bankAccount1.hasOwnProperty('#balance'));

//Ejercicio 6 - Symbol.hasInstance y control de instanceof
console.log('------------ EJERCICIO 6 -----------------');
class Range {
    constructor(min,max){
        this.min = min;
        this.max = max;
    }

    static [Symbol.hasInstance](instance) {
        if(typeof instance === 'object' && instance !== null){
            return Object.getPrototypeOf(instance) === Range.prototype;
        }

        if(typeof instance === 'number'){
            return instance >= this.prototype.min && instance <= this.prototype.max;
        }

        return false;
    }
}

const range = new Range(1,10);
Range.prototype.min = range.min;
Range.prototype.max = range.max;
console.log('Range', range);
console.log('2 instanceof Range:', 2 instanceof Range); //true
console.log('11 instanceof Range:', 11 instanceof Range); // false
console.log('range instanceof Range:', range instanceof Range); // true

//Ejercicio 7 - Herencia múltiple por agregación (delegación)
console.log('------------ EJERCICIO 7 -----------------');
class SuperAgent {
    //El constructor por defecto tomaría un objeto vacío
    constructor({flyer, swimmer, walker} = {}){
        this.flyer = flyer;
        this.swimmer = swimmer;
        this.walker = walker;
    }

    //En cada uno valida que el atributo no esté vacío, si fuera así lanza error
    fly(){
        if (this.flyer){
            this.flyer.fly();
        }else{
            throw new Error('Este agente no es flyer.');
        }
    }

    swim(){
        if (this.swimmer){
            this.swimmer.swim();
        }else{
            throw new Error('Este agente no es swimmer.');
        }
    }
    
    walk(){
        if (this.walker){
            this.walker.walk();
        }else{
            throw new Error('Este agente no es walker.');
        }
    }    
}

class CanFly {
    fly(){
        console.log('Ala ala ala ala');
    }
}

class CanSwim {
    swim(){
        console.log('Glu glu glu glu');
    }
}

class CanWalk {
    walk(){
        console.log('Clop clop clop clop');
    }
}

const flyer = new CanFly();
const swimmer = new CanSwim();
const walker = new CanWalk();

const agent1 = new SuperAgent( {flyer, swimmer, walker} );
agent1.fly(); agent1.swim(); agent1.walk();

const agent2 = new SuperAgent();
try{
    agent2.fly();
}catch(e){
    console.log(e);
}

//Ejercicio 8 - Serialización/Deserialización con preservación de prototipo
console.log('------------ EJERCICIO 8 -----------------');
const classRegister = new Map();

function registerClass(name, ctor){
    classRegister.set(name, ctor);
}

function serialize(obj){
    //(key,value) actúa como función replacer
    return JSON.stringify(obj, (key,value) => {
        if(value && typeof value === 'object'){
            //Si el value del objeto a serializar es object, revisa el classRegister
            for(const [name,ctor] of classRegister){
                if(Object.getPrototypeOf(value) === ctor.prototype){
                    //Si hay match, genera un clon en que pone como __type el nombre de la clase del classRegister
                    const clone = {...value, __type: name};
                    return clone;
                }
            }
        }
        return value;
    });    
}

function deserialize(jsonStr){
    return JSON.parse(jsonStr, (key,value) => {
        if(value && value.__type){
            const ctor = classRegister.get(value.__type);
            if(ctor){
                const instance = Object.create(ctor.prototype);
                for (const prop in value){
                    if(prop !== '__type'){
                        instance[prop] = value[prop];
                    }
                }
                return instance;
            }
        }
        return value;
    });
}

class Person{
    constructor(name){
        this.name = name;
    }

    greet(){
        return `Mi nombre es: ${this.name}`;
    }
}

class Employee extends Person {
    constructor(name, role){
        super(name);
        this.role = role;
    }

    work(){
        return `Soy ${this.name} y trabajo como ${this.role}`;
    }
}

registerClass('Person', Person);
registerClass('Employee', Employee);

const employee = new Employee('Adrián', 'CELLS en potencia');
const serialized = serialize({ junior: employee });
console.log('Serialized employee:', serialized);

const deserialized = deserialize(serialized);
console.log('Deserialized employee:', deserialized);
console.log('instanceof Employee:', deserialized.junior instanceof Employee);
console.log('Método heredado:', deserialized.junior.work());

//Ejercicio 9 - Performance: método en prototype vs método por instancia
console.log('------------ EJERCICIO 9 -----------------');
function benchmarkPrototypeVsInstance(iterations = 100000){
    console.log(`Creando las ${iterations} iteraciones requeridas.`);

    //Método en el prototype
    class ProtoClass{
        constructor(value){
            this.value = value;
        }
        method(){
            return this.value * 2;
        }
    }

    //Método definido en el constructor en cada instancia
    class InstanceClass{
        constructor(value){
            this.value = value;
            this.method = function(){
                return this.value*2;
            }
        }
    }

    const startProto = performance.now();
    const protoObjects = [];
    for(let i = 0; i < iterations; i++){
        protoObjects.push(new ProtoClass(i));
    }
    const endProto = performance.now();

    const startInstance = performance.now();
    const instanceObjects = [];
    for(let i = 0; i < iterations; i++){
        instanceObjects.push(new InstanceClass(i));
    }
    const endInstance = performance.now();

    const protoProps = Object.keys(protoObjects[0]).length;
    const instanceProps = Object.keys(instanceObjects[0]).length;

    console.log('Resultados del ejercicio');
    console.log('Método en prototype:');
    console.log(`Tiempo: ${(endProto-startProto).toFixed(2)} ms`);
    console.log(`Propiedades propias por instancia: ${protoProps}`);    
    console.log('Método en instance:');    
    console.log(`Tiempo: ${(endInstance-startInstance).toFixed(2)} ms`);
    console.log(`Propiedades propias por instancia: ${instanceProps}`);        
}

//RESULTADO: de acuerdo a la pista y la información verificada se puede sacar la siguiente conclusión
//El método en prototype es el más óptimo, ya que guarda una referencia a la función en todos los casos
//Todas las instancias del prototype comparten esta referencia al método, que ahorra memoria y facilita creación
//Por otro lado, el método en constructor, crea nuevas funciones en cada instancia, consumiendo más memoria
//y tomando más tiempo en general, ya que en este caso adicionalmente, se almacenan 2 propiedades en vez de 1
benchmarkPrototypeVsInstance();

//Ejercicio 10 - Patrón Decorator con clases y prototype (runtime wrapping)
console.log('------------ EJERCICIO 10 ----------------');
function decorateWithLogger(instance){

    const handler = {
        //Se declara el get al que accederá el proxy, con target (objeto), prop (propiedad) y receiver (el proxy)
        get(target, prop, receiver) {
            //Se rescata la función original mediante el key
            const original = target[prop];
            if(typeof original !== 'function'){
                return Reflect.get(target,prop,receiver); //Si el valor no es función, devuelve nomás
            }

            return function (...args){
                const start = performance.now();
                let result;

                try{
                    result = original.apply(target,args);
                }catch(e){
                    console.log('ERROR', e);
                    throw e;
                }

                if(result instanceof Promise){
                    return result.finally(() => {
                        const end = performance.now();
                        console.log(`Método ${prop} terminó en ${(end-start).toFixed(2)} ms`);
                    });
                }else{
                    const end = performance.now();
                    console.log(`Método ${prop} terminó en ${(end-start).toFixed(2)} ms`);
                    return result;
                }

            }
        }
    };

    const decoratedInstance = new Proxy(instance, handler);
    Object.setPrototypeOf(decoratedInstance, Object.getPrototypeOf(instance));

    return decoratedInstance;
}

class SomeService{
    getData(id){
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(`Datos recuperados del id ${id}`);
            }, 500)
        })
    }

    calculate(a,b){
        return a+b;
    }
}

const service = new SomeService();
const loggedService = decorateWithLogger(service);

(async () => {
    console.log('instanceof SomeService:', loggedService instanceof SomeService);
    console.log('Calculo aplicado:', loggedService.calculate(100, -2));        
    console.log(await loggedService.getData(9)); 
})(); //Immediately Invoked Function Expression
