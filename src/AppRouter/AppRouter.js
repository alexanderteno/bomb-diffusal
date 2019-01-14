import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../Home/Home';
import Wires from '../Modules/Wires';
import TheButton from '../Modules/TheButton';
import Keypads from '../Modules/Keypads';
import SimonSays from '../Modules/SimonSays';
import WhosOnFirst from "../Modules/WhosOnFirst";
import Memory from "../Modules/Memory";
import MorseCode from "../Modules/MorseCode";
import ComplicatedWires from '../Modules/ComplicatedWires';
import WireSequences from '../Modules/WireSequences';
import Mazes from "../Modules/Mazes";
import Passwords from "../Modules/Passwords";


const AppRouter = () => (

    <Router>
        <div id="router">
            <Route path="/" exact component={Home} />
            <Route path="/wires" component={Wires} />
            <Route path="/the-button" component={TheButton} />
            <Route path="/keypads" component={Keypads} />
            <Route path="/simon-says" component={SimonSays} />
            <Route path="/whos-on-first" component={WhosOnFirst} />
            <Route path="/memory" component={Memory} />
            <Route path="/morse-code" component={MorseCode} />
            <Route path="/complicated-wires" component={ComplicatedWires} />
            <Route path="/wire-sequences" component={WireSequences} />
            <Route path="/mazes" component={Mazes} />
            <Route path="/passwords" component={Passwords} />
        </div>
    </Router>
)

export default AppRouter;
