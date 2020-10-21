import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import history from '../history';

export class SideBar extends Component {

    clickHandler() {
        history.push(`/admin`);
    }

    render() {
        return (
            <div className="ca side-bar">
                <div className="nav-override-color">Sidebar</div>
                
            </div>
        )
    }
}

