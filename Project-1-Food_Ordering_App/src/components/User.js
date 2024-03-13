/**
 * This component will be Class Based Component. 
 */
import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count2: 0,
        }
        // console.log(props);
    }
    render() {

        const { name, location, contact } = this.props;
        const { count, count2 } = this.state;

        return (
            <div className="user-card">
                <h2>Count: {count}</h2>
                <h2>Count2: {count2}</h2>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 2,
                    })
                }}>
                    Count Increase
                </button>
                <h2>Name: {name}</h2>
                <h4>Location: {location}</h4>
                <h4>Contact: {contact}</h4>
            </div>
        )
    }
};

export default User;