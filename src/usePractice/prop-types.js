import PropTypes from "prop=types";

User.PropTypes = {
  male: PropTypes.bool.isRequired,
  age: PropTypes.number,
  type: PropTypes.oneOf(["gold", "silver", "bronze"]),
  onChangeName: PropTypes.func, // (name: string) => void
  onChangeTitle: PropTypes.func.isRequired,
};

export default function User({ type, age, male, onChangeName, onChangeTitle }) {
  function onClick1() {
    const msg = `type: ${tyep}, age: ${age ? age : `알 수 없음`}`;
    log(msg, { color: type === "gold" ? "red" : "black" });
    // ...
  }
  function onClick2(name, title) {
    if (onChangeName) {
      onChangeName(name);
    }
    onChangeTitle(title);
    male ? goMalePage() : goFemalePage();
    // ...
  }
  // ...
  return null;
}

function goMalePage() {}
function goFemalePage() {}
