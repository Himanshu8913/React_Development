/**
 * This component will be Class Based Component. 
 */
import React from "react";

class User extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="user-card">
                <h2>Name: Himanshu Gupta</h2>
                <h4>Location: Pune, Maharastra</h4>
                <h4>Contact: @Himanshu8913</h4>
            </div>
        )
    }
};

export default User;