/*1. Métodos del tipo de dato String*/

//Métodos estáticos

//fromCharCode(): regresa string en base a los code units de unicode dentro del BMP (U+0000 - U+FFFF)
console.log('String.fromCharCode():', String.fromCharCode(0x0240,0x02E0,0x02A9,0x0276,0x1F928));
//Si intentamos 0x1F928, no está dentro de su rango, por defecto ignora el 1 y busca el 0xF928

//fromCodePoint(): regresa string en base a los code units hasta fuera del BMP (U+0000 - U+10FFFF)
console.log('String.fromCodePoint():', String.fromCodePoint(0x1F928));

//raw(): regresa un string independientemente de símbolos especiales como \n o \(salto de línea)
console.log('no String.raw():' , `Hi\n${2 + 3}!`);
console.log('with String.raw():', String.raw`Hi\n${2 + 3}!`);

console.log('no String.raw():', `C:\Development\profile\about.html`);
console.log('with String.raw():', String.raw`C:\Development\profile\about.html`);

//Métodos de instancia

//anchor(): regresa un string con estructura de anchor que tiene como contenido al string y puede tener nombre [deprecado]
const newAnchor = 'Soy el anchor de anchor()';
console.log('anchor():', newAnchor.anchor('im-anchor'));
document.querySelector('.anchor-container').innerHTML = newAnchor.anchor('im-anchor');

//at(): regresa el string ubicado en el índice enviado como parámetro
const atExample = 'Soy un ejemplo para at()';
console.log('at Example:', atExample);
console.log('at(4):', atExample.at(4));
console.log('at(-4):', atExample.at(-4));

//big(): regresa un string con estructura de big [deprecado]
const newBig = 'Soy el big de big()';
console.log('big():', newBig.big());
document.querySelector('.big-container').innerHTML = newBig.big();

//blink(): regresa un string con estructura de blink (etiqueta no estándar que parpadeaba) [deprecado]
const newBlink = 'Soy el blink de blink()';
console.log('blink():', newBlink.blink());
document.querySelector('.blink-container').innerHTML = newBlink.blink();

//bold(): regresa un string con estructura de bold [deprecado]
const newBold = 'Soy el bold de bold()';
console.log('bold():', newBold.bold());
document.querySelector('.bold-container').innerHTML = newBlink.bold();

//charAt(): regresa el string en el índice enviado como parámetro
const charAtExample = 'Soy un ejemplo para charAt()';
console.log('charAt Example:', charAtExample);
console.log('charAt(4):', charAtExample.charAt(4));
console.log('charAt(-4):', charAtExample.charAt(-4));
//OJO: at vs charAt: para índice fuera de límites, at retorna undefined, charAt retorna ''
//Además, charAt no usa índices negativos, regresa '', a diferencia de at que recorre desde el fin

//charCodeAt(): regresa como string el code unit UTF-16 del string en el índice mandado
const charCodeAtExample = `Soy un ejemplo para charCodeAt() ${String.fromCodePoint(0x1F928)}`;
console.log('charCodeAt Example:', charCodeAtExample);
console.log('charCodeAt(4):', charCodeAtExample.charCodeAt(4));
console.log('charCodeAt(33):', charCodeAtExample.charCodeAt(33));

//codePointAt(): regresa como string el code unit UTF-16 del string en el índice mandado
const codePointAtExample = `Soy un ejemplo para codePointAt() ${String.fromCodePoint(0x1F928)}`;
console.log('codePointAt Example:', codePointAtExample);
console.log('codePointAt(4):', codePointAtExample.codePointAt(4));
console.log('codePointAt(35):', codePointAtExample.codePointAt(35));

//concat(): regresa un string que es la concatenación de la instancia con los parámetros
const concatExample = 'Soy un mensaje';
console.log('concat():', concatExample.concat(' ','completado',' ','mediante',' ','concat()'));

//endsWith(): regresa true o false dependiendo de si el string termina en el parametro (opcional: hasta un indice específico)
const endsWithExample = 'Soy un ejemplo para endsWith()';
console.log('endsWith Example', endsWithExample);
console.log("endsWith('With()'):", endsWithExample.endsWith('With()'));
console.log("endsWith('ejemplo',14):", endsWithExample.endsWith('ejemplo',14));

