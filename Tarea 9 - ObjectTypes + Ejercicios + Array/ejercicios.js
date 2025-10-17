const people = [
  {
    id: 1,
    name: "Ana Ruiz",
    age: 34,
    email: "ana.ruiz@example.com",
    address: { city: "Guadalajara", state: "JAL", zip: "44100", street: "Av. Vallarta 1200" },
    jobs: [
      { company: "BBVA", title: "Frontend Dev", since: 2020, salary: 45000 },
      { company: "Freelance", title: "Consultant", since: 2018, salary: 12000 }
    ],
    family: [
      { relation: "spouse", name: "Luis Ruiz", age: 36 },
      { relation: "child", name: "Sofia Ruiz", age: 6 }
    ],
    skills: ["js", "lit", "css"],
    transactions: [
      { id: "t1", date: "2025-01-05", amount: 200, type: "debit" },
      { id: "t2", date: "2025-02-10", amount: 150, type: "credit" }
    ]
  },
  {
    id: 2,
    name: "Carlos Gómez",
    age: 45,
    email: "carlos.gomez@example.com",
    address: { city: "Ciudad de México", state: "CDMX", zip: "01000", street: "Insurgentes 200" },
    jobs: [
      { company: "TechCorp", title: "Backend Dev", since: 2016, salary: 60000 }
    ],
    family: [
      { relation: "spouse", name: "María López", age: 42 },
      { relation: "child", name: "Diego Gómez", age: 12 },
      { relation: "parent", name: "Rosa Gómez", age: 70 }
    ],
    skills: ["node", "sql", "aws"],
    transactions: [
      { id: "t3", date: "2025-03-01", amount: 1200, type: "debit" },
      { id: "t4", date: "2025-04-02", amount: 300, type: "debit" }
    ]
  },
  {
    id: 3,
    name: "Mariana Pérez",
    age: 29,
    email: "mariana.perez@example.com",
    address: { city: "Monterrey", state: "NLE", zip: "64000", street: "Av. Constitución 500" },
    jobs: [
      { company: "StartUpX", title: "Fullstack", since: 2021, salary: 38000 },
      { company: "DesignCo", title: "UI Engineer", since: 2019, salary: 18000 }
    ],
    family: [],
    skills: ["react", "ts", "design"],
    transactions: [
      { id: "t5", date: "2025-01-10", amount: 75, type: "credit" }
    ]
  },
  {
    id: 4,
    name: "Raúl Ortega",
    age: 52,
    email: "raul.ortega@example.com",
    address: { city: "Guadalajara", state: "JAL", zip: "44130", street: "Calle Hidalgo 45" },
    jobs: [
      { company: "Finances S.A.", title: "Analyst", since: 2010, salary: 70000 }
    ],
    family: [
      { relation: "child", name: "Lucia Ortega", age: 20 },
      { relation: "child", name: "Andrés Ortega", age: 17 }
    ],
    skills: ["excel", "finance"],
    transactions: [
      { id: "t6", date: "2025-03-15", amount: 5000, type: "debit" }
    ]
  },
  {
    id: 5,
    name: "Sofía Méndez",
    age: 40,
    email: "sofia.mendez@example.com",
    address: { city: "Querétaro", state: "QRO", zip: "76000", street: "Boulevard Central 100" },
    jobs: [
      { company: "EduTech", title: "Product Manager", since: 2017, salary: 52000 }
    ],
    family: [
      { relation: "spouse", name: "Pablo Méndez", age: 41 },
      { relation: "parent", name: "Carmen Méndez", age: 68 }
    ],
    skills: ["product", "ux"],
    transactions: []
  },
  {
    id: 6,
    name: "Diego Fernández",
    age: 23,
    email: "diego.fernandez@example.com",
    address: { city: "Ciudad de México", state: "CDMX", zip: "03100", street: "Romero 12" },
    jobs: [],
    family: [
      { relation: "parent", name: "Ana Fernández", age: 48 }
    ],
    skills: ["js", "node"],
    transactions: [
      { id: "t7", date: "2025-04-20", amount: 50, type: "credit" },
      { id: "t8", date: "2025-04-21", amount: 25, type: "credit" }
    ]
  }
];

