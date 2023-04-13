import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import {useHistory} from 'react-router-dom';
import OpenModalMenuItem from './OpenModalMenuItem';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';

function ProfileButton({ user }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const ulRef = useRef();
  
    const openMenu = () => {
      if (showMenu) return;
      setShowMenu(true);
    };
  
    useEffect(() => {
      if (!showMenu) return;
  
      const closeMenu = (e) => {
        if (!ulRef.current.contains(e.target)) {
          setShowMenu(false);
        }
      };
  
      document.addEventListener("click", closeMenu);
  
      return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);
  
    const closeMenu = () => setShowMenu(false);
  
    const logout = (e) => {
      e.preventDefault();
      dispatch(sessionActions.logout());
      closeMenu();
      history.push("/");
    };
  
    const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  
    return (
      <div className="profile-menu">
        <button onClick={openMenu} className="drop-down-menu" >
          <i class="fa fa-bars" aria-hidden="true"></i>
          <i class="fa fa-user-circle-o"></i>
        </button>
        <ul className={ulClassName} ref={ulRef}>
          {user ? (
            <> 
              <li>{user.username}</li>
              <li>
                {user.firstName} {user.lastName}
              </li>
              <li>{user.email}</li>
              <li>
                <button onClick={logout}>Log Out</button>
              </li>
            </>
          ) : (
            <>
            <div className="profile-drop-down">
              <OpenModalMenuItem
                itemText="Log In"
                onItemClick={closeMenu}
                modalComponent={<LoginFormModal />}
              />
              <OpenModalMenuItem
                itemText="Sign Up"
                onItemClick={closeMenu}
                modalComponent={<SignupFormModal />}
              />
              </div>
            </>
          )}
        </ul>
      </div>
    );
  }
  
  export default ProfileButton;
  