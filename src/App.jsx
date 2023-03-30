import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App bg-secondary">
      <MyNav />
      <Welcome />
      <BookList />
      <MyFooter />
    </div>
  );
}

export default App;
