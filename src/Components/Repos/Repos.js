import React, { Component } from 'react';
import './Repos.scss';
import { Button, Container, Card, CardContent } from '@material-ui/core';
import { getRepos } from '../../Tools/github-api';
import Spinner from 'react-bootstrap/Spinner';

export default class Repos extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            repos: '',
            searching: false
        }
        this.getInputValue = this.getInputValue.bind(this);
        this.fetchRepos = this.fetchRepos.bind(this);
    }

    getInputValue(value) {
        const state = this.state;
        this.setState({ ...state,
            inputValue: value });
        console.log(this.state.inputValue);
    }

    async fetchRepos () {
        const state = this.state;
        this.setState({
            searching: true
        });
        let repos = await getRepos(this.state.inputValue);
        this.setState({
            ...state,
            repos,
            searching: false
        });
        console.log(this.state.repos);
    }

    render() {
        const { repos, searching } = this.state;
        return (
            <div>
                <Container id='repos-container'>
                    <h1>Let's search some GitHub repos</h1>
                    <p>Enter a username and click search.</p>
                    <label id='repo-label'>username</label>
                    <input type='text' id='repo-input' onKeyUp={(e) => this.getInputValue(e.target.value)} />
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
                    <Button id='repo-button' onClick={this.fetchRepos}>Search</Button>
                    <Container>
                        { repos ? 
                            repos.map((repo) => {
                                return <Card id='repo-cards' key={repo.name}>
                                    <CardContent>
                                        <b>{ repo.name }</b> <br/> { repo.description }
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
