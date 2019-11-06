import React from 'react';
import { Container } from '@material-ui/core';
import GitHubLogo from '../../Assets/GitHub-Mark-120px-plus.png';


const WelcomeScreen = () => {
    return (
        <div>
            <Container className='home-container'>
                <img src={GitHubLogo} />
            </Container>
        </div>
    )
};

export default WelcomeScreen;