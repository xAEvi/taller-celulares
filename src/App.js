import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComponent from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBarComponent isLoggedIn={false} isAdmin={true} />
    </div>
  );
}

export default App;
