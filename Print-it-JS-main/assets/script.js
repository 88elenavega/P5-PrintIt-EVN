
//ça c'est un tableu ou array 
const slides = [
	{//0
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{//1
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{//2
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{//3
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


let currentSlide = 0;

 
// event listeners aux flèches 
const moveLeft = document.querySelector (".arrow_left")
console.log(moveLeft)

const moveRight = document.querySelector (".arrow_right")
console.log(moveRight)

// Je recupere le paragraphe qui s'affiche sur le diaporama
const tagLine = document.getElementById("tagLine");
console.log(tagLine)

// Je recupere l'image du diaporama
let photo = document.querySelector(".banner-img");
console.log(photo)

// Recuperation de tous les points
const points = document.querySelectorAll(".dot");
console.log(points) 



//-------------------------------------


moveLeft.addEventListener ("click", function () {
	console.log("verifyLeft")
	
	//changement de point rempli en blanc - enlever la couleur
	points[currentSlide].classList.remove("dot_selected");
	//carrousel à gauche 
	currentSlide--

	//condition pour pouvoir faire le boucle sur les slides 
	if (currentSlide < 0) {
		currentSlide = slides.length - 1;
	}

	//changement de point rempli en blanc - ajouter la couler 
	points[currentSlide].classList.add("dot_selected");
	//variable pour changer les slides et son contenu 
	changeSlide()	
	
})




moveRight.addEventListener ("click", function () {
	console.log("verifyRight")

	//changement de point rempli en blanc 
	points[currentSlide].classList.remove("dot_selected");
	//carrousel à droite 
	currentSlide++

	//condition pour pouvoir faire le boucle sur les slides 
	if (currentSlide > slides.length - 1) {
		currentSlide = 0
	}

	//changement de point rempli en blanc - ajouter la couler 
	points[currentSlide].classList.add("dot_selected");
	//variable pour changer les slides et son contenu 
	changeSlide()

})



const changeSlide = () => {
	let nextSlide = slides[currentSlide]
	let nextSlideImage = nextSlide.image
	let nextSlideTagLine = nextSlide.tagLine
	photo.src = nextSlideImage
	tagLine.innerHTML = nextSlideTagLine
}

