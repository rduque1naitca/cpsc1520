/*
Steps 1-3 READ THE PDF!!!
*/

let videoGameForm = document.querySelector("#video-game-form")
let allGameList = document.querySelector(".all-games")
let allGameListItems = document.querySelectorAll(".all-games li")
let myGameList = document.querySelector(".my-favourite-games")
let myGames = []

// event listener for step 1
videoGameForm.addEventListener("submit", (event)=> {
    event.preventDefault()
    let platform = event.target.elements['platform-family'].value.toLowerCase()
    filterGames(platform)
})

// event listener for step 2
/* HTML for step 2 to add to the list
<li class="list-group-item">VIDEO GAME NAME HERE</li>
*/
allGameList.addEventListener("click", (event)=> {
  let game = event.target.innerText
  addToFavouriteGames(game)
})
 

// event listener for step 3
myGameList.addEventListener("click", (event)=> {
  let favGame = event.target.innerText
  removeFromFavouriteGames(favGame)
})

const filterGames = (games) => {
  let lowerCaseFilterValue = games.toLowerCase()
  allGameListItems.forEach((myGameList) => {
    let lowerCaseGameTitle = myGameList.innerText.toLowerCase()
    if (lowerCaseGameTitle.includes(lowerCaseFilterValue)) {
      myGameList.classList.remove("hidden-item")
    } else {
      myGameList.classList.add('hidden-item')
    }
  })
}

const addToFavouriteGames = (game) => {
  //this code is extra, just checks if the name is already on the list
  let index = myGames.indexOf(game)
  if (index === -1) {
    myGames.push(game)
  } else {
    console.log('Game is already on the list')
  }
  renderFavouriteList()
}

const renderFavouriteList = () => {
  myGameList.innerHTML = ""
  myGames.forEach((game) => {
    myGameList.innerHTML += `<li class="list-group-item">${game}</li>`
  })
}

const removeFromFavouriteGames = (game) => {
  let index = myGames.indexOf(game)
  myGames.splice(index, 1)
  renderFavouriteList()
}