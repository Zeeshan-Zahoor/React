import React from "react";

const UserContext = React.createContext(
    {
  user: null,
  setUser: () => {}, // fallback (important)
})

export default UserContext;