//fixed(): regresa un string con estructura de tt (etiqueta con font family monospace) [deprecado]
const newFixed = 'Soy el tt de fixed()';
console.log('fixed():', newFixed.fixed());
document.querySelector('.fixed-container').innerHTML = newFixed.fixed();

//fontColor(): regresa un string con estructura de font con un color parametrizado [deprecado]
const newFontColor = 'Soy el font de fontcolor()';
console.log('fontcolor():', newFontColor.fontcolor('blue'));
document.querySelector('.font-color-container').innerHTML = newFontColor.fontcolor('blue');

//fontsize(): regresa un string con estructura de font con un size parametrizado [deprecado]
const newFontSize = 'Soy el font de fontsize()';
console.log('fontsize():', newFontSize.fontsize('5rem'));
document.querySelector('.font-size-container').innerHTML = newFontSize.fontsize('5rem');

//includes(): regresa true o false dependiendo de si el string contiene en alguna parte el parámetro (opcional: desde un índice específico)
const includesExample = 'Soy un ejemplo para includes()';
console.log('includes Example:', includesExample);
console.log("includes('ejemplo'):", includesExample.includes('ejemplo'));
console.log("includes('ejemplo',14):", includesExample.includes('ejemplo',14));

//indexOf(): regresa el índice de la primera ocurrencia del parámetro substring (opcional: desde un índice específico)
const indexOfExample = 'Soy un ejemplo para indexOf()';
console.log('indexOf Example:', indexOfExample);
console.log("indexOf('ejemplo'):", indexOfExample.indexOf('ejemplo'));
console.log("indexOf('ejemplo',14):", indexOfExample.indexOf('ejemplo',14)); //Si no encuentra, devuelve -1

//isWellFormed(): regresa true o false dependiendo de si el string contiene 'lone surrogates' (true si no hay lone surrogates)
/* 'lone surrogate' es un código de 16-bits que sigue estas reglas:
- Rango: 0xD800–0xDBFF ('leading surrogate'), siendo la última unidad de código del string, o si la siguiente no es un 'trailing surrogate'
- Rango: 0xDC00–0xDFFF ('trailing surrogate'), siendo la primera unidad de código del string, o si la anterior no es un 'leading surrogate' */
console.log("'ab\uD800'.isWellFormed():", 'ab\uD800'.isWellFormed());
console.log('"\uDFFFab".isWellFormed():', '\uDFFFab'.isWellFormed());
console.log("'abc'.isWellFormed():", 'abc'.isWellFormed());

//italics(): regresa un string con estructura de italics [deprecado]
const newItalics = 'Soy el i de italics()';
console.log('italics():', newItalics.italics());
document.querySelector('.italics-container').innerHTML = newItalics.italics();

//lastIndexOf(): regresa el índice de la última ocurrencia del parámetro substring (opcional: hasta un índice específico)
const lastIndexOfExample = 'Soy un ejemplo de ejemplo para lastIndexOf()';
console.log('lastIndexOf Example:', lastIndexOfExample);
console.log("lastIndexOf('ejemplo'):", lastIndexOfExample.lastIndexOf('ejemplo'));
console.log("lastIndexOf('ejemplo',5):", lastIndexOfExample.lastIndexOf('ejemplo',5)); //Si no encuentra, devuelve -1

//link(): regresa un string con estructura de anchor con el href del parametro [deprecado]
const newLink = 'Soy el a de link()';
console.log('link():', newLink.link('https://www.google.com'));
document.querySelector('.link-container').innerHTML = newLink.link('https://www.google.com');

//localeCompare(): regresa un número haciendo comparaciones alfabéticas de la siguiente manera:
/* - Si la instancia vendría antes del parámetro, manda un número negativo (mayormente -1)
   - Si la instancia vendría después del parámetro, manda un número positivo (mayormente 1)
   - Si la instancia es igual al parámetro, manda 0
*/
const localeCompareExample = 'k';
console.log("'k'.localeCompare('j'):", localeCompareExample.localeCompare('j'));
console.log("'k'.localeCompare('k'):", localeCompareExample.localeCompare('k'));
console.log("'k'.localeCompare('l'):", localeCompareExample.localeCompare('l'));

//match(): regresa el resultado de hacer una comparación con una expresión regular (regex)
const matchExample = 'soy un ejemplo para MATCH()';
console.log('match Example:', matchExample);
console.log('match(/[A-Z]/g):', matchExample.match(/[A-Z]/g)); //Mayúsculas de la A-Z, todas las halladas

