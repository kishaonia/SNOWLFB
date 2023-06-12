import { getCurrentUserSpotsThunk } from "../../../store/spots";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DeleteOneSpot from "../DeleteOneSpot";
import OpenModalMenuItem from "../../Navigation/OpenModalMenuItem";
import "../SpotsHomePage/SpotsHomePage.css"

import "./CurrentUserSpots.css";

const CurrentUserSpots = () => {
  const dispatch = useDispatch();
  const allSpotsValues = useSelector((state) => Object?.values(state?.spots));
  const sessionUser = useSelector((state) => state?.session?.user); // Add this line to define sessionUser

  useEffect(() => {
    dispatch(getCurrentUserSpotsThunk());
  }, [dispatch, JSON?.stringify(allSpotsValues)]);

  if (!allSpotsValues) {
    return null;
  }
  return (
    <>
      <div className="all-spots-homepage">
        <div className="createspot-manage">Manage Your Spot</div>

        {sessionUser && (
          <NavLink className="create-spot-link-bottom" exact to="/spots/new">
            Create a Spot
          </NavLink>
        )}
    <div className="spotValues">
      {allSpotsValues?.map((spotValues) => {
        return (
          <>
          <nav key={spotValues?.id} className="navContainer">
            <NavLink
              className="navContainer"
              to={`/spots/${spotValues?.id}`}
            >
              
              <div className="navImageHome">
                <img src={spotValues?.previewImage} alt="Preview-Image" />
                
              </div>
              <div className="navSpotDetails">
              <div className="city-rating">
                <span>
                  {spotValues?.city}, {spotValues?.state}
                </span>
                {/* <div>$ {spotValues?.price?.toFixed(2)}/ night</div> */}
                <span>
                  &#9733;{" "}
                  {parseInt(spotValues.avgRating)
                    ? Number(spotValues?.avgRating).toFixed(1)
                    : "New"}
                </span>
                </div>
                </div>
              <div>$ {spotValues?.price?.toFixed(2)}/ night</div>
           </NavLink>
            <div className="update-delete-button">
              <div>
                <button className="update-spot-button">
                  <NavLink to={`/spots/${spotValues?.id}/edit`}>
                    Update Spot
                  </NavLink>
                </button>
                <button className="delete-spot-button">
                  <OpenModalMenuItem
                    itemText="Delete Spot"
                    modalComponent={<DeleteOneSpot spotId={spotValues?.id} />}
                  />
                </button>
              </div>
            </div>
          </nav>
          </>
        );
        
      }
       )}
       </div>
       </div>
    </>
  );
};

export default CurrentUserSpots;
