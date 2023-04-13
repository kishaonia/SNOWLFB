import {useSelector, useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';
import { getOneSpotThunk } from '../../../store/spots';
import {useParams} from 'react-router-dom';
import './OneSpotDetails.css'

const OneSpotDetails = () => {
const {spotId} = useParams();
const dispatch = useDispatch();
const spotDetails = useSelector(state => state?.spots)
console.log('spotDetails', spotDetails)
const spotDetailsValues = spotDetails[spotId]
console.log('spotDetailsValues', spotDetailsValues)

useEffect(() => {
    dispatch(getOneSpotThunk(spotId))
}, [dispatch, spotId])

if (!spotDetailsValues) {
    return null
}
return (
<> 
<div className='page-wrapper-one-spot'>
    <h1 className='spots-h1'>{spotDetailsValues?.name}</h1>
    <div className="spot-details-address">{spotDetailsValues?.city},{spotDetailsValues?.state},{spotDetailsValues.country}</div>
    {spotDetailsValues?.SpotImages?.map(spotImage => {
        return (
            spotImage && <img className="spot-detail-image" src={spotImage?.url} alt="spot-pic"/>
        )
    })}
    <h3>Hosted by {spotDetailsValues?.Owner?.firstName} {spotDetailsValues?.Owner?.lastName}</h3>
    </div>
</>
)
}

export default OneSpotDetails