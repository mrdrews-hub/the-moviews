export const generateGenreFromID = (id, genres) => {
    if (typeof id !== 'object' && typeof genres !== 'object') throw new TypeError('parameter must be an array')
    return id.filter(genre => genres.some( el => el === genre.id))
}