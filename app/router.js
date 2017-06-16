import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

//Layout
import MainContainer from './components/MainContainer';
import ContentContainer from './components/ContentContainer';

//Pages
import Home from './components/Home'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Projects from './components/Projects'



export default (
    <Router history={browserHistory}>
        <Route component={MainContainer}>
            <Route path="/" component={Home} />


            <Route path="skills">
                <Route component={ContentContainer}>
                    <IndexRoute component={Skills}/>
                </Route>
                {/*<Route path="authors/:Id" component={BooksList}/>*/}
                {/*<Route path="authors/:Id/:Id" component={BookItem} />*/}
            </Route>

            <Route path="portfolio">
                <Route component={ContentContainer}>
                    <IndexRoute component={Portfolio} />
                </Route>

            </Route>

            <Route path="projects">
                <Route component={ContentContainer}>
                    <IndexRoute component={Projects} />
                </Route>
            </Route>

            <Route path="contact">
                <Route component={ContentContainer}>
                    <IndexRoute component={Contact} />
                </Route>
            </Route>

        </Route>
  </Router>
)
