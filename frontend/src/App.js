// frontend/src/App.js
import React, 
{ useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import * as sessionActions from "./store/session";
import SpotsHomePage from "./components/Spots/SpotsHomePage";
import OneSpotDetails from "./components/Spots/OneSpotDetails";
import CurrentUserSpots from "./components/Spots/CurrentUsersSpots";
import CreateSpot from "./components/Spots/CreateSpot";

function App() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    }, [dispatch]);

    return (
        <>
          <Navigation isLoaded={isLoaded}/> 
          {isLoaded && (
                <Switch>
                    <Route exact path="/">
                        <SpotsHomePage/>
                    </Route>
                    <Route exact path="/spots/current">
                        <CurrentUserSpots/>
                    </Route>
                    <Route exact path="/spots/new">
                        <CreateSpot/>
                    </Route>
                    <Route exact path="/spots/:spotId">
                        <OneSpotDetails />
                    </Route>
                </Switch>
            )} 

        </>
    );
}

export default App;