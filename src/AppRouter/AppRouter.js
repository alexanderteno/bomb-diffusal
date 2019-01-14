import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../Home/Home';
import Wires from '../Modules/Wires';
import TheButton from '../Modules/TheButton';
import Keypads from '../Modules/Keypads';
import SimonSays from '../Modules/SimonSays';
import WhosOnFirst from "../Modules/WhosOnFirst";

const AppRouter = () => (

    <Router>
        <div id="router">
            <Route path="/" exact component={Home} />
            <Route path="/wires" component={Wires} />
            <Route path="/the-button" component={TheButton} />
            <Route path="/keypads" component={Keypads} />
            <Route path="/simon-says" component={SimonSays} />
            <Route path="/whos-on-first" component={WhosOnFirst} />
        </div>
    </Router>
)

export default AppRouter;
