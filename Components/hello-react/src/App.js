import "./App.css";
import User from "./components/User";

const friends = [
  {
    id: 1,
    name: "Ahmet",
  },
  {
    id: 2,
    name: "Tayfun",
  },
  {
    id: 3,
    name: "Ahmet2",
  },
];

function App() {
  return (
    <>
      <User
        name="Bengisu"
        surname="Sahin"
        isLoggedIn={true}
        age={23}
        friends={friends}
      />
    </>
  );
}

export default App;
