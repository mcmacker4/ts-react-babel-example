import React, { Component } from 'react'
import { render } from 'react-dom'

class Application extends Component {

    render() {
        return (
            <h1>Hello World</h1>
        )
    }

}

render(<Application />, document.getElementById('root'))