import React from 'react';
import { Switch, Route } from 'react-router-dom';
import JokeGenerator from '../App/components/jokesAPI/JokeGenerator';
import Lyrics from '../App/components/lyricsAPI/Lyrics';
import WeatherTracker from '../App/components/weatherAPI/WeatherTracker';
import Home from '../views/Home';

function Routes() {
  return (
    <div>
       <Switch>
          <Route path="/weather">
            <WeatherTracker />
          </Route>
          <Route path="/jokes">
            <JokeGenerator />
          </Route>
          <Route path="/lyrics">
            <Lyrics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </div>
  );
}
export default Routes;
