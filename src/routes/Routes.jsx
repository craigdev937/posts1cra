import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "../pages/Home";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Container } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

export const Routes = () => (
    <BrowserRouter>
        <Container>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
            </Switch>
        </Container>
    </BrowserRouter>
);


