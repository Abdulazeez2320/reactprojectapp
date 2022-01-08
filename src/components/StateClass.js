import React, { Component } from 'react'

export default class StateClass extends Component {
   
        // rconst
        constructor(props){
            super(props)

            this.state={
                name:"sury"
                count:0
            }
        }
        render() {
            setTimeout(() => {
                this.setState({
                    name:"surya narla",
                });
            },2000);
        return (
            <div>
                <h1>name:{this.state.name}</h1>
                <h2>count:{this.state.count}</h2>
            </div>
        )
    }
}

export default StateClass
