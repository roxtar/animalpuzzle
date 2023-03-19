const animals = [
  {
    photo: "https://placehold.it/300x300",
    name: "Lion"
  },
  {
    photo: "https://placehold.it/300x300",
    name: "Elephant"
  },
  {
    photo: "https://placehold.it/300x300",
    name: "Giraffe"
  }
];

const animalContainer = document.getElementById("animal-container");
const animalPhoto = document.getElementById("animal-photo");
const animalName = document.getElementById("animal-name");
const rightArrow = document.getElementById("right-arrow");

let currentIndex = 0;

function updateAnimal() {
  const currentAnimal = animals[currentIndex];
  animalPhoto.src = currentAnimal.photo;
  animalName.textContent = currentAnimal.name;
}

updateAnimal();

rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % animals.length;
  updateAnimal();
});