/* ENUNCIADOS: 

1) Listado plano de contactos

Tarea: crear getContacts(people) que devuelva un arreglo plano con objetos { id, name, email, city, primaryJob }, 
donde primaryJob es el title del job con mayor salary (si no hay jobs → null).
Salida esperada (parcial): { id:1, name:"Ana Ruiz", email:"ana.ruiz@example.com", city:"Guadalajara", primaryJob:"Frontend Dev" }

2) Buscar por ciudad y ordenar por edad descendente

Tarea: findByCity(people, city) → lista de personas en city, ordenadas por age desc.
Ejemplo: findByCity(people, "Guadalajara") devuelve Ana (34), Raúl (52) — orden correcto: Raúl, Ana.

3) Total de salarios por persona (reduce + suma)

Tarea: sumSalaries(person) → suma de salary en person.jobs. Luego totalSalariesAll(people) que devuelva array { id, name, totalSalary } y ordene por totalSalary desc.

4) Personas que tienen familiares menores de X años

Tarea: withMinors(people, edad) → devuelve personas que tengan al menos un miembro family con age < edad.

5) Agrupar personas por estado (groupBy)

Tarea: groupByState(people) → objeto { JAL: [...], CDMX: [...], ... } con arrays de id o name.

6) Balance de transacciones por persona (credit - debit)

Tarea: transactionBalance(person) → suma: créditos restados o sumados según convenga. Específica: balance = sum(amount where type==='credit') - sum(amount where type==='debit').
Luego: balancesAll(people) con {id, name, balance} ordenado asc.

7) Buscar el skill más común entre todas las personas

Tarea: mostCommonSkill(people) → string (skill más frecuente). Usa reduce para contar ocurrencias y Object.entries para elegir máximo.

8) Sumar gastos por ciudad (reduce + flatten)

Tarea: expensesByCity(people) → objeto { cityName: totalDebitAmount } (solo type==='debit').

9) Obtener árbol familiar plano

Tarea: flattenFamilies(people) → arreglo con objetos { personId, personName, relation, relativeName, relativeAge } para todos los familiares.

10) Encontrar personas "multi-job" con promedio salarial

Tarea: multiJobAverages(people) → para quienes tienen más de 1 job, devolver { id, name, avgSalary }

11) Filtrar emails válidos y formatearlos

Tarea: validEmails(people) → lista de emails válidos (regExp simple) en minúsculas, sin duplicados.
Extras: quitar espacios, validar @ y dominio simple.

13) Merge de transacciones duplicadas

Tarea: mergeTransactions(person) → si una person.transactions contiene transacciones con el mismo id, unirlas sumando amount

15) Agrupar por decade de edad y contar

Tarea: ageBuckets(people) → { '20s': 2, '30s': 3, ... }.

16) Pipeline de transformación con funciones puras (compose)

Tarea: Crear compose(...funcs) y usarlo en processPeople = compose(filterAdults, mapToSummary, sortByName) donde:

filterAdults filtra age >= 18,
mapToSummary transforma a { id, name, city },
sortByName ordena alfabéticamente.

17) Implementar groupBy genérico y usarlo

Tarea: groupBy(list, fn) donde fn devuelve la clave. Usarlo para agrupar personas por primaryJobCompany (empresa del job con mayor salario). Si no tiene jobs → "unemployed".

19) Estadísticas por rango salarial

Tarea: salaryStats(people) que calcule sobre todos los jobs:

min, max, avg, median, percentiles (25, 50, 75).
Cómo: extraer todos los salarios en un array, ordenarlo y calcular métricas (reduce, Math).

Restricciones

Para todos los ejercicios: evita mutar el people original (usa copias si modificas).
Usa métodos funcionales (map, filter, reduce, flatMap) cuando aplique;
Añade validación de entrada (por ejemplo, si people no es array → lanzar TypeError).
Documenta las funciones con comentarios JSDoc si vas a entregarlas en un repo.
 * 
 * 
 * 
 */

