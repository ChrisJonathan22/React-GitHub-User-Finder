import React , { Component } from 'react';
import './Header.scss';
import {AppBar, Toolbar, Button} from '@material-ui/core';
import GitHubLogo from '../../Assets/GitHub-Mark-Light-64px.png';
import { Link } from "@reach/router"
import { BrowserRouter as Router, NavLink } from 'react-router-dom';


export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AppBar position='static' className='menu-background'>
                    <Toolbar>
                        <div className='logo-container'>
                            <img className='logo' src={GitHubLogo} />
                        </div>
                        <div className='right'>
                            {/* <Link to='/repos'>Repos</Link> */}
                            <Router>
                                <NavLink className='menu-items' exact to ='/repos'>Search Repos</NavLink>
                                <NavLink className='menu-items' exact to ='/orgs'>Search Organisations</NavLink>
                            </Router>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}