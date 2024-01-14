import { useEffect, useState } from "react";

const Profile = (props) => {
    const [count, setCount] = useState(0);
    const [count2] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => console.log("Nameste React"), 1000)

        return (() => {
            clearInterval(timer);
        })
    })

    return (
        <div>
            <h2>Hi This is {props.name}</h2>
            <h2>Count from function: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Count from function</button>
            <h2>Count from function: {count2}</h2>
        </div>
    )
}

export default Profile;
