import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import OpenModalButton from './OpenModalMenuItem';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';
import { login } from '../../store/session';
import logoproj from '../../assets/logoproj.jpg'
function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state?.session?.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            
            // <NavLink className="create-spot-link" exact to="/spots/new"> Create a Spot </NavLink>
            <li>
                {/* <NavLink className="create-spot-link" exact to="/spots/new"> Create a Spot </NavLink> */}
                {/* <div className="profile-button"> */}
                <ProfileButton user={sessionUser} />
            {/* </div> */}
            </li>
        );
    } else {
        sessionLinks = (
            <li>
                <OpenModalButton
                    buttonText="Log In"
                    modalComponent={<LoginFormModal />}
                    
                />
 
                <OpenModalButton
                    buttonText="Sign Up"
                    modalComponent={<SignupFormModal />}
                  
                />
            </li>
        );
    }

    return (
       
        <ul>

            <div className='full-nav'>
            <div className='left-nav-bar>'> 
            <a href="/">
                <img src={logoproj} height="100px" width="300px" alt="Logo"/>
            </a>
        {/* <li>
          {/* <NavLink exact to="/">Home</NavLink> */}
        
        {/* </li> */} 
        </div>
        <div className='right-nav-bar>'> 
                <div>{sessionUser ? <NavLink className="create-spot-link" exact to="/spots/new"> Create a Spot </NavLink>:<></> }</div>
        {isLoaded && sessionLinks}
        
       </div>
        </div>
           
      </ul>
      
            )
            }
export default Navigation;