//matchAll(): regresa un iterador de todos los resultados de comparar con una expresión regular, incluyendo grupos de captura
const matchAllExample = 'soy un ejemplo para MATCHALL()';
console.log('matchAll Example:', matchAllExample);
console.log('matchAll(/[A-Z]/g):', [... matchAllExample.matchAll(/[A-Z]/g)]);

//normalize(): regresa un string con la forma normalizada de Unicode determinada en el parámetro
const normalizeExample1 = "\u0041\u006d\u00e9\u006c\u0069\u0065";
const normalizeExample2 = "\u0041\u006d\u0065\u0301\u006c\u0069\u0065";
console.log('normalizeExample1:', normalizeExample1);
console.log('normalizeExample2:', normalizeExample2);
console.log('normalizeExample1 === normalizeExample2:' , normalizeExample1 === normalizeExample2);
console.log('normalizeExample1.length === normalizeExample2.length:', normalizeExample1.length === normalizeExample2.length);

const normalizedExample1 = normalizeExample1.normalize('NFC');
const normalizedExample2 = normalizeExample2.normalize('NFC');
console.log('normalizeExample1.normalize("NFC"):', normalizedExample1);
console.log('normalizeExample2.normalize("NFC"):', normalizedExample2);
console.log('normalizedExample1 === normalizedExample2:' , normalizedExample1 === normalizedExample2);
console.log('normalizedExample1.length === normalizedExample2.length:', normalizedExample1.length === normalizedExample2.length);

//padEnd(): regresa un string con el tamaño dado como primer parámetro, llenando el espacio restante con el segundo parámetro, y si no hay, con ' '
const padEndExample = 'Soy un ejemplo para padEnd()';
console.log('padEnd Example:', padEndExample);
console.log('padEnd(50):', padEndExample.padEnd(50));
console.log("padEnd(50,'.'):", padEndExample.padEnd(50,'.'));

//padStart(): regresa un string que con el tamaño dado como primer parámetro, llenando el espacio faltante con el segundo parámetro, y si no hay, con ' '
const padStartExample = 'Soy un ejemplo para padStart()';
console.log('padStart Example:', padStartExample);
console.log('padStart(50):', padStartExample.padStart(50));
console.log("padStart(50,'.'):", padStartExample.padStart(50,'.'));

//repeat(): regresa un string que repite la instancia las veces pedidas con el parámetro, concatenándolas
const repeatExample = 'Me repito,';
console.log('repeat Example:', repeatExample);
console.log('repeat(5):',repeatExample.repeat(5));

//replace(): regresa un string en que se ha reemplazado el primer parámetro substring con el segundo (primera ocurrencia)
const replaceExample = 'Soy un ejemplo para replace() de ejemplo';
console.log('replace Example:', replaceExample);
console.log("replace('ejemplo','reemplazo'):", replaceExample.replace('ejemplo','reemplazo'));

//replaceAll(): regresa un string en que se reemplazan todas las ocurrencias del primer parámetro por el segundo
const replaceAllExample = 'Soy un ejemplo para replace() de ejemplo';
console.log('replaceAll Example:', replaceAllExample);
console.log("replaceAll('ejemplo','reemplazo'):", replaceAllExample.replaceAll('ejemplo','reemplazo'));

//search(): regresa el índice hallado en un string comparado con una expresión regular
const searchExample = 'Soy un ejemplo para search() de ejemplo1';
console.log('search Example:', searchExample);
console.log('search(\d):', searchExample.search(/\d/)); //Encontrar un número

//slice(): regresa un substring delimitado por los parámetros (1: inicio, 2: fin)
const sliceExample = 'Soy Un ejemplo para slice()';
console.log('slice Example:', sliceExample);
console.log('slice(3):', sliceExample.slice(3));
console.log('slice(-7):', sliceExample.slice(-7));
console.log('slice(19,26):', sliceExample.slice(20,27));

//small(): regresa un string con la estructura de un small [deprecado]
const newSmall = 'Soy el small de small()';
console.log('small():', newSmall.small());
document.querySelector('.small-container').innerHTML = newSmall.small();

