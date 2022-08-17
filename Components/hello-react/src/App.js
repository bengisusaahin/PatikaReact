import "./App.css";
import User from "./components/User";

function App() {
  return (
    <>
      <User name="Bengisu" surname="Sahin" isLoggedIn={true} age={23} />
    </>
  );
}

export default App;
