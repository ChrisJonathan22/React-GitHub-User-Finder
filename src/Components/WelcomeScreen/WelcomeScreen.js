import React from 'react';
import './WelcomeScreen.scss';
import { Container } from '@material-ui/core';
import GitHubLogo from '../../Assets/GitHub-Mark-120px-plus.png';


const WelcomeScreen = () => {
    return (
        <div>
            <Container className='welcome-screen-container'>
                <img src={GitHubLogo} alt='GitHub Logo' />
            </Container>
        </div>
    )
};

export default WelcomeScreen;