//split(): regresa un arreglo de strings separados en base al parámetro dado
const splitExample = 'Soy un ejemplo para split()';
console.log('split Example:', splitExample);
console.log("split(''):", splitExample.split(''));
console.log("split(' '):", splitExample.split(' '));
console.log("split():", splitExample.split());

//startsWith(): regresa true o false dependiendo de si el string empieza en el parametro (opcional: desde un indice especifico)
const startsWithExample = 'Soy un ejemplo para startsWith()';
console.log('startsWith Example:', startsWithExample);
console.log("startsWith('Soy'):", startsWithExample.startsWith('Soy'));
console.log("startsWith('Soy', 5):", startsWithExample.startsWith('Soy', 5));

//strike(): regresa un string con la estructura de un strike [deprecado]
const newStrike = 'Soy el strike de strike()';
console.log('strike():', newStrike.strike());
document.querySelector('.strike-container').innerHTML = newStrike.strike();

//sub(): regresa un string con la estructura de un sub [deprecado]
const newSub = 'Soy el sub de sub()';
console.log('sub():', newSub.sub());
document.querySelector('.sub-container').innerHTML = newSub.sub();

//substr(): regresa un substring desde el primer parametro, con un largo determinado por el segundo parametro, si no hubiera, toma el resto del string [deprecado]
const substrExample = 'Soy un ejemplo para substr()';
console.log('substrExample:', substrExample);
console.log('substr(4,2):', substrExample.substr(4,2));
console.log('substr(4):', substrExample.substr(4));

//substring(): regresa un substring desde el primer parametro, llegando hasta el índice-1 del segundo parametro o el resto
const substringExample = 'Soy un ejemplo para substring()';
console.log('substringExample:', substringExample);
console.log('substring(4,6):', substringExample.substring(4,6));
console.log('substring(4):', substringExample.substring(4));

//sup(): regresa un string con la estructura de un sup [deprecado]
const newSup = 'Soy el sup de sup()';
console.log('sup():', newSup.sup());
document.querySelector('.sup-container').innerHTML = newSup.sup();

//toLocaleLowerCase(): regresa un string convertido a minúsculas en base a ciertas reglas locales del parámetro
const toLocaleLowerCaseExample = '\u0130';
console.log('toLocaleLowerCaseExample Example:', toLocaleLowerCaseExample);
console.log('toLocaleLowerCase("tr") === "i":', toLocaleLowerCaseExample.toLocaleLowerCase("tr") === "i");
console.log('toLocaleLowerCase("en-US") === "i":', toLocaleLowerCaseExample.toLocaleLowerCase("en-US") === "i");

//toLocaleUpperCase(): regresa un string convertido a mayúsculas en base a ciertas reglas locales del parámetro
const toLocaleUpperCaseExample = 'istanbul';
console.log('toLocaleUpperCaseExample Example:', toLocaleUpperCaseExample);
console.log("toLocaleUpperCase('en-US):", toLocaleUpperCaseExample.toLocaleUpperCase('en-US'));
console.log("toLocaleUpperCase('TR'):", toLocaleUpperCaseExample.toLocaleUpperCase('TR'));

//toLowerCase(): regresa un string convertido completamente a minúsculas
const toLowerCaseExample = 'Soy Un EJEMPLO Para TOLOWERcase()';
console.log('toLowerCase Example:', toLowerCaseExample);
console.log('toLowerCase():', toLowerCaseExample.toLowerCase());

//toString(): regresa la instancia convertida en string
const toStringExample1 = new String('Era un objeto de String');
const toStringExample2 = 12345;
console.log('toString Example1:', toStringExample1);
console.log('toString Example2:', toStringExample2);
console.log('Example1.toString():', toStringExample1.toString());
console.log('Example2.toString():', toStringExample2.toString());

//toUpperCase(): regresa un string convertido completamente a mayúsculas
const toUpperCaseExample = 'sOy Un EJEMPLO para TOuppErcase()';
console.log('toUpperCase Example:', toUpperCaseExample);
console.log('toUpperCase():', toUpperCaseExample.toUpperCase());

//toWellFormed(): regresa un string en que los 'lone surrogates' son arreglados a ser well-formed
const loneLeadingSurrogate = 'ab\uD800';
const loneTrailingSurrogate = '\uDFFFab';
const wellFormedComponent = 'abc';
console.log('loneLeadingSurrogate:', loneLeadingSurrogate);
console.log('loneTrailingSurrogate:', loneTrailingSurrogate);
console.log('wellFormedComponent:', wellFormedComponent);

