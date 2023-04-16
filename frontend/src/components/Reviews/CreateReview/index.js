import {createReviewThunk} from "../../../store/reviews";
import { useModal } from "../../../context/Modal";
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { getSpotsReviewsThunk } from "../../../store/reviews";
import { useEffect } from "react";

export default function CreateReview({spotId}) {
  const {closeModal} = useModal()
  const dispatch = useDispatch();
  const [stars, setStars] = useState("");
  const [review, setReview] = useState("");
  const [error, setError] = useState({})

  const handleSubmit = async(e) => {
      e.preventDefault();
      const error = {}
      if (!review || review?.length < 10) {
          error.reviewWords = "A review consisting of at least 10 characters is required."
      }

      if (stars > 5 || stars > 5) {
       error.reviewStars = "Please choose a rating from 1 to 5"
      }
      setError(error)

      if (Object?.keys(error).length > 0) {
          console.log(error)
      }

      const reviewCreated = {
          review: review,
          stars: stars
      }

      dispatch(createReviewThunk(reviewCreated, spotId))
      dispatch(getSpotsReviewsThunk(spotId)) 
      closeModal();

  }

  const starIcons = [];
  for (let i = 1; i <= 5; i++) {
    const isFilled = i <= stars;
    const starIcon = isFilled ? "\u2605" : "\u2606";
    starIcons.push(
      <span key={i} className={isFilled ? "filled" : ""} onClick={() => setStars(i)}>
        {starIcon}
      </span>
    );
  }

  return (
      <div className="create-review-form-div">
          <h1 className="title-review"> Leave a Review</h1>
          <ul className="errors-create">
              {Object.values(error).map((errorMsg, idx) =>(
                  <li key={idx}>{errorMsg}</li>
              ))}
              <form 
              onSubmit={handleSubmit}
              className="form-create-reviews"
              >
                  <div className="entries-review">
                      <input 
                      id="review-create"
                      type="text-create"
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                      required
                      />
                      <label htmlFor="address">
                         
                      </label>
                  </div>
                  <div className="entries-review star-rating">
                      {starIcons}
                  </div>
                  <button type="submit" onSubmit={handleSubmit} className="submit-button" id="leave-review-button">Leave Review</button>
              </form>
          </ul>
      </div>
  )
}
