import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "Vamsi Naidu",
        email: "duvvana.vamsi@gmail.com"
    }
});

export default UserContext;