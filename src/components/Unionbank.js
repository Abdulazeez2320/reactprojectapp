import React, { Component } from 'react'
import Andrabank from './Andrabank'
import Corporatebank from './Corporatebank'

export class Unionbank extends Component {
    render() {
        return (
            <div>
                <Andrabank loccation="kavali"/>
                <Corporatebank location="kakinada"/>
            </div>
        )
    }
}

export default Unionbank
