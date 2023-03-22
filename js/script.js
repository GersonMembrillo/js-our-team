/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
 */

const team = [
	{
		nome: 'Wayne',
		cognome: 'Barnett',
		ruolo: 'Founder & CEO',
		img: 'wayne-barnett-founder-ceo.jpg',
	},
	{
		nome: 'Angela',
		cognome: 'Caroll',
		ruolo: 'Chief Editor',
		img: 'angela-caroll-chief-editor.jpg',
	},
	{
		nome: 'Walter',
		cognome: 'Gordon',
		ruolo: 'Office Manager',
		img: 'walter-gordon-office-manager.jpg',
	},
	{
		nome: 'Angela',
		cognome: 'Lopez',
		ruolo: 'Social Media Manager',
		img: 'angela-lopez-social-media-manager.jpg',
	},
	{
		nome: 'Scott',
		cognome: 'Estrada',
		ruolo: 'Developer',
		img: 'scott-estrada-developer.jpg',
	},
	{
		nome: 'Barbara',
		cognome: 'Ramos',
		ruolo: 'Graphic Designer',
		img: 'barbara-ramos-graphic-designer.jpg',
	},
];

const row = document.querySelector('.row');
let rowHTML = '';
for (let i = 0; i < team.length; i++) {
	const member = team[i];
	const tpl = `<div class="rol pb-4">
  <div class="card text-center">
					<img class="card-img-top" src="./img/${member.img}" alt="${member.nome} ${member.cognome}" />
					<div class="card-body">
						<div class="fst-italic fs-5"><span>${member.nome} ${member.cognome}</span></div>
						<div class="fw-semibold"><span>${member.ruolo}</span></div>
					</div>
          </div>
				</div>`;
	rowHTML += tpl;
}

console.log(rowHTML);
row.innerHTML = rowHTML;