//RESOLUCIÓN: 

// 1) Listado plano de contactos

/**
 * Devuelve un arreglo resumido con id, name, email y ciudad de cada persona en el arreglo original
 * @param {Array} people - Arreglo de personas con campos completos
 * @returns {Array} - Arreglo de personas con campos resumidos en id, name, email y ciudad
 */
function getContacts(people) {
  if(!Array.isArray(people)) throw new TypeError('people parameter is not an array');

  const result = [];
  [...people].forEach((person) => {

    const newPerson = {
      id: person.id,
      name: person.name,
      email: person.email,
      city: person.address.city
    };
    const primaryJob = person.jobs.reduce((accumulator, person) => (person.salary > accumulator ? person : accumulator), 0);
    newPerson.primaryJob = primaryJob.title ? primaryJob.title : null;

    result.push(newPerson);
  });

  return result;
}

console.log('1) getContacts(people):', getContacts(people));

// 2) Buscar por ciudad y ordenar por edad descendente

/**
 * Devuelve un arreglo con las personas que pasan el filtro de ciudad, y lo ordena por edad de manera descendente
 * @param {Array} people - Arreglo de personas con campos completos
 * @param {string} city - Nombre de la ciudad que se usa para filtrar
 * @returns {Array} - Arreglo de personas que pasaron el filtro, ordenado por edad de manera descendente
 */
function findByCity(people, city) {
  if(!Array.isArray(people)) throw new TypeError('people parameter is not an array');  
  if(typeof city !== 'string') throw new TypeError('city parameter is not a string');

  const result = [...people].filter((person) => person.address.city === city);
  //Ordenar por age desc
  result.sort((personA, personB) => personB.age - personA.age );
  return result;
}

console.log('2) findByCity(people, "Guadalajara"):', findByCity(people,'Guadalajara'));

// 3) Total de salarios por persona (reduce + suma)

/**
 * Devuelve un número que es la suma de los salarios de una persona en sus trabajos respectivos
 * @param {object} person - Persona entre cuyos campos se encuentran sus trabajos con sus salarios
 * @returns {number} - Número resultante que es la suma de los salarios en su trabajo
 */
function sumSalaries(person) {
  return person.jobs.reduce((total, person) => (total += person.salary), 0);
}

/**
 * Devuelve un arreglo resumido de personas con id, name y totalSalary, siendo esta última la suma de sus salarios en sus trabajos, que es el criterio con el que se ordena de manera descendente
 * @param {Array} people - Arreglo de personas con campos completos
 * @returns {Array} - Arreglo de personas resumido en id, name y totalSalary, ordenado de manera descendente en base al totalSalary
 */
function totalSalariesAll(people) {
  if(!Array.isArray(people)) throw new TypeError('people parameter is not an array');  
  const result = [];
  
  [...people].forEach((person) => {
    const newPerson = {
      id: person.id,
      name: person.name,
      totalSalary: sumSalaries(person)
    };
    result.push(newPerson);
  });

  result.sort((personA, personB) => personB.totalSalary - personA.totalSalary);
  return result;
}

console.log('3) Total de salarios por persona (reduce+suma):', totalSalariesAll(people));

// 4) Personas que tienen familiares menores de X años

/**
 * Devuelve un arreglo filtrado en base a qué personas tienen al menos un familiar menor a la edad mandada como parámetro
 * @param {Array} people - Arreglo de personas con campos completos
 * @param {number} edad - Número que se usará como filtro para determinar qué personas tienen edad menor a este
 * @returns {Array} - Arreglo de personas cuyos familiares pasaron el filtro de edad
 */
function withMinors(people, edad) {
  if(!Array.isArray(people)) throw new TypeError('people parameter is not an array');  
  if(typeof edad !== 'number') throw new TypeError('edad parameter is not a number');

  //Solo para aclarar: se hace un filter, en que si es que algún miembro familiar (some) es menor a la edad, manda true y pasa filtro
  return [...people].filter((person) => person.family.some((familiar) => familiar.age < edad ));  
}

