// load pets 
const loadPets = async() => {
    const url = "https://openapi.programming-hero.com/api/peddy/pets"
    const response = await fetch(url)
    const data = await response.json()
    displayPets(data.pets)
}

// display pets
const displayPets = (pets) => {
    const petContainer = document.getElementById("pets-card")
    pets.forEach(element => {
        const card = document.createElement('div')
        card.classList = "card p-5"
        card.innerHTML = `
            <figure class="h-[200px] relative rounded-lg">
                <img class="h-full w-full object-cover" src=${element.image} />
                
            </figure>
            
        `
        petContainer.append(card)
    });
}

loadPets()