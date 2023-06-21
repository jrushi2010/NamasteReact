import { createContext } from "react";

const UserContext = createContext({
    user: {
    name: "Dumy name",
    email: "dumy@gmail.com",
    }
});

export default UserContext;

