import React, { useReducer } from "react";

export const ProfileDispatch = React.createContext(null);
// Context API 를 이용해서 ProfileDispatch라는 Context 만들어준다.

export default function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <div>
      <p>{`name is ${state.name}`}</p>
      <p>{`age is ${state.age}`}</p>
      <ProfileDispatch.Provider value={dispatch}>
        <SomeComponent />
      </ProfileDispatch.Provider>
    </div>
  );
}

const INITIAL_STATE = { name: "empty", age: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.name };
    case "setAge":
      return { ...state, age: action.age };
    default:
      return state;
  }
}
