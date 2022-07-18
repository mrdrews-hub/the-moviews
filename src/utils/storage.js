const STORAGE_NAME = 'moviews-app'

export const favMovies = getAllData() || []

export function getItem(id) {
  const favMovies = getAllData() || []
  if(id && favMovies.length > 0) {
    const item = favMovies.filter(movie => movie.id === id)
    if(item.length > 0) {
      return item
    } else {
      return false
    }
  } else {
    return false
  }
}

export function getAllData() {
  return JSON.parse(localStorage.getItem(STORAGE_NAME))
}

export function saveData(data) {
  if(typeof data !== 'object') throw new TypeError('data must be an array')
  if(data !== null && data !== undefined) {
    const favMovies = getAllData() || []
    favMovies.push(data) 
    const serializedData = JSON.stringify(favMovies)
    localStorage.setItem(STORAGE_NAME, serializedData)
  }
}

export function removeData(id) {
  if(id){
    const deleteMovie = favMovies.filter(movie => movie.id !== id)
    const serializedData = JSON.stringify(deleteMovie)
    localStorage.setItem(STORAGE_NAME,serializedData)
    return true
  }
}

const remove = new Promise((resolve, reject) => {

})