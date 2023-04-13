import { useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import { useHistory} from 'react-router-dom';
import { getAllSpotsThunk } from '../../../store/spots';
import './SpotsHomePage.css'

const SpotsHomePage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const allSpots = useSelector(state => state?.spots)
    const allSpotsValues = Object?.values(allSpots)
    console.log('All Spots', allSpotsValues)

 useEffect(() => {
    dispatch(getAllSpotsThunk())
 }, [dispatch])

 if (!allSpotsValues) {
    return null
 }
    return (
        <div className='all-spots'>
        {allSpotsValues?.map(spotValues => {
            return (
                <NavLink key={spotValues?.id} className="navContainer" to={`/spots/${spotValues?.id}`}>
            <div className='navImage'>
            <img src={spotValues?.previewImage} alt="Preview-Image"/>
             </div>
             <div className='navSpotDetails'>
            <div>{spotValues?.city}, {spotValues?.state}</div>
            <div>$ {spotValues?.price?.toFixed(2)} per night</div>
            <div className="avgRating">{spotValues?.avgRating}</div>
             </div>
</NavLink>

            )
        })}

        </div>
    )
}

export default SpotsHomePage