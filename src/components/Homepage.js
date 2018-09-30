import React from 'react';
import Nav from './Nav';
import {Hero} from './Hero'

export default class Homepage extends React.Component {
    render(){
        return (
            <div>
                <Nav />
                <Hero />
            </div>
        )
    }
}