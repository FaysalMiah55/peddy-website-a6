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
        card.classList = "card p-3"
        card.innerHTML = `
            <figure class="h-[200px] relative rounded-lg">
                <img class="h-full w-full object-cover" src=${element.image}/>                
            </figure>
            <div class="space-y-2">
                <h3 class="inter text-xl font-bold mt-6">${element.pet_name}</h3>
                <div class="flex items-center gap-2">
                    <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <desc>
                                Created with Pixso.
                        </desc>
                        <defs>
                            <clipPath id="clip2081_127">
                                <rect id="Frame" rx="0.000000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
                            </clipPath>
                        </defs>
                        <rect id="Frame" rx="0.000000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
                        <g clip-path="url(#clip2081_127)">
                            <path id="Vector" d="M8.33 3.33L8.33 8.33L3.33 8.33L3.33 3.33L8.33 3.33Z" stroke="#5A5A5A" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round"/>
                            <path id="Vector" d="M16.66 3.33L16.66 8.33L11.66 8.33L11.66 3.33L16.66 3.33Z" stroke="#5A5A5A" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round"/>
                            <path id="Vector" d="M8.33 11.66L8.33 16.66L3.33 16.66L3.33 11.66L8.33 11.66Z" stroke="#5A5A5A" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round"/>
                            <path id="Vector" d="M12.39 15.93C12.86 16.4 13.5 16.66 14.16 16.66C14.82 16.66 15.46 16.4 15.93 15.93C16.4 15.46 16.66 14.82 16.66 14.16C16.66 13.5 16.4 12.86 15.93 12.39C15.46 11.93 14.82 11.66 14.16 11.66C13.5 11.66 12.86 11.93 12.39 12.39C11.93 12.86 11.66 13.5 11.66 14.16C11.66 14.82 11.93 15.46 12.39 15.93Z" stroke="#5A5A5A" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round"/>
                        </g>
                    </svg>
                    <h5>Breed: ${element.breed}</h5>
                </div>
                <div class="flex items-center gap-2">
                    <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none"       xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs>
                            <clipPath id="clip2081_135">
                                <rect id="Frame" rx="0.000000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
                            </clipPath>
                        </defs>
                        <rect id="Frame" rx="0.000000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
                        <g clip-path="url(#clip2081_135)">
                            <path id="Vector" d="M5.62 2.5L5.62 4.37M14.37 2.5L14.37 4.37M2.5 6.25C2.5 5.75 2.69 5.27 3.04 4.92C3.4 4.57 3.87 4.37 4.37 4.37L15.62 4.37C16.12 4.37 16.59 4.57 16.95 4.92C17.3 5.27 17.5 5.75 17.5 6.25L17.5 15.62C17.5 16.12 17.3 16.59 16.95 16.95C16.59 17.3 16.12 17.5 15.62 17.5L4.37 17.5C3.87 17.5 3.4 17.3 3.04 16.95C2.69 16.59 2.5 16.12 2.5 15.62L2.5 6.25ZM2.5 15.62L2.5 9.37C2.5 8.87 2.69 8.4 3.04 8.04C3.4 7.69 3.87 7.5 4.37 7.5L15.62 7.5C16.12 7.5 16.59 7.69 16.95 8.04C17.3 8.4 17.5 8.87 17.5 9.37L17.5 15.62" stroke="#5A5A5A" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                        </g>
                    </svg>
                    <h5>Birth: ${element.date_of_birth}</h5>
                </div>
                <div class="flex items-center gap-2">
                    <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <desc>
                                Created with Pixso.
                        </desc>
                        <defs>
                            <clipPath id="clip2081_139">
                                <rect id="Frame" rx="0.000000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
                            </clipPath>
                        </defs>
                        <g opacity="0.700000">
                            <rect id="Frame" rx="0.000000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
                            <g clip-path="url(#clip2081_139)">
                                <path id="Vector" d="M10 11.66L10 17.5" stroke="#131313" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                                <path id="Vector" d="M7.5 15L12.5 15" stroke="#131313" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                                <path id="Vector" d="M12.35 5.97C12.98 6.6 13.33 7.44 13.33 8.33C13.33 9.21 12.98 10.06 12.35 10.69C11.73 11.31 10.88 11.66 10 11.66C9.11 11.66 8.26 11.31 7.64 10.69C7.01 10.06 6.66 9.21 6.66 8.33C6.66 7.44 7.01 6.6 7.64 5.97C8.26 5.35 9.11 5 10 5C10.88 5 11.73 5.35 12.35 5.97Z" stroke="#131313" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round"/>
                                <path id="Vector" d="M12.5 2.5C12.5 3.16 12.23 3.79 11.76 4.26C11.29 4.73 10.66 5 10 5C9.33 5 8.7 4.73 8.23 4.26C7.76 3.79 7.5 3.16 7.5 2.5" stroke="#131313" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                            </g>
                        </g>
                    </svg>
                    <h5>Gender: ${element.gender}</h5>
                </div>
                <div class="flex items-center gap-2">
                    <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <desc>
                                Created with Pixso.
                        </desc>
                        <defs>
                            <clipPath id="clip2081_147">
                                <rect id="Frame" rx="0.000000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
                            </clipPath>
                        </defs>
                        <rect id="Frame" rx="0.000000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
                        <g clip-path="url(#clip2081_147)">
                            <path id="Vector" d="M13.91 6.66C13.75 6.19 13.44 5.78 13.04 5.48C12.64 5.19 12.16 5.02 11.66 5L8.33 5C7.67 5 7.03 5.26 6.56 5.73C6.09 6.2 5.83 6.83 5.83 7.5C5.83 8.16 6.09 8.79 6.56 9.26C7.03 9.73 7.67 10 8.33 10L11.66 10C12.32 10 12.96 10.26 13.43 10.73C13.9 11.2 14.16 11.83 14.16 12.5C14.16 13.16 13.9 13.79 13.43 14.26C12.96 14.73 12.32 15 11.66 15L8.33 15C7.83 14.97 7.35 14.8 6.95 14.51C6.55 14.21 6.24 13.8 6.08 13.33" stroke="#5A5A5A" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                            <path id="Vector" d="M10 2.5L10 5M10 15L10 17.5" stroke="#5A5A5A" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                        </g>
                    </svg>
                    <h5>Price: ${element.price}</h5>
                </div>
                <div class="flex justify-between items-center mt-4">
                    <button class="btn text-[#13131399] opacity-60"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/facebook-like--v1.png" alt="facebook-like--v1"/></button>
                    <button class="btn text-[#0E7A81]">Adopt</button>
                    <button class="btn text-[#0E7A81]">Details</button>
                </div>
            </div>
        `
        petContainer.append(card)
    });
}

loadPets()