// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// var student = {
//   "nome" : "walter",
//   "cognome" : "white",
//   "eta" : "50"
// };
//
// for (var k in student){
//   console.log(student[k]);
// }

var students = [
  {
    "nome" : "walter",
    "cognome" : "white",
    "eta" : "50"
  },
  {
    "nome" : "elon",
    "cognome" : "musk",
    "eta" : "30"
  },
  {
    "nome" : "peter",
    "cognome" : "thiel",
    "eta" : "40"
  },
];

// for (var i = 0; i < students.length; i++){
//   console.log(students[i].nome);
//   console.log(students[i].cognome);
// }

var nomeIserito = prompt("inserisci un nome");
var cognomeInserito = prompt("inserisci un cognome");
var etaInserita = parseInt(prompt("inserisci un eta"));

var studenteInserito = {
  nome : nomeIserito,
  cognome : cognomeInserito,
  eta : etaInserita
};

students.push(studenteInserito);

console.log(students);















// edwjfnwedij
