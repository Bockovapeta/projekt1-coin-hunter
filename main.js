// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program


let panacekX = Math.floor((Math.random() * 1500) + 1);

let panacekY = Math.floor((Math.random() * 600) + 1);
let minceX = Math.floor((Math.random() * 1500) + 1);
let minceY = Math.floor((Math.random() * 600) + 1);

let score = document.querySelector("#score");
let skore = 0;
skore = skore + 1;


function pozicePanacek() {


	let pozicePanacek = document.querySelector('#panacek');
	pozicePanacek.style.left = (panacekX + 'px');
	pozicePanacek.style.top = (panacekY + 'px');
}

function poziceMince() {

	let poziceMince = document.querySelector('#mince');
	poziceMince.style.left = minceX + 'px';
	poziceMince.style.top = minceY + 'px';
}

poziceMince();
pozicePanacek();
let panacekSirka = 30;
let panacekVyska = 35;
let minceSirka = 10;
let minceVyska = 10;

function stiskKlavesy(udalost) {
	console.log(udalost.key);
	let panacek = document.querySelector('#panacek');


	if (!(panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {

		document.querySelector("#hudba").pause();
		document.querySelector('#zvukmince').play();
		document.querySelector("#hudba").play();
		minceX = Math.floor((Math.random() * 1500) + 1);
		minceY = Math.floor((Math.random() * 600) + 1);
		document.querySelector('#mince').style.left = minceX + 'px';
		document.querySelector('#mince').style.top = minceY + 'px';

		score.textContent = skore++;
		if (skore % 5 === 1) {
			document.querySelector("#hudba").pause();
			document.querySelector("#zvukfanfara").play();
			document.querySelector("#hudba").play();
		}


	}


	else {
		if (udalost.key === 'ArrowRight') {
			panacek.src = 'obrazky/panacek-vpravo.png';
			panacekX = panacekX + 4;
			panacek.style.left = (panacekX++ + 'px');
		}

		else if (udalost.key === 'ArrowLeft') {
			panacek.src = 'obrazky/panacek-vlevo.png';
			panacekX = panacekX - 4;
			panacek.style.left = (panacekX-- + 'px');
		}

		else if (udalost.key === 'ArrowUp') {
			panacek.src = 'obrazky/panacek-nahoru.png';
			panacekY = panacekY - 4;
			panacek.style.top = (panacekY-- + 'px');
		}

		else {
			panacek.src = 'obrazky/panacek.png';
			panacekY = panacekY + 4;
			panacek.style.top = (panacekY++ + 'px');
		}
	}

}


