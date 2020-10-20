import React, { createContext, useState, useContext } from "react";

const UserConText = createContext({ username: "unknown", age: 0 });

export default function App() {
  const [user, setUser] = useState({ username: "마이크", age: 23 });
  const [count, setCount] = useState(0);
  console.log("App render");
  return (
    <div>
      <UserConText.Provider value={user}>
        <Profile />
        <button onClick={() => setCount(count + 1)}>증가</button>
      </UserConText.Provider>
    </div>
  );
}

const Profile = React.memo(function () {
  console.log("Profile render");
  return (
    <div>
      <Greeting />
    </div>
  );
});

function Greeting() {
  console.log("Greeting render");
  const { username } = useContext(UserConText);
  return <p>{`${username}님 안녕하세요`}</p>;
}
