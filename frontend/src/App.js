// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import * as sessionActions from "./store/session";
import SpotsHomePage from "./components/Spots/SpotsHomePage";
import OneSpotDetails from "./components/Spots/OneSpotDetails";

function App() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    }, [dispatch]);

    return (
        <>
          
                <Switch>
                    <Route exact path="/">
                        <SpotsHomePage/>
                    </Route>
                    <Route path="/spots/:spotId">
                    <OneSpotDetails/>
                    </Route>
                </Switch>
           

        </>
    );
}

export default App;