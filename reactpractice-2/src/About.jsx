import React, { useEffect, useState } from "react";

export const About = () => {
  const [Count, setCount] = useState(0);

  useEffect(() => {
    let data = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(data);
    };
  }, []);

  return (
    <>
      console.log("hello now About is avelable")
      <div className="text-6xl text-black font-bold">About is now </div>
      <p>{Count}</p>
    </>
  );
};
