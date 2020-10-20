import React, { createContext, useState, useContext } from "react";

const UserConText = createContext("unknown");

export default function App() {
  const [name, setName] = useState("mike");
  return (
    <div>
      <UserConText.Provider value={name}>
        <div>상단 메뉴</div>
        <Profile />
        <div>하단 메뉴</div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </UserConText.Provider>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <Greeting />
    </div>
  );
}

function Greeting() {
  const username = useContext(UserConText);
  return <p>{`${username}님 안녕하세요`}</p>;
}
