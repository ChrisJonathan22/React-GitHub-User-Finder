import React from 'react';
import './Home.scss';
import { Container } from '@material-ui/core';


const Home = () => {
    return (
        <div>
            <Container className='home-container'>
                <h1>Welcome Home</h1>
            </Container>
        </div>
    )
};

export default Home;