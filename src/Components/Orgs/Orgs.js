import React, { Component } from 'react';
import './Orgs.scss';
import { Button, Container, Card, CardContent } from '@material-ui/core';
import { getUserData } from '../../Tools/github-api';
import Spinner from 'react-bootstrap/Spinner';

export default class Orgs extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            userData: '',
            searching: false
        }
        this.getInputValue = this.getInputValue.bind(this);
        this.fetchUserData = this.fetchUserData.bind(this);
    }

    getInputValue(value) {
        const state = this.state;
        this.setState({ ...state,
            inputValue: value });
        console.log(this.state.inputValue);
    }

    async fetchUserData () {

        const state = this.state;
        this.setState({
            searching: true
        });
        let userData = await getUserData(this.state.inputValue);
        this.setState({
            ...state,
            userData,
            searching: false
        });
    }

    render() {
        const { userData, searching } = this.state;
        return (
            <div>
                <Container id='orgs-container'>
                    <h1>Let's search some GitHub orgs</h1>
                    <p>Enter a username and click search.</p>
                    <label id='org-label'>username</label>
                    <input type='text' id='org-input' onKeyUp={(e) => this.getInputValue(e.target.value)} />
                    {
                        searching ?
                        <div>
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                        <br />
                        </div>
                        :
                        null
                    }
                    <Button id='org-button' onClick={this.fetchUserData}>Search</Button>
                    <Container>
                        { userData ? 
                            userData.orgs.map((org) => {
                                return <Card id='org-cards' key={org.login}>
                                    <CardContent>
                                        <b>{ org.login }</b> <br/> { org.description }
                                    </CardContent>
                                </Card>;
                            }) 
                            : 
                            null
                        }
                    </Container>
                </Container>
            </div>
        )
    }
};
