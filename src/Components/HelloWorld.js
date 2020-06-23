import React from 'react'

// Using function
// function HelloWorld(props) {
//     return (
//         <h1>Hello {props.name}</h1>
//     )
// }

// Using class
class HelloWorld extends React.Component {
    render() {
        return (
            <h1>Hello {this.props.name}</h1>
        )
    }
}

export default HelloWorld