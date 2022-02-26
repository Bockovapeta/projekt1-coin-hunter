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


function stiskKlavesy(udalost) {
	console.log(udalost.key);
	let panacek = document.querySelector('#panacek');

	if (udalost.key === 'ArrowRight') {
		panacek.src = 'obrazky/panacek-vpravo.png';
		panacekX = panacekX + 3;
		panacek.style.left = (panacekX++ + 'px');


	}

	else if (udalost.key === 'ArrowLeft') {
		panacek.src = 'obrazky/panacek-vlevo.png';
		panacekX = panacekX - 3;
		panacek.style.left = (panacekX-- + 'px');
	}

	else if (udalost.key === 'ArrowUp') {
		panacek.src = 'obrazky/panacek-nahoru.png';
		panacekY = panacekY - 3;
		panacek.style.top = (panacekY-- + 'px');
	}

	else {
		panacek.src = 'obrazky/panacek.png';
		panacekY = panacekY + 3;
		panacek.style.top = (panacekY++ + 'px');
	}

}




