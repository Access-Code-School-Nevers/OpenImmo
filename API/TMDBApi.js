
const API_TOKEN = "bf20101d6e3f34d2e0888d16c3147a96";

export function getFilmsFromApiWithSearchedText (text, page) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))

}
export function getImageFromApi (name) {
  return 'https://image.tmbd.org/t/p/w300' + name
}
