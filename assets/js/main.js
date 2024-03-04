const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

//- Tramite un ciclo for scorro nell'array team, con il ciclo for in vado a scorrere in ciascun oggetto dell'array e ne stampo il contenuto in console

const rowEl = document.querySelector('.row');
for (let i = 0; i < team.length; i++) {
    const member = team[i];
    //- Seleziono le informazioni da stampare come nel punto 1, per stamparle nella DOM mi serve aggiungere il markup nel ciclo for dell'array per creare degli elementi in pagina che racchiudano le informazioni 
    
    //- Eseguo il procedimento come il punto 2 solo che nel markup andrò a creare il tag dell'immagine con il percorso ma il nome dell'immagine sarà preso dalla proprietà dell'oggetto dell'array
    let markup = `<div class="col-4"><div class="card text-center">
    <img class="mw-100 rounded-top-1" src="./assets/img/${member.image}" alt="">
    <h5 class="py-2">${member.name}</h5><h6>${member.role}</h6></div></div>`;
    rowEl.insertAdjacentHTML('beforeend', markup);
}


