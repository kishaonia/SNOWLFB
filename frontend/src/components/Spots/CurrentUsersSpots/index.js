import { getCurrentUserSpotsThunk } from "../../../store/spots";
import {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import './CurrentUserSpots.css'

const CurrentUserSpots = () => {
    const dispatch = useDispatch();
    const allSpotsValues = useSelector(state => Object?.values(state?.spots))

    useEffect(() => {
        dispatch(getCurrentUserSpotsThunk())
    }, [dispatch])

    if (!allSpotsValues) {
        return null
    }
    return (
        <div className='edit-all-spots'>
            {allSpotsValues?.map(spotValues => {
                return (
                    <nav key={spotValues?.id} className='current-Spots'>
                    <NavLink  className="edit-navContainer" to={`/spots/${spotValues?.id}`}>
                        <div className='edit-navImage'>
                            <img src={spotValues?.previewImage} alt="Preview-Image" />
                        </div>
                        <div className='edit-navSpotDetails'>
                            <div>{spotValues?.city}, {spotValues?.state}</div>
                            <div>$ {spotValues?.price?.toFixed(2)} per night</div>
                            <div className="avgRating">{spotValues?.avgRating}</div>
                        </div>
                    </NavLink>
                    <div className="update-delete-button">
                    <NavLink to={`/spots/${spotValues.id}/edit`}>
                        <button>Update Spot</button>
                    </NavLink>
                    </div>
                    </nav>
                )
            })}

        </div>
    )
}

export default CurrentUserSpots