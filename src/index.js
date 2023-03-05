console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const imageContainer = document.querySelector("#dog-image-container");
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const breedContainer = document.querySelector('#dog-breeds');
const breedClass = document.querySelectorAll(".dog-breed");
const breedDropdown = document.querySelector("#breed-dropdown");

function animalPics() {
    fetch(imgUrl)
        .then(function (response){
            return response.json();
        })
        .then((data) => {
            for(const animal of data.message){
                const imgNode = document.createElement('img');
                imageContainer.appendChild(imgNode);
                imgNode.setAttribute("src", animal);

            }
        })
    }

function addBreeds() {
    fetch(breedUrl)
        .then(function (response){
            return response.json();
        })
        .then((data) => {
            for(const breed in data.message){
                const breedNode = document.createElement('li');
                breedNode.hidden = true;
                breedContainer.appendChild(breedNode);
                breedNode.innerText = breed;
                breedNode.setAttribute('id', breed)
                breedNode.setAttribute('class', 'breed')
                breedNode.addEventListener('click', () => 
                    breedNode.style.color = 'blue'
                )
            }
        })
}

animalPics()
addBreeds()

breedDropdown.addEventListener("change", (event) => {
    const firstLetter = event.target.value
    const breedClass = document.getElementsByClassName('breed')
    for(const breed in breedClass){
        const breedName = breedClass[breed].innerText;
        if(breedName.charAt(0) == firstLetter){
            console.log('True')
            breedClass[breed].hidden = false;
        }
        else{
            breedClass[breed].hidden = true;
        }
    }
    }
)