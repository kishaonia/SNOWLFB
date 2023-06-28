import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { getAllSpotsThunk } from "../../../store/spots";
import "./SpotsHomePage.css";
import { useState } from "react";
const SpotsHomePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const allSpots = useSelector((state) => state?.spots);
  const allSpotsValues = Object?.values(allSpots);
  const starIcon = "\u2605";
  const [showPrice, setShowPrice] = useState(false);

  const handleClick = () => {
    setShowPrice(!showPrice);
  };
  useEffect(() => {
    dispatch(getAllSpotsThunk());
  }, [dispatch]);

  if (!allSpotsValues) {
    return null;
  }
  return (
    <div className="all-spots-homepage">
      {/* <div className="homebar-buttons-header">
 <a className="homebar-buttons-body" href="https://www.airbnb.com/?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&location_search=MIN_MAP_BOUNDS&monthly_start_date=2023-07-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&category_tag=Tag%3A677&search_type=category_change">Amazing pools<img className="homebar-buttons-body" src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" width="24" color="gray" height="24"/></a>
 <a className="homebar-buttons-body" href="https://www.airbnb.com/?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&location_search=MIN_MAP_BOUNDS&monthly_start_date=2023-07-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&search_type=category_change&category_tag=Tag%3A8678">Rooms<img className="homebar-buttons-body" src="https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg" width="24" height="24" /></a>
 <a className="homebar-buttons-body" href="https://www.airbnb.com/?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&location_search=MIN_MAP_BOUNDS&monthly_start_date=2023-07-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&search_type=category_change&category_tag=Tag%3A8522">Beachfront<img className="homebar-buttons-body" src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg" width="24" height="24" /> </a>
 <a className="homebar-buttons-body" href="https://www.airbnb.com/?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&location_search=MIN_MAP_BOUNDS&monthly_start_date=2023-07-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&search_type=category_change&category_tag=Tag%3A8225">OMG!<img className="homebar-buttons-body" src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" width="24" height="24" /></a>
 <a className="homebar-buttons-body" href="https://www.airbnb.com/?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&location_search=MIN_MAP_BOUNDS&monthly_start_date=2023-07-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&search_type=category_change&category_tag=Tag%3A4104">Countryside<img className="homebar-buttons-body"src="https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg" width="24" height="24" /></a>
 <a className="homebar-buttons-body" href="https://www.airbnb.com/?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&location_search=MIN_MAP_BOUNDS&monthly_start_date=2023-07-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&search_type=category_change&category_tag=Tag%3A5731">Chef's Kitchen<img className="homebar-buttons-body" src="https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg" width="24" height="24" /></a>
 <a className="homebar-buttons-body" href="https://www.airbnb.com/?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&location_search=MIN_MAP_BOUNDS&monthly_start_date=2023-07-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&search_type=category_change&category_tag=Tag%3A8115">Mansions<img className="homebar-buttons-body" src="https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg" width="24" height="24" /></a>
 <a className="homebar-buttons-body" href="https://www.airbnb.com/?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&location_search=MIN_MAP_BOUNDS&monthly_start_date=2023-07-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&search_type=category_change&category_tag=Tag%3A8536">Amazing views<img className="homebar-buttons-body" src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg" width="24" height="24" /></a>
 <a className="homebar-buttons-body" href="https://www.airbnb.com/?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&location_search=MIN_MAP_BOUNDS&monthly_start_date=2023-07-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&search_type=category_change&category_tag=Tag%3A5348">Cabins<img className="homebar-buttons-body"src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" width="24" height="24" /></a>
 <a className="homebar-buttons-body" href="https://www.airbnb.com/?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&location_search=MIN_MAP_BOUNDS&monthly_start_date=2023-07-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&search_type=category_change&category_tag=Tag%3A8522">Lakefront<img className="homebar-buttons-body" src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg" width="24" height="24" /></a>
 <a className="homebar-buttons-body" href="https://www.airbnb.com/?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&location_search=MIN_MAP_BOUNDS&monthly_start_date=2023-07-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&search_type=category_change&category_tag=Tag%3A8186">Tiny Homes<img className="homebar-buttons-body" src="https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg" width="24" height="24" /></a>
 <a className="homebar-buttons-body" href="https://www.airbnb.com/?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&location_search=MIN_MAP_BOUNDS&monthly_start_date=2023-07-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&search_type=category_change&category_tag=Tag%3A8661">Trending<img className="homebar-buttons-body"src="https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg" width="24" height="24" /></a>
 <a className="homebar-buttons-body" href="https://www.airbnb.com/?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&location_search=MIN_MAP_BOUNDS&monthly_start_date=2023-07-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&search_type=category_change&category_tag=Tag%3A8188"> Tree House<img className="homebar-buttons-body"src="https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg" width="24" height="24" /></a>
 <a className="homebar-buttons-body" href="https://www.airbnb.com/?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&location_search=MIN_MAP_BOUNDS&monthly_start_date=2023-07-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&search_type=category_change&category_tag=Tag%3A634">Camping<img className="homebar-buttons-body" src="https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg" width="24" height="24" /></a>
</div> */}
<div className="toggledButtonForPrice">
  Display total price
  Includes all fees, before taxes
  <label className="switch">
    <input type="checkbox" id="toggleButton" onClick={handleClick} />
    <span className="slider round"></span>
  </label>
</div> 

<div className="home-page-body">

      {allSpotsValues?.map((spotValues) => {
        return (
          <NavLink
            key= { spotValues?.id}
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
              {showPrice && (
                  <div className="price-to-toggle">
                    $ {spotValues?.price?.toFixed(2)} / night
                  </div>
                )}
            </div>
          </NavLink>
        );
      })}
         
    </div>
 
    </div>
  );
};

export default SpotsHomePage;
