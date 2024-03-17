import User from "./User";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
    constructor(props) {
        super(props);

        console.log("Parent Constructor");
    }

    componentDidMount() {
        // console.log("Parent Component Did Mount");
        // API call -> Similar like useEffect()
    }

    render() {
        // console.log("Parent Render");

        return (
            <div>
                <h1>About Class Component</h1>
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                        {({ loggedInUser }) => (
                            <h1 className="text-xl font-bold">{loggedInUser}</h1>
                        )}
                    </UserContext.Consumer>
                </div>
                <h2>This is about page...</h2>
                <User name={"Himanshu Gupta"} location={"Pune, Maharastra"} contact="@Himanshu8913" />

            </div>
        );
    }
}

export default About;