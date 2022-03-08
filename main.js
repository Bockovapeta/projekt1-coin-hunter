// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program
/*
function hraj() {
	let hudba = document.querySelector('#hudba');
	hudba.play();
}

*/

let panacekX = Math.floor((Math.random() * 1500) + 1);
let panacekY = Math.floor((Math.random() * 600) + 1);
let minceX = Math.floor((Math.random() * 1500) + 1);
let minceY = Math.floor((Math.random() * 600) + 1);
let panacek = document.querySelector('#panacek');
let mince = document.querySelector('#mince');
let hudba = document.querySelector('#hudba');
let score = document.querySelector("#score");
let skore = 0;
skore = skore + 1;

let panacekSirka = panacek.naturalWidth;
let panacekVyska = panacek.naturalHeight;
let minceSirka = mince.naturalWidth;
let minceVyska = mince.naturalHeight;


function pozicePanacek() {
	panacek.style.left = (panacekX + 'px');
	panacek.style.top = (panacekY + 'px');
}

function poziceMince() {
	mince.style.left = minceX + 'px';
	mince.style.top = minceY + 'px';
}

poziceMince();
pozicePanacek();



function stiskKlavesy(udalost) {
	console.log(udalost.key);
	hudba.play();


	if (!(panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {

		hudba.pause();
		document.querySelector('#zvukmince').play();
		hudba.play();
		minceX = Math.floor((Math.random() * 1500) + 1);
		minceY = Math.floor((Math.random() * 600) + 1);
		poziceMince();

		score.textContent = skore++;

		if (score.textContent == 5) {
			hudba.pause();
			document.querySelector("#zvukfanfara").play();
			hudba.play();
			alert("Gratuluji. Vyhrál jsi, ale můžeš hrát dál :-) ");
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

	if (panacekX <= 0) {
		panacekX = 0;
	}

	if (panacekY <= 0) {
		panacekY = 0;
	}

	if (panacekX >= (window.innerWidth) - panacekSirka) {
		panacekX = window.innerWidth - panacekSirka;
	}

	if (panacekY >= (window.innerHeight) - panacekVyska) {
		panacekY = window.innerHeight - panacekVyska;
	}

}



