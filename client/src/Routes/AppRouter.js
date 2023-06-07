import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Landing from '../pages/landing/landing';
import Home from '../pages/home/home';
import Detail from '../pages/detail/detail';
import Form from '../pages/form/form';
import About from '../pages/about/about';
import NotFound from '../pages/notFound/notFound';
import NavBar from '../components/navBar/navBar';
import Footer from '../components/footer/footer';

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/">
                    <NavBar />
                    <Switch>
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/countries/:id" component={Detail} />
                        <Route exact path="/form" component={Form} />
                        <Route exact path="/about" component={About} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                    <Footer />
                </Route>
            </Switch>
        </Router>
    );
}