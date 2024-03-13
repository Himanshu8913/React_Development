/**
 * This component will be Class Based Component. 
 */
import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Test",
                location: "Default",
            },
        }
        // console.log(this.props.name + " Child Constructor")
    }

    async componentDidMount() {
        // API call -> Similar like useEffect()
        const data = await fetch("https://api.github.com/users/Himanshu8913");
        const json = await data.json();

        this.setState({
            userInfo: json
        });
        console.log(json);
    }

    render() {
        const { avatar_url, name, location, login } = this.state.userInfo;
        // const { name, location, contact } = this.props;

        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h4>Location: {location === null ? "Please update the location" : location}</h4>
                <h4>Contact: {login}</h4>
            </div>
        )
    }
};

export default User;