console.log('4) Personas que tienen familiares menores de 18 años:', withMinors(people, 18));

// 5) Agrupar personas por estado

/**
 * Devuelve un objeto en el que se aguran a las personas en base al estado en que viven
 * @param {Array} people - Arreglo de personas con campos completos
 * @returns {object} - Objeto en que se agrupan las personas en base al estado en que residen
 */
function groupByState(people) {
  if(!Array.isArray(people)) throw new TypeError('people parameter is not an array');  
  
  return Object.groupBy([...people], ({address}) => address.state);
}

console.log('5) Agrupar personas por estado:', groupByState(people));

// 6) Balance de transacciones por persona (credit - debit)

/**
 * Devuelve un número, que es el balance de las transacciones de la persona en cuestión, sumando si son de 'credit' y restando si son de 'debit'
 * @param {object} person - Objeto de persona que contiene las transacciones
 * @returns {number} - Número resultante de la suma y resta de las transacciones de acuerdo al criterio establecido
 */
function transactionBalance(person) {
  return person.transactions.reduce((accumulator, transaction) => 
    (transaction.type === 'credit' ? accumulator -= transaction.amount : accumulator += transaction.amount ) , 0);
}

/**
 * Devuelve un arreglo que está resumido en los campos id, name y balance, siendo el último el balance total de sus transacciones
 * @param {Array} people - Arreglo de personas con campos completos
 * @returns {Array} - Arreglo de personas con los campos id, name y balance
 */
function balancesAll(people) {
  if(!Array.isArray(people)) throw new TypeError('people parameter is not an array');  

  const result = [];

  [...people].forEach((person) => {
    const newPerson = {
      id: person.id,
      name: person.name,
      balance: transactionBalance(person)
    };
    result.push(newPerson);
  });

  result.sort((personA, personB) => personA.balance - personB.balance );

  return result;
}

console.log('6) Balance de transacciones por persona:', balancesAll(people));

// 7) Buscar el skill más común entre todas las personas

/**
 * Devuelve un string que representa la skill más común dentro de la lista de personas mandada
 * @param {Array} people - Arreglo de personas con campos completos
 * @returns {string} - String con el nombre de la skill que más veces se ha visto en la lista de personas
 */
function mostCommonSkill(people) {
  if(!Array.isArray(people)) throw new TypeError('people parameter is not an array');  

  const skillCount = [...people].reduce((accumulator, person) => {
    person.skills.forEach((skill) => {
      accumulator[skill] = (accumulator[skill] || 0) + 1;
    });
    return accumulator;
  }, {});

  const result = Object.entries(skillCount).reduce((accumulator, skill) => (accumulator[1] < skill[1] ? skill : accumulator));
  return result[0];

}

console.log('7) Buscar el skill más común entre todas las personas:', mostCommonSkill(people));

// 8) Sumar gastos por ciudad (reduce + flatten)

/**
 * Devuelve un objeto que contiene los gastos agurpados por ciudad, solo considerando los de tipo 'debit'
 * @param {Array} people - Arreglo de personas con campos completos
 * @returns {object} - Objecto agrupado por ciudades, que tiene como valor sus gastos que figuraban como 'debit'
 */
function expensesByCity(people) {
  if(!Array.isArray(people)) throw new TypeError('people parameter is not an array'); 

  const transactions = [...people].flatMap(person => 
    person.transactions.map(transaction => ({
      city: person.address.city,
      amount: transaction.amount,
      type: transaction.type
    }))
  );

  return transactions.reduce((accumulator, transaction) => {
    if(transaction.type === 'debit'){
      accumulator[transaction.city] = (transaction.amount || 0) + transaction.amount;
    }
    return accumulator;
  }, {});  

}

console.log('8) Sumar gastos por ciudad:', expensesByCity(people));

// 9) Obtener árbol familiar plano

