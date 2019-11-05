import React from 'react';
import './Repos.scss';
import { Button, Typography, Container } from '@material-ui/core';
import GitHubLogo from '../../Assets/GitHub-Mark-120px-plus.png';


const Repos = () => {
    return (
        <div>
            <Container className='repos-container'>
                <h1>Repos</h1>
            </Container>
        </div>
    )
};

export default Repos;