let cl = console.log;

const allLinks = [... document.querySelectorAll('.tabHeading a')];
const cards = [... document.querySelectorAll('.card')];

// cl(gallery);

// cl(allLinks);

allLinks.forEach(ele => {
	ele.addEventListener('click', (eve) => {
		let ab = eve.target;
		let getId = ab.getAttribute('data-id')
		//hide all cards by removing active class
		cards.forEach(card => card.classList.remove('active'))
		cl(getId);
		document.getElementById(getId).classList.add('active')

		allLinks.forEach(a => a.classList.remove('active'))
		ab.classList.add('active');
	})
})


