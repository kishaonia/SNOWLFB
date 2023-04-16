import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import OpenModalMenuItem from './OpenModalMenuItem';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';
import { login } from '../../store/session';
import logoproj from '../../assets/logoproj.jpg';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state?.session?.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <li>
        <ProfileButton user={sessionUser} />
      </li>
    );
  } else {
    sessionLinks = (
      <li>
        <OpenModalMenuItem
          buttonText="Log In"
          modalComponent={<LoginFormModal />}
        />

        <OpenModalMenuItem
          buttonText="Sign Up"
          modalComponent={<SignupFormModal />}
        />
      </li>
    );
  }

  return (
  
   <ul className="navbar">
      <div className="left-nav-bar">
        <a href="/">
          <img src={logoproj} height="100px" width="300px" alt="Logo" />
        </a>
      </div>
      <div className="right-nav-bar">
        {sessionUser && (
          <NavLink className="create-spot-link" exact to="/spots/new">
            Create a Spot
          </NavLink>
        )}
      
        <button className='profile-button'>
           <ProfileButton user={sessionUser} />
        </button>
      </div>
    </ul>

);

}

export default Navigation;