/**
 * Devuelve un arreglo plano con los campos personId, personName, relation, relativeName y relativeAge, que pertenecen a cada persona respectiva de la lista con su respectivo familiar
 * @param {Array} people - Arreglo de personas con campos completos
 * @returns {Array} - Arreglo plano con la estructura personId, personName, relation, relativeName y relativeAge
 */
function flattenFamilies(people) {
  if(!Array.isArray(people)) throw new TypeError('people parameter is not an array'); 

  return [...people].flatMap(person => 
    person.family.map(familiar => ({
      personId: person.id,
      personName: person.name,
      relation: familiar.relation,
      relativeName: familiar.name,
      relativeAge: familiar.age
    }))
  );

}

console.log('9) Obtener árbol familiar plano:', flattenFamilies(people));

// 10) Encontrar personas "multi-job" con promedio salarial

/**
 * Devuelve un arreglo con las personas que tengan más de un trabajo, con la estructura id, name y avgSalary, siendo la última correspondiente al promedio de sus salarios
 * @param {Array} people - Arreglo de personas con campos completos
 * @returns {Array} - Arreglo filtrado con las personas con más de un trabajo, con el campo avgSalary que es el promedio de sus salarios
 */
function multiJobAverages(people){
  if(!Array.isArray(people)) throw new TypeError('people parameter is not an array'); 

  return result = [...people].filter((person => person.jobs.length > 1)).map(person => ({
    id: person.id,
    name: person.name,
    avgSalary: person.jobs.reduce((accumulator, job) => (accumulator + job.salary), 0) / person.jobs.length
  })
);

}

console.log('10) Encontrar personas "multi-job" con promedio salarial:', multiJobAverages(people));

// 11) Filtrar emails válidos y formatearlos

/**
 * Devuelve un arreglo de los emails de la lista de personas mandada, formateados con minúscula, asegurando que tengan @ y respeten en general la estructura regex genérica para los formatos de correo electrónico
 * @param {Array} people - Arreglo de personas con campos completos
 * @returns {Array} - Arreglo con los emails de las personas, formateados para seguir el formato correcto
 */
function validEmails(people){  
  if(!Array.isArray(people)) throw new TypeError('people parameter is not an array'); 

  // /^[^\s@]+@[^\s@]+\.[a-z]+$/ : basicamente, valida que los textos antes y después del @ no tiene espacios en blanco o el mismo @
  // Luego, llega al punto, en que asegura que la parte final sea de a-z, osea .com, .org, etc
  return emails = [...people].map((person) => person.email.trim().toLowerCase()).filter((email) => /^[^\s@]+@[^\s@]+\.[a-z]+$/.test(email));
}

console.log('11) Filtrar emails válidos y formatearlos:', validEmails(people));

//13) Merge de transacciones duplicadas:
const examplePerson =
  {
    id: 1,
    name: "Ana Ruiz",
    age: 34,
    email: "ana.ruiz@example.com",
    address: { city: "Guadalajara", state: "JAL", zip: "44100", street: "Av. Vallarta 1200" },
    jobs: [
      { company: "BBVA", title: "Frontend Dev", since: 2020, salary: 45000 },
      { company: "Freelance", title: "Consultant", since: 2018, salary: 12000 }
    ],
    family: [
      { relation: "spouse", name: "Luis Ruiz", age: 36 },
      { relation: "child", name: "Sofia Ruiz", age: 6 }
    ],
    skills: ["js", "lit", "css"],
    transactions: [
      { id: "t1", date: "2025-01-05", amount: 200, type: "debit" },
      { id: "t2", date: "2025-02-10", amount: 150, type: "credit" },
      { id: "t1", date: "2025-01-05", amount: 300, type: "debit" },
      { id: "t2", date: "2025-02-10", amount: 400, type: "credit" }      
    ]
  };

/**
 * Devuelve el objeto de la persona inicial, habiendo unido las transacciones que tengan el mismo ID, sumando sus cantidades
 * @param {object} person - Objeto de persona con sus transacciones
 * @returns {object} - Objecto de persona con sus transacciones habiendo sido actualizadas
 */
