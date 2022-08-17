import "./App.css";
import Header from "./components/Header";

const name = "Bengisu";
const surname = "Şahin";
const isLoggedIn = false;

function App() {
  return (
    <>
      {/* <h1>{isLoggedIn && `Benim adım ${name},soyadım ${surname}`}</h1>

      {!isLoggedIn && "Giriş yapmadınız."} */}

      <h1>
        {isLoggedIn
          ? `Benim adım ${name},soyadım ${surname}`
          : "Giriş yapmadınız."}
      </h1>
    </>
    // <div>
    //   <h1>Hello</h1>
    //   <Header />
    // </div>
  );
}

export default App;
