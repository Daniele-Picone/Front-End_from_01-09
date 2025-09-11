

const studenti = [
{ nome: "Mario Rossi", voto: 8, presente: true },
{ nome: "Luigi Bianchi", voto: 5, presente: false },
{ nome: "Anna Verdi", voto: 9, presente: true },
{ nome: "Beatrice Neri", voto: 6, presente: true },
{ nome: "Carlo Blu", voto: 4, presente: true },
{ nome: "Davide Rosa", voto: 7, presente: false },
{ nome: "Elena Gialli", voto: 10, presente: true },
{ nome: "Federico Viola", voto: 3, presente: false },
{ nome: "Giorgia Azzurra", voto: 8, presente: true },
{ nome: "Lorenzo Marrone", voto: 2, presente: false },
{ nome: "Martina Rosa", voto: 6, presente: true },
{ nome: "Simone Nero", voto: 5, presente: true }
];
const btn = document.getElementById('run');
const out = document.getElementById('output');

function log(titolo, dato) {
    const h4 = document.createElement('h4');
    const pre = document.createElement('pre');
    h4.textContent = titolo;
    pre.textContent = JSON.stringify(dato, null, 2);
    out.append(h4, pre);


    }

btn.addEventListener('click', () => {
        out.innerHTML = '';
        
        studenti.forEach(( { nome,voto,presenza } ) => {
        const esito = (voto >= 6) ? 'promosso' : 'bocciato';
        log('esito del voto', `L'alunno ${nome} con voto: ${voto} è stato ${esito}`) 
        })
        

        const nuovoStudente1 = { nome: "Irene Viola", voto: 7, presente: true };
        const nuovoStudente2 = { nome: "Tommaso Grigio", voto: 9, presente: false };
        const tuttiGliStudenti = [...studenti, nuovoStudente1, nuovoStudente2]

        log('Tutti gli studneti compresi i nuovi esercizio dello spred ', tuttiGliStudenti )



        
        function raggruppaNomi(...nomi) {
        return nomi;
        }

        const listaNomi = raggruppaNomi('Antionio', 'giuseppe');
        log('Esercizio del Rest: Nomi raggruppati', listaNomi);

        
        const studentiMap = studenti.map( el => `${el.nome}: ${el.voto}` );

        log('Map Arrey Studenti', studentiMap);

        const studentiPresenti = studenti.filter(el => el.presente === true) 
       log ('Filter Studenti presenti', studentiPresenti) 
       
       let ul = document.createElement('ul');
       studenti.forEach(( { nome,presente } ) => {
           let simboloPresenza = presente ? '✔' : '✘';
           
           let li = document.createElement('li')
            li.innerText = `${nome} -> presente : ${simboloPresenza}`

           ul.appendChild(li)

       })
       log('presenze')
       out.appendChild( ul);

        studenti.forEach(( { nome,voto,presente } ) => {
         
            let presenza = presente ? 'presente' : 'assente'

            log(`Ciao, sono ${nome}, ho ${voto} e sono ${presenza}.`)
        })

    })

    