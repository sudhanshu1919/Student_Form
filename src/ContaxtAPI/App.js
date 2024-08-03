import React, { useState } from "react";
import Home from "./Home";
// we have Import from heare
import { createContext } from "react";
// We have Create Context
export const UserContext = createContext();
function App() {
  const [stuName, setStuName] = useState({
    name: "Bowie Alderney Sofa",
    price: "INR : 25,000/-",
    info: "One of the many things that make a house a home is a beautiful, comfortable sofa or armchair.",
    image:
      "https://media.sofa.com/thumbor/unsafe/fit-in/440x220/center/middle/https%3A%2F%2Fmedia.sofa.com%2Fmedias%2F%3Fcontext%3DbWFzdGVyfHJvb3R8MzAyMzQ2fGltYWdlL2pwZWd8aGMxL2g2Ni85MDIxODQ4ODEzNTk4LmpwZ3w4NTUwMTY3MTY4ZTc1ZWVjMWQ2YTVmZTMwYjI4YzBmZTIyODc5ZjAzZjNiZjc3Zjg1OGE5ZTk4MWQyYTQwOWVi",
  });

  return (
    <>
      <UserContext.Provider value={{ stuName, setStuName }}>
        <Home />
      </UserContext.Provider>
    </>
  );
}

export default App;
