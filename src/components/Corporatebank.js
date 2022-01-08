import React, { Component } from 'react';
export default class Corporatebank extends Component {
    render(props) {
        return (
            <div>
               <h1>the main branch of corporatate bank is located at {this.props.location}</h1> 
            </div>
        );
    }
}

