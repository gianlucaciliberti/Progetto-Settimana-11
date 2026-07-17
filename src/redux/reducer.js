import {
    SET_ROCK,
    SET_POP,
    SET_HIPHOP,
    SET_SEARCH_RESULTS,
    SET_LOADING,
    SET_CURRENT_TRACK
} from "./actions";

const initialState = {

    home: {
        rock: [],
        pop: [],
        hipHop: []
    },

    search: {
        query: "",
        results: [],
        loading: false,
        error: null
    },

    player: {
        currentTrack: null
    }
};

const mainReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case SET_ROCK:

            return {
                ...state, home: {
                    ...state.home,
                    rock: action.payload
                }
            }

        case SET_POP:
            return {
                ...state, home: {
                    ...state.home,
                    pop: action.payload
                }
            }
        case SET_HIPHOP:
            return {
                ...state, home: {
                    ...state.home,
                    hipHop: action.payload
                }
            }

        case SET_SEARCH_RESULTS:
            return {
                ...state, search: {
                    ...state.search, results: action.payload
                }
            }

        case SET_LOADING:
            return {
                ...state, search: {
                    ...state.search, loading: action.payload
                }
            }
        
        case SET_CURRENT_TRACK:
            return {...state, player: {
                currentTrack:action.payload
            }}
        default:
            return state;
    }
}
export default mainReducer;