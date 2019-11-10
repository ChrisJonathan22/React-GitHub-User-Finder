import React from 'react';
import './Home.scss';
import { Container } from '@material-ui/core';

const Home = () => {
    return (
        <div>
            <Container className='home-container'>
                <h1 id='home-title'>Welcome Home</h1>
                <p>This app allows users to retrieve a user's repository list or organisation list using the user's username.</p>
            </Container>
        </div>
    )
};

export default Home;