console.log("loneLeadingSurrogate.isWellFormed():", loneLeadingSurrogate.isWellFormed());
console.log('loneTrailingSurrogate.isWellFormed():', loneTrailingSurrogate.isWellFormed());
console.log("wellFormedComponent.isWellFormed():", wellFormedComponent.isWellFormed());

console.log("loneLeadingSurrogate.toWellFormed().isWellFormed():", loneLeadingSurrogate.toWellFormed().isWellFormed());
console.log('loneTrailingSurrogate.toWellFormed().isWellFormed():', loneTrailingSurrogate.toWellFormed().isWellFormed());
console.log("wellFormedComponent.toWellFormed().isWellFormed():", wellFormedComponent.toWellFormed().isWellFormed());

//trim(): regresa un string en que se eliminan los espacios en blanco de ambos extremos del string
const trimExample = '    Soy un ejemplo para trim()   ';
console.log('trim Example:', trimExample);
console.log('trim():', trimExample.trim());

//trimEnd(): regresa un string en que se eliminan los espacios en blanco al final del string
console.log('trimEnd():', trimExample.trimEnd());

//trimStart(): regresa un string en que se eliminan los espacios en blanco al final del string
console.log('trimStart():', trimExample.trimStart());

//valueOf(): regresa el valor de la instancia como string
const valueOfExample1 = new String('Soy un objeto String');
const valueOfExample2 = 'Soy un string en sí mismo';
console.log('valueOf Example1:', valueOfExample1);
console.log('valueOf Example2:', valueOfExample2);
console.log('valueOfExample1.valueOf():', valueOfExample1.valueOf());
console.log('valueOfExample2.valueOf():', valueOfExample2.valueOf());

//[Symbol.iterator](): regresa el string como un iterable para poder ser consumido como tal
const iteratorExample = 'Soy un real ejemplo para ser iterado!';
console.log('[Symbol.iterator] example:', iteratorExample);

const stringIterator = iteratorExample[Symbol.iterator]();
console.log('[Symbol.iterator]():', stringIterator);

let currentChar = stringIterator.next();

while(!currentChar.done && currentChar.value != ' '){ //Iterará mientras no acabe el arreglo y no halle un ' '
    console.log('Char actual iterado:', currentChar.value);
    currentChar = stringIterator.next();
}

/*2. Métodos del tipo de dato Number*/

//Métodos estáticos

//isFinite(): regresa true o false dependiendo de si el número es finito (es número, no infinito, no NaN, no null)
console.log('Number.isFinite("abc"):', Number.isFinite('abc'));
console.log('Number.isFinite(NaN):', Number.isFinite(NaN));
console.log('Number.isFinite(null):', Number.isFinite(null));
console.log('1/0:', 1/0);
console.log('Number.isFinite(1/0):', Number.isFinite(1 / 0));
console.log('10/5:', 10/5);
console.log('Number.isFinite(10/5):', Number.isFinite(10 / 5));
console.log('5/2:', 5/2);
console.log('Number.isFinite(5/2):', Number.isFinite(5 / 2));

//isInteger(): regresa true o false dependiendo de si el número es entero (es número, no decimal)
console.log('Number.isInteger("abc"):', Number.isInteger('abc'));
console.log('Number.isInteger(NaN):', Number.isInteger(NaN));
console.log('Number.isInteger(null):', Number.isInteger(null));
console.log('Number.isInteger(Infinity):', Number.isInteger(Infinity));
console.log('Number.isInteger(2):', Number.isInteger(2));
console.log('Number.isInteger(2.5):', Number.isInteger(2.5));

//isNaN(): regresa true o false dependiendo de si el valor es NaN (NaN = true)
console.log('Number.isNaN("abc"):', Number.isNaN('abc'));
console.log('Number.isNaN(NaN):', Number.isNaN(NaN));
console.log('Number.isNaN(null):', Number.isNaN(null));
console.log('Number.isNaN(Infinity):', Number.isNaN(Infinity));
console.log('Number.isNaN(2):', Number.isNaN(2));
console.log('Number.isNaN(2.5):', Number.isNaN(2.5));

