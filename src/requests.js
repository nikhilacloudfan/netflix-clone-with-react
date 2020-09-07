const API_KEY = "e7df5bad3bcfc6b3af0023c3ec76f76a";

const requests = [
    {
        fetchUrl: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
        title: "NETFLIX ORIGINALS",
        isLargeRow: true
    },
    {
        fetchUrl: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
        title: "Trending Now",
        isLargeRow: false
    },
    {
        fetchUrl: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
        title: "Top Rated",
        isLargeRow: false
    }, 
    {
        fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
        title: "Action Movies",
        isLargeRow: false
    }, 
    {
        fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
        title: "Comedy Movies",
        isLargeRow: false
    }, 
    {
        fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
        title: "Horror Movies",
        isLargeRow: false
    }, 
    {
        fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
        title: "Romantic Movies",
        isLargeRow: false
    }, 
    {
        fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
        title: "Documentires",
        isLargeRow: false
    }
];

export default requests;