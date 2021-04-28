import React from 'react';
import { Switch, Route } from 'react-router-dom';
import JokeGenerator from '../App/components/jokesAPI/JokeGenerator';

function Routes() {
  return (
    <div>
       <Switch>
          <Route path="/weather">
            <About />
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
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>weather</h2>;
}
function Lyrics() {
  return <h2>Lyrics</h2>;
}
export default Routes;
