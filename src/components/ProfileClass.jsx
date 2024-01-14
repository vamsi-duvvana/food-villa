// Class Based Component

import React from "react";

class Profile extends React.Component {

    // We use constructor for state variables::similar to useState() Hook in the function based component.
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 1,
        }
    }

    componentDidMount() {
        // API calls are made here as
        // It renders after the component is rendered.
    }

    // Cannot create a Class based component without the render method.
    render() {
        // This render method returns some JSX like the functional based component
        return (
            <div>
                <h1>Profile from Class based component</h1>
                <h2>Name : {this.props.name}</h2>
                <h2>Count from Class :  {this.state.count}</h2>
                {/*
                    We Do Not Mutate Directly
                    Never Do this.state.count = this.state.count + 1;
                */}
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Count from Class</button>
                <h2>Count from Class: {this.state.count2}</h2>
            </div>
        )
    }
}

export default Profile;
