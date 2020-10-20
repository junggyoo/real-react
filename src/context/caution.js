import React, { createContext, useState, useContext } from "react";

const UserConText = createContext({ username: "unknown", age: 0 });

export default function App() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const [count, setCount] = useState(0);
  console.log("App render");
  return (
    <div>
      <UserConText.Provider value={(username, age)}>
        <Profile />
        <button onClick={() => setCount(count + 1)}>증가</button>
      </UserConText.Provider>
    </div>
  );
}

function Profile() {
  console.log("Profile render");
  return (
    <div>
      <Greeting />
    </div>
  );
}

function Greeting() {
  console.log("Greeting render");
  const username = useContext(UserConText);
  return <p>{`${username}님 안녕하세요`}</p>;
}
