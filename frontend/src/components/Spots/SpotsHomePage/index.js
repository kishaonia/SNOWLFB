import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { getAllSpotsThunk } from "../../../store/spots";
import "./SpotsHomePage.css";

const SpotsHomePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const allSpots = useSelector((state) => state?.spots);
  const allSpotsValues = Object?.values(allSpots);
  const starIcon = "\u2605";
  console.log("All Spots", allSpotsValues);

  useEffect(() => {
    dispatch(getAllSpotsThunk());
  }, [dispatch]);

  if (!allSpotsValues) {
    return null;
  }
  return (
    <div className="all-spots">
      {allSpotsValues?.map((spotValues) => {
        console.log("spotValues", spotValues);
        return (
          <NavLink
            key={spotValues?.id}
            className="navContainer"
            to={`/spots/${spotValues?.id}`}
          >
            <div className="navImageHome">
                <div className="data-tool-tip"><span>{spotValues?.name}</span></div>
              <img src={spotValues?.previewImage} alt="Preview-Image" />
            </div>
            <div className="navSpotDetails">
              <div className="city-rating">
                <span>
                  {spotValues?.city}, {spotValues?.state}
                </span>
                <span>
                  {starIcon}{" "}
                  {parseInt(spotValues.avgRating)
                    ? Number(spotValues?.avgRating).toFixed(1)
                    : "New"}
                </span>
              </div>
              <div>$ {spotValues?.price?.toFixed(2)} per night</div>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default SpotsHomePage;
