import React, { useContext, useEffect, useState } from "react";
import { Home } from "./home";
import { About } from "./About";
import { MyStore } from "./context/MyContextStore";

export const App = () => {
  const [Count, setCount] = useState(0);
  const [PageChange, setPageChange] = useState(true);
  let { Users, setUsers } = useContext(MyStore);
  let text = "rendring......";
  useEffect(() => {
    return console.log(text);
  }, []);

  return (
    <div>
      <div>App {Users}</div>
      <div>value = {Count}</div>
      <div>
        <button
          onClick={() => {
            setCount(Count + 1);
          }}
        >
          counter
        </button>
        {PageChange ? <Home /> : <About />}
        <button
          onClick={() => {
            setPageChange(!PageChange);
          }}
        >
          change page
        </button>
      </div>
    </div>
  );
};
