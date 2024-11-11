// create load categories
const loadCategories = async() => {
    const url = "https://openapi.programming-hero.com/api/peddy/categories"
    const res = await fetch(url)
    const data = await res.json()
    displayCategories(data.categories)
}
// create display categories
const displayCategories = (categories) => {
    console.log(categories);
    const categoryContainer = document.getElementById("category")
    categories.forEach(element => {
        // create button
        const btnContainer = document.createElement("div")
        btnContainer.innerHTML = `
        <button class="btn flex">${element.category_icon}${element.category}</button>
        `

        // add button to category container
        categoryContainer.append(btnContainer)
    });
    
}

loadCategories()