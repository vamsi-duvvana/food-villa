import React from "react";
// import { Outlet } from "react-router-dom";
import ProfileFromClassComponent from "./ProfileClass";
import ProfileFromFunctionalComponent from "./Profile";

const AboutUs = () => {
    return (
        <div>
            <h1>About Us Page</h1>
            <p>This is the about us page</p>
            {/* <Outlet /> */}
            <ProfileFromFunctionalComponent name={"Vamsi"} />
            <ProfileFromClassComponent name={"Vamsi Duvvana"} />
        </div>
    )
}

// class AboutUs extends React.Component {
//     // constructor(props){
//     //     super(props);
//     // }
//     render() {
//         return (
//             <div>
//                 {/* <div>{this.props.name}</div> */}
//                 <h1>About Us Page</h1>
//                 <p>This is the about us page</p>
//                 {/* <Outlet /> */}
//                 <ProfileFromFunctionalComponent name={"Vamsi"} />
//                 <ProfileFromClassComponent name={"Vamsi Duvvana"} />
//             </div>
//         )
//     }
// }

export default AboutUs;
