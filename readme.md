## TRACCIA

Viene fornito un file js in cui è definito un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.

## PSEUDOCODE
MILESTONE 1:
stampare su console le informazioni di nome, ruolo e la stringa della foto
    - Tramite un ciclo for scorro nell'array team, con il ciclo for in vado a scorrere in ciascun oggetto dell'array e ne stampo il contenuto in console

MILESTONE 2:
stampare le stesse informazioni su DOM sottoforma di stringhe
    - Seleziono le informazioni da stampare come nel punto 1, per stamparle nella DOM mi serve aggiungere il markup nel ciclo for dell'array per creare degli elementi in pagina che racchiudano le informazioni 

BONUS 1:
trasformare la stringa foto in una immagine effettiva
    - Eseguo il procedimento come il punto 2 solo che nel markup andrò a creare il tag dell'immagine con il percorso ma il nome dell'immagine sarà preso dalla proprietà dell'oggetto dell'array

BONUS 2:
organizzare i singoli membri in card/schede
    - in HTML aggiungo i tag per le classi .container e .row, e nel markup inserito dinamicamente aggiungo i tag per le classi .col e .card, usando bootstrap dovrebbe ordinarmi il tutto, poi modifico il css per ottimizzare il layout 

## TOOLS
- for loop
- for in loop
- let/const
- querySelector / getElementById
- insertAdjacentHTML
