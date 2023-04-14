import {useModal} from "../../../context/Modal";
import {deleteOneSpotThunk} from '../../../store/spots';
import {useDispatch} from 'react-redux';
// import OpenModalMenuItem from "../../Navigation/OpenModalMenuItem";

export default function DeleteOneSpot({spotId}) {
const {closeModal} = useModal()
const dispatch = useDispatch()

const onSubmit = async(e) => {
e.preventDefault();
dispatch(deleteOneSpotThunk(spotId))
closeModal()
}

const onCancel = (e) => {
    e.preventDefault();
    closeModal();
}
return (
   
    <div className="spot-delete-form-div">
    <div className="title">Are you sure you want to delete this spot?</div>
    <ul className="errors">
        {/* {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
        ))} */}
    </ul>
            <form onSubmit={onSubmit}>
        <div className="delete-spot-form">
        <button type="submit" className="spot-button-delete" id="deleteSpot-button" >Yes, Delete This Spot.</button>
        <button type="submit" onClick={onCancel}>No, cancel</button>
        </div>
            </form>
</div>

)

}