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

	if (udalost.key === 'ArrowRight') {
		document.querySelector('#panacek').style.left = (panacekX + 5 + 'px');
		return panacekX;
	}

	else if (udalost.key === 'ArrowLeft') {
		document.querySelector('#panacek').style.left = (panacekX - 5 + 'px');
	}

	else if (udalost.key === 'ArrowUp') {
		document.querySelector('#panacek').style.top = (panacekY - 5 + 'px');
	}

	else {
		document.querySelector('#panacek').style.top = (panacekY + 5 + 'px');
	}

}