//isSafeInteger(): regresa true o false dependiendo de si el valor es un integer seguro (en base a estándares IEEE)
console.log('Number.isSafeInteger("abc"):', Number.isSafeInteger('abc'));
console.log('Number.isSafeInteger(NaN):', Number.isSafeInteger(NaN));
console.log('Number.isSafeInteger(null):', Number.isSafeInteger(null));
console.log('Number.isSafeInteger(Infinity):', Number.isSafeInteger(Infinity));
console.log('Number.isSafeInteger(2):', Number.isSafeInteger(2));
console.log('Number.isSafeInteger(2.5):', Number.isSafeInteger(2.5));

//parseFloat(): regresa un decimal (float) en base al argumento dado, si no puede regresa NaN
const parseFloatExample1 = 'abc';
const parseFloatExample2 = '46.1204';
console.log('parseFloat Example1:', parseFloatExample1);
console.log('parseFloat Example2:', parseFloatExample2);
console.log('Number.parseFloat(parseFloatExample1):', Number.parseFloat(parseFloatExample1));
console.log('Number.parseFloat(parseFloatExample2):', Number.parseFloat(parseFloatExample2));

//parseInt(): regresa un numero entero en base al argumento dado (opcional: en base a un radix específico)
const parseIntExample1 = '14932';
const parseIntExample2 = 'abc'
console.log('parseInt Example1:', parseIntExample1);
console.log('parseInt Example2:', parseIntExample2);
console.log('Number.parseInt(parseIntExample1):', Number.parseInt(parseIntExample1));
console.log('Number.parseInt(parseIntExample2):', Number.parseInt(parseIntExample2));

//Métodos de instancia

//toExponential(): regresa un string del número en notación exponencial (opcional: fraction digits, cuantos antes de la notación "e+X")
const toExponentialExample = 12345678912;
console.log('toExponential Example:', toExponentialExample);
console.log('toExponential():', toExponentialExample.toExponential());
console.log('toExponential(4):', toExponentialExample.toExponential(4));

//toFixed(): regresa un string del número con los decimales designados luego de un punto
const toFixedExample = 91213.65432;
console.log('toFixed Example:', toFixedExample);
console.log('toFixed():', toFixedExample.toFixed()); //Si no asignas número de decimales, redondea entero
console.log('toFixed(2):', toFixedExample.toFixed(2));

//toLocaleString(): regresa un string del número en base al parámetro que designa como se mostrará de acuerdo a reglas locales
const toLocaleStringExample = 123456.789;
console.log('toLocaleString Example:', toLocaleStringExample);
console.log('toLocaleString("ar-EG)', toLocaleStringExample.toLocaleString("ar-EG")); //Arabia
console.log('toLocaleString("en-IN)', toLocaleStringExample.toLocaleString("en-IN")); //India
console.log('toLocaleString("zh-Hans-CN-u-nu-hanidec")', toLocaleStringExample.toLocaleString("zh-Hans-CN-u-nu-hanidec")); //Chino

//toPrecision(): regresa un string con el número de dígitos significativos designados (números empezando de la izquierda que no son 0 hasta el primer "no 0")
console.log('123.456.toPrecision(4):', 123.456.toPrecision(4));
console.log('0.004.toPrecision(4):', 0.004.toPrecision(4));
console.log('1.23e5.toPrecision(4):', 1.23e5.toPrecision(4));

//toString(): regresa un string del número (opcional: con una base)
console.log('12.toString():', (12).toString());
console.log('233.toString(16):', (233).toString(16));

//valueOf(): regresa el valor de la instancia como number
const numberValueOf1 = new Number(300);
const numberValueOf2 = 9999;
console.log('valueOf Example1:', numberValueOf1);
console.log('valueOf Example2:', numberValueOf2);
console.log('valueOfExample1.valueOf():', numberValueOf1.valueOf());
console.log('valueOfExample2.valueOf():', numberValueOf2.valueOf());

/*3. Métodos del tipo de dato Object*/

//Métodos estáticos

//assign(): regresa el objeto target (1° parametro) modificado, que copió las propiedades de los demás paráemtros
const assignTarget = {name: 'Adrian', apellido: 'Arango', edad: 23};
const sourceTarget1 = {birthday: '16-09-2002', gender: 'Male', married: false};
const sourceTarget2 = {edad: 24 , birthday: '16-08-2002'};

