const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

// OPZIONE 1
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers);

// OPZIONE 2
// for (let i = teachers.length -1; i >= 0; i--) {
//   const curItem = teachers[i];
//   console.log(curItem);
// }

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.unshift(teachers[i]);
  }
}
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(5, 1,);
console.log(teachers);
