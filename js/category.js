// create load categories
const loadCategories = async() => {
    const url = "https://openapi.programming-hero.com/api/peddy/categories"
    const res = await fetch(url)
    const data = await res.json()
    displayCategories(data.categories)
}
// pets display categories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("category")
    categories.forEach(element => {
        // create button
        const btnContainer = document.createElement("div")
        btnContainer.classList = "flex gap-2 btn"
        btnContainer.innerHTML = `
        <img class="w-8" src="${element.category_icon}"/>
        <button>${element.category}</button>
        `
        // add button to category container
        categoryContainer.append(btnContainer)
    });
    
}

// show selected pets

loadCategories()