console.log('assignTarget:',assignTarget);
console.log('sourceTarget1:',sourceTarget1);
console.log('sourceTarget2:',sourceTarget2);

const objectAssignResult = Object.assign(assignTarget,sourceTarget1,sourceTarget2);
console.log('Object.assign(assignTarget,sourceTarget1,sourceTarget2):', objectAssignResult);
//OJO: al usar assign, la variable original también es modificada
console.log('assignTarget === objectAssignResult:',assignTarget === objectAssignResult);

//create(): regresa un nuevo objeto que crea usando como prototipo un objeto existente
const createPrototype = { height: 10, width: 5, material: 'iron', fuel: 'gasoline', showCharacteristics(){
    console.log(`I am made of ${this.material} and I am powered by ${this.fuel}`);
}};
console.log('createPrototype:', createPrototype);

const createdObject = Object.create(createPrototype);
createdObject.material = 'aluminum';
createdObject.fuel = 'corn';
createdObject.showCharacteristics();

//defineProperties(): crea o modifica propiedades directamente en un objeto, de ahí regresa el objeto
const myObject = {};
console.log('myObject:', myObject);

Object.defineProperties(myObject, {
    firstProperty: {
        value: 500, writable: true
    },
    secondProperty: {
        value: 'Soy un string', writable: true
    },
    thirdProperty: {}
});

console.log('myObject after defineProperties():', myObject);

//defineProperty(): crea o modifica una propiedad directamente en un objeto, el cual luego retorna
const emptyObject = {};
console.log('emptyObject:', emptyObject);

Object.defineProperty(emptyObject, 'uniqueValue', {
    value: 9999, writable: false
});

emptyObject.uniqueValue = 92; //No podrá sobreescribir por la definición de la propiedad como no writable
console.log('emptyObject after defineProperty():', emptyObject);

//entries(): regresa un arreglo de los pares key-value enumerables de un objeto
const entriesObject = { a: 'value1', b: 'value2', c: 'value3', d: 'value4', e: 'value5' }
console.log('entriesObject:', entriesObject);
console.log('Object.entries(entriesObject):', Object.entries(entriesObject));

for(const [key,value] of Object.entries(entriesObject)){
    console.log(`Key: ${key}, Value: ${value}`);
}

//freeze(): regresa al mismo objeto, lo congela completamente, no sobreescrible, no modificable (max priority)
const frozenObject = { token: '0va93CSm21xP', user: 'elAdrian1608', password: '******' };
console.log('Object before frozen:', frozenObject);
Object.freeze(frozenObject);

frozenObject.token = '2';
frozenObject.user = 'none';
frozenObject.password = 'password';
console.log('Object after freeze() and modifications:', frozenObject);

//fromEntries(): regresa un objeto de una lista de pares key-value transformada
const fromEntriesExample = new Map([
    ['a', 'avelinda'], ['b', 4322], ['c', 'canguro']
]);
console.log('fromEntries Example:', fromEntriesExample);

const objectFromEntries = Object.fromEntries(fromEntriesExample);
console.log('Object.fromEntries(fromEntriesExample):', objectFromEntries);

//getOwnPropertyDescriptor(): regresa un objeto que define la configuración de la propiedad específica de un objeto
const propertiesObjectExample = { color:  'blue' , size: 'XL', material: 'wool'};
console.log('propertiesObjectExample:', propertiesObjectExample);
const propertyDescription = Object.getOwnPropertyDescriptor(propertiesObjectExample, 'color');
console.log('Object.getOwnPropertyDescriptor(propertiesObjectExample,"color"):', propertyDescription);

//getOwnPropertyDescriptors(): regresa un objeto con todos los objetos descriptores de cada propiedad del objeto
console.log('Object.getOwnPropertyDescriptors(propertiesObjectExample):', Object.getOwnPropertyDescriptors(propertiesObjectExample));

//getOwnPropertyNames(): regresa un arreglo con los nombres de todas las propiedades del objeto
console.log('Object.getOwnPropertyNames(propertiesObjectExample):', Object.getOwnPropertyNames(propertiesObjectExample));

