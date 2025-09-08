
// variabili

let numero = 42;
let parola= 'ciao';
let flag = false;
let nulla = null
let nonDefinito; 

console.log('il numero è :' +" "+  + numero , 'la parola è:'+' '+ parola , 'tutto quest è:'+ '' +' ' + flag , 'ma anche:' + ' ' + nulla +'e'+ nonDefinito );
//  operatori
let somma = 7 + 5;
console.log('la somma è' + ' '+ somma);

let sottraizone = 10 - 3 ;
console.log('la sottrazione è' + ' '+ sottraizone);

let prodotto = 4 * 6;

console.log('il prodotto è' + ' '+ prodotto);

let quozionte = 20 / 4; 
console.log('il quoziente è' + ' '+ quozionte);

let resto = 17 % 3 ;
console.log('il resto è' + ' '+ resto);

let punti =50 
punti += 10;
console.log('la somma è' + ' '+  punti);



console.log(somma == '12');
console.log(somma === '12');

console.log(resto != 2);
console.log(resto !== '1');

// condizioni

let eta = 20 ;

if( eta < 18){
    console.log('sei minorenne');
    
}

let voto = 30;

if(voto === 30){
    console.log('ottimo');
    
}else if(voto >= 18 ){
    console.log('buono');
    
}else{
    console.log('insuficiente');
    
}


let ora = 15;

if (ora < 12) {
    console.log("Buongiorno");
} else if (ora < 18) {
    console.log("Buon pomeriggio");
} else {
    console.log("Buonasera");
}


//  cicli


console.log('inizio a contare');

for(let i = 0 ; i <= 20 ; i++){
    console.log(i);
    
}



console.log('inizio i pari');

for(let i = 0 ; i <= 20 ; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

console.log('inizio sottrazione');


let decremento = 10 ;
while ( decremento - 1 ) {

    console.log(decremento);
    decremento--   
}


// funzioni

function saluta (){
    console.log('ciaoo')
}

saluta();

function sommiamo(a , b) {
    let somma = a + b ;
    console.log(somma);
    
}
sommiamo(23,30)

function moltiplichiamo (a,b){
    let moltiplicazione= a * b; 
    console.log('il prodotto è'+ ' '+ moltiplicazione);
    
}

moltiplichiamo(4 , 322)

function isPari (a,b){
    let pari= a % b; 
    console.log('il numero è'+ ' '+ pari );
    
}

isPari(33,3)



function quadrato (a){
    let quadrato = a * a; 
    console.log('il prodotto è'+ ' '+ quadrato);
    
} 

quadrato(33)

function presentati (nome, eta){
    console.log('ciao mi chiamo ' + ' '+ nome + ' ' + 'ho' + eta + ' ' + 'anni');
}

presentati('daniele', 28)



// arrey 

let frutta = [ "mela" , "pera", "banana" ]

 frutta.push('kiwi');

 console.log(frutta[3]);

 let ultimo = frutta.pop()

 console.log(ultimo)

for(let i = 0 ; i < frutta.length; i++){
    console.log(frutta[i])
}

console.log(frutta.length)

// oggetti

let auto = {
   
    marca: 'fiat',
    modello: 'Astra',
    anno: '2000',
  descrivi: function() {
    console.log(`Questa auto è una ${this.marca} ${this.modello} del ${this.anno}`);
  }
}

console.log(auto.modello);
console.log(auto.anno);


auto.descrivi()

// esercizi finali 
let nomi = [ 'Daniele','Gino', 'Carmine'];

for(let i = 0; i < nomi.length; i++){
    console.log('ciao' + ' '+ nomi[i]);
    
}

let studente = {
     nome: 'Daniele',
     voto: 28,
}

console.log(studente.nome + ' ' + 'ha preso'+ ' '+ studente.voto)

function maiuscolo(parola) {
  return parola.toUpperCase();
}

console.log(maiuscolo("ciao"));
console.log('inizio quadrati');

for (let i = 1; i <= 10; i++) {
  console.log(i * i);
}


// // esercizi prompt

// let nome = prompt('inserisci il tuo nome ')

// alert('Ciao' + ' ' + nome)

// let numeroPrompt = prompt('inserisci numero');
// let quadratoPrompt = numeroPrompt * numeroPrompt;

// alert(' Il prodotto di ' + numeroPrompt + ' ' + 'è' + ' ' + quadratoPrompt)


// let num1 = prompt('inserisci primo numero');

// let num2 = prompt('inserisci secondo numero');

// let sommaNumeriPrompt = num1 + num2;

// alert('la somma è' +' ' + sommaNumeriPrompt);


