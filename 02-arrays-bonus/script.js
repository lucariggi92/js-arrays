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
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers)

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

//l'obiettivo è verificare che ogni elemento dell'array abbia una lunghezza maggiore o uguale a 5
//il singolo elemento è teacher.lenght[i]>5
//uso un ciclo for per analizzare ogni elemento
//all'interno uso un ciclo if per verificqre la condizione di ogni singolo elemento 
//se è vera aggiungo all'array tramite .push (aggiungi alla fine) ogni singolo elemento che soddisfa la condizione
const longNames = []
for (i = 0; i < teachers.length; i++) {
  let currentTeacher = teachers[i]
  if (currentTeacher.length >= 5) {
    longNames.push(currentTeacher)
  }
}
console.log(longNames)

// 3. Rimuovi 'Ed' dall'array teachers

teachers.splice(5, 1)
console.log(teachers)

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

//voglio sapere se è presente true se non è presente false
const isFabioPresent = teachers.includes("Fabio")
console.log(isFabioPresent)

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(",");
console.log(teachersString)