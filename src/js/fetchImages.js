const axios = require("axios").default;
const baseUrl = "https://pixabay.com/api/";
const KEY = "30878986-dbe096aab184f812986a58540";

export async function fetchImages(searchQuery, page) {
    const response = await axios.get(
        `${baseUrl}?key=${KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
    );
    console.log(response.data);
    return response.data;
}