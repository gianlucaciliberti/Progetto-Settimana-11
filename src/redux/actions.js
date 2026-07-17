export const SET_ROCK = "SET_ROCK";
export const SET_POP = "SET_POP";
export const SET_HIPHOP = "SET_HIPHOP";
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";
export const SET_LOADING = "SET_LOADING";
export const SET_CURRENT_TRACK = "SET_CURRENT_TRACK";



export const setRock = (albums) => {
    return {
        type: SET_ROCK,
        payload: albums
    }
}

export const setPop = (albums) => {
    return {
        type: SET_POP,
        payload: albums
    }
}

export const setHipHop = (albums) => {
    return {
        type: SET_HIPHOP,
        payload: albums
    }
}

const API_URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

const headers = {
    'X-RapidAPI-Host':
    'deezerdevs-deezer.p.rapidapi.com',
    'X-RapidAPI-Key':
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTQ3YmM4OGNjNzJlOTAwMTU0MzJhOWUiLCJpYXQiOjE3ODQyODU3MDMsImV4cCI6MTc4NTQ5NTMwM30.dnE0DvWDzVoH_nKlr9myY-lhQrkP4RY-SX7DhPfBkqw'
};

const fetchArtist = async (artistName) => {
    const response = await fetch(
        API_URL + artistName,
        {
            headers
        }
    );
    const data = await response.json();
    return data.data;
}

export const searchMusic = (artistName) => {
    return async(dispatch) => {
        dispatch(setLoading(true));

        const results = await fetchArtist(artistName);
        dispatch(setSearchResults(results.slice(0,20)));

        dispatch(setLoading(false));
    }
}

export const getRock = () => {
    return async(dispatch)=>{
        const albums = await fetchArtist("Queen");
        dispatch(
            setRock(
                albums.slice(0,4)
            )
        );
    }
}

export const getPop = () => {
    return async(dispatch)=>{
        const albums = await fetchArtist("Rihanna");
        dispatch(
            setPop(
                albums.slice(0,4)
            )
        );
    }
}

export const getHipHop = () => {
    return async(dispatch)=>{
        const albums = await fetchArtist("Eminem");

        dispatch(
            setHipHop(
                albums.slice(0,4)
            )
        );
    }
}

export const setSearchResults = (results)=>{
    return {
        type: SET_SEARCH_RESULTS,
        payload: results
    }
}

export const setLoading = (value)=>{
    return {
        type: SET_LOADING,
        payload:value
    }
}

export const setCurrentTrack = (track) => {
    return {
        type: SET_CURRENT_TRACK,
        payload:track
    }
}