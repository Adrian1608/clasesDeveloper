/**

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

1) Listado plano de contactos

Tarea: crear getContacts(people) que devuelva un arreglo plano con objetos { id, name, email, city, primaryJob }, donde primaryJob es el title del job con mayor salary (si no hay jobs → null).
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