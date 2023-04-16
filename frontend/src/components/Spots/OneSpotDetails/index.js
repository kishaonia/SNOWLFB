import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getOneSpotThunk } from '../../../store/spots';
import OpenModalMenuItem from '../../Navigation/OpenModalMenuItem';
import { useParams } from 'react-router-dom';
import { getSpotsReviewsThunk } from '../../../store/reviews';
import CreateReview from '../../Reviews/CreateReview';
import './OneSpotDetails.css';

const OneSpotDetails = () => {
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const { [spotId]: spotDetailsValues } = useSelector(state => state?.spots);
  const allReviews = useSelector(state => state?.reviews)
  const reviews = Object.values(allReviews)
  console.log('reviews', reviews)
  const user = useSelector(state => state?.session.user)
  const starIcon = "\u2605"
  console.log('user', user)
 
  const reviewOwner = reviews?.find(review => review?.User?.id === user.id)
  
  useEffect(() => {
    dispatch(getOneSpotThunk(spotId));
    dispatch(getSpotsReviewsThunk(spotId))
  }, [dispatch, JSON?.stringify(spotId)]);

  if (!spotDetailsValues) {
    return null;
  }
  
  return (
    <div className='page-wrapper-one-spot'>
      <h1 className='spots-h1'>{spotDetailsValues.name}</h1>
      <div className="spot-details-address">{`${spotDetailsValues.city}, ${spotDetailsValues.state}, ${spotDetailsValues.country}`}</div>
      <div className="spot-detail-pics">
        {spotDetailsValues?.SpotImages?.map(spotImage => (
          spotImage && <img key={spotImage.id} className="spot-detail-image" src={spotImage?.url} alt="spot-pic"/>
        ))}
      </div>
      <h3>Hosted by {`${spotDetailsValues.Owner?.firstName} ${spotDetailsValues.Owner?.lastName}`}</h3>

      <div className='reviews-given'

        value={spotDetailsValues?.description}
        readOnly
        
      >{spotDetailsValues?.description}</div>
      
      <div className = "spot-review-details">
      <div className = "post-review">
      </div>
      <div className='create-review-form-div'>
        {(user.id !== spotDetailsValues?.ownerId) && !reviewOwner && user ? 
          <button className="create-review-button">
          <OpenModalMenuItem
            itemText="Post Your Review"
            modalComponent={<CreateReview spotId={spotDetailsValues?.id}/>}/>
          </button>
            : <></>}
          </div>
      
          </div>
      
    </div>
  );
};

export default OneSpotDetails;
