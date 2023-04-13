import { getCurrentUserSpotsThunk } from "../../../store/spots";
import {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import './CurrentUserSpots.css'

const CurrentUserSpots = () => {
    const dispatch = useDispatch();
    const currentSpots = useSelector(state => Object?.values(state?.spots))

    useEffect(() => {
        dispatch(getCurrentUserSpotsThunk())
    }, [dispatch])

    if (!currentSpots) {
        return null
    }
    return (
        <h1>Hello World</h1>
    )
}

export default CurrentUserSpots