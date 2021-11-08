import "./App.css";
import FormCreate from "./components/FormCreate/FormCreate";
import Header from "./components/Header/Header";
import List from "./components/List/List";

function App() {
  return (
    <>
      <h1>Robots: FIRST Full stack App</h1>
      <Header />
      <List />
      <FormCreate />
    </>
  );
}

export default App;
