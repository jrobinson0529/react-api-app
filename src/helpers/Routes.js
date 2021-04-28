import React from 'react';
import { Switch, Route } from 'react-router-dom';

function Routes() {
  return (
    <div>
       <Switch>
          <Route path="/weather">
            <About />
          </Route>
          <Route path="/jokes">
            <Users />
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

function Users() {
  return <h2>jokes</h2>;
}
function Lyrics() {
  return <h2>Lyrics</h2>;
}
export default Routes;