//getOwnPropertySymbols(): regresa un arreglo con todas las propiedades de tipo symbol en el objeto
console.log('Object.getOwnPropertySymbols(propertiesObjectExample):', Object.getOwnPropertySymbols(propertiesObjectExample));
const object = { };
object[Symbol('a')] = 'localSymbol';
object[Symbol.for('b')] = 'globalSymbol';
Object.assign(propertiesObjectExample, object);
console.log('propertiesObjectExample:', propertiesObjectExample);   
console.log('Object.getOwnPropertySymbols(propertiesObjectExample):', Object.getOwnPropertySymbols(propertiesObjectExample));

//getPrototypeOf(): regresa el prototipo del objeto especificado
console.log('Object.getPrototypeOf(propertiesObjectExample):', Object.getPrototypeOf(propertiesObjectExample));

//groupBy(): regresa un iterable que agrupa al iterable base según el criterio dado a la propiedad destacada
const groupByExample = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];

console.log('groupByExample:', groupByExample);
console.log('Object.groupBy(groupByExample, ({ type }) => type):', Object.groupBy(groupByExample, ({ type }) => type));

//hasOwn(): regresa true o false dependiendo de si el objeto tiene una propiedad específica propia (heredada no cuenta)
const hasOwnExample = { name: 'a', size: 'b', color: 'c', birthday: 'd', material: 'e'};
console.log('hasOwnExample:', hasOwnExample);
console.log('Object.hasOwn(hasOwnExample,"name"):', Object.hasOwn(hasOwnExample,'name'));
console.log('Object.hasOwn(hasOwnExample,"year"):', Object.hasOwn(hasOwnExample,'year'));
console.log('Object.hasOwn(hasOwnExample,"material"):', Object.hasOwn(hasOwnExample,'material'));

//is(): regresa true o false dependiendo de si los valores son el mismo (true = lo son, false = no)
console.log('Object.is("1", 1):', Object.is("1", 1));
console.log('Object.is(NaN, NaN):', Object.is(NaN, NaN));
console.log('Object.is(-0, 0):', Object.is(-0, 0));
const isExample = {};
console.log('isExample:', isExample);
console.log('Object.is(isExample, {}):', Object.is(isExample, {})); //no son el mismo porque para objetos compara espacio en memoria (referencia)

//isExtensible(): regresa true o false dependiendo de si el objeto es 'extensible' (permite añadir más propiedades)
const isExtensibleExample = {property1: 'a'};
console.log('isExtensibleExample:', isExtensibleExample);
console.log('Object.isExtensible(isExtensibleExample):', Object.isExtensible(isExtensibleExample));
Object.preventExtensions(isExtensibleExample);
console.log('Object.preventExtensions(isExtensibleExample)');
console.log('Object.isExtensible(isExtensibleExample):', Object.isExtensible(isExtensibleExample));

//isFrozen(): regresa true o false dependiendo de si el objeto está congelado (se le ha aplicado freeze)
const isFrozenExample = {property2: 'b'};
console.log('isFrozenExample:', isFrozenExample);
console.log('Object.isFrozen(isFrozenExample):', Object.isFrozen(isFrozenExample));
Object.freeze(isFrozenExample);
console.log('Object.freeze(isFrozenExample)');
console.log('Object.isFrozen(isFrozenExample):', Object.isFrozen(isFrozenExample));

//isSealed(): regresa true o false dependiendo de si el objeto está sellado (se le ha aplicado seal)
const isSealedExample = { property3: 42 };
console.log('Object.isSealed(isSealedExample):', Object.isSealed(isSealedExample));
Object.seal(isSealedExample);
console.log('Object.seal(isSealedExample)');
console.log('Object.isSealed(isSealedExample):', Object.isSealed(isSealedExample));

//keys(): regresa un arreglo con strings de los nombres de los keys del objeto
const keysExample = { key1: 'a', key2: 'b', key3: 'c', key4: 'd', key5: 'e' };
console.log('keysExample:', keysExample);
console.log('Object.keys(keysExample):', Object.keys(keysExample));

//preventExtensions(): evita que un objeto pueda ser extendido, osea que se le asignen más propiedades
const preventExtensionsExample = {};
console.log('preventExtensions:', preventExtensionsExample);
Object.preventExtensions(preventExtensionsExample);
console.log('Object.preventExtensions(preventExtensionsExample) applied, trying to define property4...');
try {
    Object.defineProperty(preventExtensionsExample, 'property4', {value: 50})
}catch(e){
    console.log("Object.defineProperty(preventExtensionsExample, 'property4', {value: 50}):", e);
}



//Métodos de instancia

