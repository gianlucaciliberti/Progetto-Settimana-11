const initialState = {
    home: {
        rock: [],
        pop: [],
        hipHop: [],
    },
    search: {
        query: "",
        results: [],
        loading: false,
        error: null,
    },
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default mainReducer;