function mergeTransactions(person) {

  const mergedResults = person.transactions.reduce((accumulator, transaction) => {

    if(accumulator[transaction.id]){
      accumulator[transaction.id].amount += transaction.amount;
    }else{
      accumulator[transaction.id] = {... transaction};
    }
    return accumulator;

  }, {}); 

  person.transactions = mergedResults;
  return person;
}

console.log('13) Merge de transacciones duplicadas:', mergeTransactions(examplePerson));

// 15) Agrupar por decade de edad y contar

/**
 * Devuelve un objeto que posee grupos de edad (10s, 20s, 30s...) y un valor de número que representa cuántas personas pertenecen a dicho grupo
 * @param {Array} people - Arreglo de personas con campos completos
 * @returns {object} - Objecto con los grupos de edad representando cuántas personas pertenecen a cada uno
 */
function ageBuckets(people) {
  if(!Array.isArray(people)) throw new TypeError('people parameter is not an array'); 

  const peopleGroups = [...people].map((person) => ({
    age: person.age,
    ageGroup: `${(Math.floor(person.age/10)*10)}s`
  }));

  return peopleGroups.reduce((accumulator, person) => {
    accumulator[person.ageGroup] = (accumulator[person.ageGroup] || 0) + 1;
    return accumulator;
  }, {});

}

console.log('15) Agrupar por decade de edad y contar:', ageBuckets(people));

// 16) Pipeline de transformación con funciones puras

/**
 * Devuelve un arreglo en que se han filtrado a las personas que sean mayores a 18 años
 * @param {Array} people - Arreglo de personas con campos completos
 * @returns {Array} - Arreglo filtrado en base a la edad para considerarlos adultos
 */
function filterAdults(people) {
  if(!Array.isArray(people)) throw new TypeError('people parameter is not an array'); 

  return [...people].filter((person) => person.age >= 18);
}

/**
 * Devuelve un arreglo resumido de las personas con la estructura id, name, city
 * @param {Array} people - Arreglo de personas con campos completos
 * @returns {Array} - Arreglo resumido en los campos id, name, city
 */
function mapToSummary(people) {
  if(!Array.isArray(people)) throw new TypeError('people parameter is not an array'); 

  return [...people].map((person) => ({
    id: person.id,
    name: person.name,
    city: person.address.city
  }));
}

/**
 * Devuelve un arreglo ordenado alfabéticamente en base al nombre de las personas
 * @param {Array} people - Arreglo de personas con campos completos
 * @returns {Array} - Arreglo ordenado por los nombres alfabéticamente
 */
function sortByName(people) {
  if(!Array.isArray(people)) throw new TypeError('people parameter is not an array'); 

  return [...people].sort(function(personA, personB){
    return personA.name.localeCompare(personB.name);
  });
}

//Se forma la función compose
const compose = (... funcs) => (input) =>
  funcs.reduceRight((accumulator, funcs) => funcs(accumulator), input);

//En compose se empieza de la derecha como en funciones matemáticas: f(g(x)), primero resuelve g luego f, osea desde el último
//Si quisiera hacerse de izquierda a derecha por convención, se usaría pipe en vez de compose
//Aquí processPeople se vuelve una función que llama al compose, esperando el input definido en compose
const processPeople = compose(sortByName, mapToSummary, filterAdults);
const processPeopleResult = processPeople(people);
console.log('16) Pipeline de transformación con funciones puras:', processPeopleResult);

// 17) Implementar groupBy genérico y usarlo
const peoplePlusPrimaryJob =  [...people].map((person) => ({
  ... person, 
  primaryJobCompany: person.jobs.reduce((accumulator, job) => 
    (job.salary > accumulator.salary ? job : accumulator), {company: 'unemployed', salary: 0}
  ).company
}));

/**
 * Devuelve un objeto en que se agrupan las personas del arreglo parámetro en base a un atributo específico (esta es una función genérica)
 * @param {Array} list - Arreglo de personas con campos completos
 * @param {function} fn - Función definida al llamar el método, que determina en base a qué atributo se busca agrupar a las personas
 * @returns {object} - Objeto en que se han agrupado a las personas en base al criterio designado
 */
