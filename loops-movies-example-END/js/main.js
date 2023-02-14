// this is our javascript file.
let movieFilterForm = document.querySelector("#movie-filter-form")
// focus on the filter element
movieFilterForm.elements["filter-query"].focus()

// intercept the form.
movieFilterForm.addEventListener("submit", (event)=> {
    event.preventDefault()
    let filter = event.target.elements["filter-query"].value
    console.log(filter)
    filterItems(filter)
});

// select all movie list items the descendant css selector
// .top-movies-list li
let allMovieItems = document.querySelectorAll(".top-movies-list li")

// get the form value and call the function filterItems

/*

We're going to create a function named "filterItems"
that check each item contains our search query
- if it's not then we're going to add the "hidden-item" class
- if does include it we're going to remove the "hidden-item" class.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

*/
// filter items version 1
// const filterItems = (filterValue) => {
//     let lowerCaseFilterValue = filterValue.toLowerCase()
//     allMovieItems.forEach((movieItem)=> {
//         let lowerCaseMovieTitle = movieItem.innerText.toLowerCase()
//         // let's add the hidden-item class if it's not included
//         // and remove the hidden-item class if it is included
//         if (lowerCaseMovieTitle.includes(lowerCaseFilterValue)) {
//             movieItem.classList.remove("hidden-item")
//         } else {
//             movieItem.classList.add('hidden-item')
//         }
//     })
// }

// filter items version 2 map is not so different than foreach
const filterItems = (filterValue) => {
    let lowerCaseFilterValue = filterValue.toLowerCase()
    
    // I need to convert this nodelist to an array
    // if i'd like to use map on this.
    let movieItemsArray = Array.from(allMovieItems)
    
    // map really isn't that different. 
    movieItemsArray.map((movieItem) => {
        let lowerCaseMovieTitle = movieItem.innerText.toLowerCase()
        if (lowerCaseMovieTitle.includes(lowerCaseFilterValue)) {
            movieItem.classList.remove("hidden-item")
        } else {
            movieItem.classList.add('hidden-item')
        }
    })
}