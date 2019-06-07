import React from 'react';
import Home from './homepage';
import AboutMe from './aboutme';
import Contact from './contact';
import Resume from './resume';
import Blog from './blog';
import {Switch, Route} from 'react-router-dom';

const Main = () => (
  <Switch>
    <Route exact path = "/" component = {Home} />
    <Route path = "/aboutme" component = {AboutMe} />
    <Route path = "/contact" component = {Contact} />
    <Route path = "/resume" component = {Resume} />
    <Route path = "/blog" component = {Blog} />
  </Switch>
)

export default Main;
