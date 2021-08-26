import React, {Component, component} from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";



export default class HomePage extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
        <Router>
            <Switch>
                <Route exact path='/'> <p>Home page</p></Route>
                <Route path='/create' component={CreateRoomPage} />
                <Route path='/join' component={RoomJoinPage} />
            </Switch>
        </Router>
        );
    }
}