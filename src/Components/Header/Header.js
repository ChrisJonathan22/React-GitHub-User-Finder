import React from 'react';
import './Header.scss';
import { AppBar, Toolbar } from '@material-ui/core';
import GitHubLogo from '../../Assets/GitHub-Mark-Light-64px.png';
import { Link } from 'react-router-dom';


function Header () {
 
        return (
            <div>
                <AppBar position='static' className='menu-background'>
                    <Toolbar>
                        <div className='logo-container'>
                            <Link className='menu-items' to='/'>
                                <img className='logo' src={GitHubLogo} alt='GitHub logo' />
                            </Link>
                        </div>
                        <div className='right'>
                            <Link className='menu-items' to='/repos'>Search Repos</Link>
                            <Link className='menu-items' to='/orgs'>Search Organisations</Link>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }

    export default Header;