function groupBy(list, fn) {
  if(!Array.isArray(list)) throw new TypeError('list parameter is not an array'); 

  return [...list].reduce((accumulator, item) => {
    const grouper = fn(item); //Recupera la propiedad del item (en este caso, primaryJobCompany)
    (accumulator[grouper] = accumulator[grouper] || []).push(item);
    return accumulator;
  }, {});

}

//Se manda person => person.primaryJobCompany, que es como una funcion para al llamarla en la genérica devuelva el atributo (que es lo que hace la función)
console.log('17) Implementar groupBy genérico y usarlo:', groupBy(peoplePlusPrimaryJob, person => person.primaryJobCompany));
console.log('17) Extra 1 - Agrupar por ciudad:', groupBy(peoplePlusPrimaryJob, person => person.address.city));

// 19) Estadísticas por rango salarial

/**
 * Devuelve un objeto con las estadísticas de los salarios de las personas mandadas en el arreglo (mínimo, máximo, promedio, mediana y percentiles)
 * @param {Array} people - Arreglo de personas con campos completos
 * @returns {object} - Objeto con las estadísticas de los salarios de las personas (min = mínimo, max = máximo, avg = promedio, median = mediana, percentiles = percentiles)
 */
function salaryStats(people) {
  if(!Array.isArray(people)) throw new TypeError('people parameter is not an array'); 

  //Se recorren las personas en búsqueda de trabajos para almacenar en el array
  const jobSalariesArray = [...people].flatMap(person => person.jobs.map(job => job.salary));

  //Se ordena el array de manera ascendente
  jobSalariesArray.sort((a,b) => a-b);
  console.log(jobSalariesArray);

  //min (ya que se ordenó el arreglo de manera ascendente, solo se elige el primer elemento, aunque acá está la lógica en caso esté desarreglado)
  //const min = jobSalariesArray.reduce((acc, salary) => (salary < acc ? salary : acc), Infinity);
  const min = jobSalariesArray[0];

  //max (ya que se ordenó el arreglo de manera ascendente, solo se elige el último elemento, aunque acá está la lógica en caso esté desarreglado)
  //const max = jobSalariesArray.reduce((acc, salary) => (salary > acc ? salary : acc), -Infinity);  
  const max = jobSalariesArray[jobSalariesArray.length-1];

  //avg (se redondea a dos decimales y se transforma a float al final por la probabilidad de ser decimal considerando que toFixed lo pasa a string)
  const avg = Number.parseFloat((jobSalariesArray.reduce((acc, salary) => {
    acc += salary;
    return acc;
  }, 0) / jobSalariesArray.length).toFixed(2));

  //median
  let halfSize = (jobSalariesArray.length)/2;
  const median = halfSize%2 === 0 ? ((jobSalariesArray[halfSize-1] + jobSalariesArray[halfSize])/2) : jobSalariesArray[Math.floor(halfSize)];

  //percentiles (25,50,75): se redondean hacia abajo en caso salga decimal, de modo que se elige el índice correspondiente (ejemplo, si sale 5.5, sale 5, que es el indice[5], que seria el elemento 6 que al hacer calculo matemático seria al que se redondearia, pero como es arreglo en vez de ser 6 seria 5)
  let percentile25 = jobSalariesArray[ Math.floor((25/100)*jobSalariesArray.length) ];
  let percentile50 = jobSalariesArray[ Math.floor((50/100)*jobSalariesArray.length) ];
  let percentile75 = jobSalariesArray[ Math.floor((75/100)*jobSalariesArray.length) ];      
  const percentiles = { percentile25: percentile25, percentile50: percentile50, percentile75: percentile75 };

  return {min: min, max: max, avg: avg, median: median, percentiles: percentiles};
}

console.log('19) Estadísticas por rango salarial:', salaryStats(people));

console.log('Objeto final no mutado:', people);