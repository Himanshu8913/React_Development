/**
 * This component will be Class Based Component. 
 */
import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props);

        console.log(props);
    }
    render() {
        
        const {name, location, contact} = this.props;

        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h4>Location: {location}</h4>
                <h4>Contact: {contact}</h4>
            </div>
        )
    }
};

export default User;