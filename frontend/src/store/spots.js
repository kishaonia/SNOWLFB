// import { csrfFetch } from "./csrf";

const GET_ALLSPOTS = "spots/GET_AllSPOTS"
const GET_ONESPOT = "spots/GET_ONESPOT"

export const getAllSpotsAction = (spots) => ({
    type: GET_ALLSPOTS,
    spots
});

export const getOneSpot = (spot) => ({
    type: GET_ONESPOT,
    spot
});

export const getAllSpotsThunk = () => async dispatch => {
    const res = await fetch('/api/spots')
    console.log('Res', res)
    if (res.ok) {
        const spots = await res.json()
        console.log(spots)
        dispatch(getAllSpotsAction(spots))
    }
};

export const getOneSpotThunk = (spotId) => async dispatch => {
    const res = await fetch(`/api/spots/${spotId}`);
    if (res.ok) {
        const details = await res.json();
        dispatch(getOneSpot(details))
    }
}

const initialState = {

}

const spotsReducer = (state = initialState, action) => {
    let newSpotsState;
    switch(action.type) {
        case GET_ALLSPOTS:
            newSpotsState = {};
            action.spots.Spots.forEach(spot => {
                newSpotsState[spot.id] = spot
            })
            return newSpotsState;
        case GET_ONESPOT:
            newSpotsState = {...state};
            newSpotsState[action.spot.id] = action.spot;
            return newSpotsState
        default:
            return state
    }
}

export default spotsReducer