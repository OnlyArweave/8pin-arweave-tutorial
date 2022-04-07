const url = (endpoint, search_text) =>
  `https://api.mapbox.com/geocoding/v5/${endpoint}/${search_text}.json?limit=1&access_token=${import.meta.env.VITE_MAPBOX}`


export const getCoordinates = (search_text) =>
  fetch(encodeURI(url('mapbox.places', search_text)))
    .then(res => res.json())
    .then(res => console.log(res))

export const getPlace = (lng, lat) =>
  fetch(encodeURI(url('mapbox.places', `${lng},${lat}`)))
    .then(res => res.json())
    .then(res => res.features[0].place_name)