import "./App.css"
import WarningSign from "./components/WarningSign"
import MyBadge from "./components/MyBadge"
import books from "./data/books.json"
import BookList from "./components/BookList"

function App() {
  return (
    <div className="App">
      <WarningSign message="Hey This is a warning"></WarningSign>

      <h1>
        <MyBadge color="primary" message="Hello"></MyBadge>
      </h1>

      <BookList books={books} />
    </div>
  )
}

export default App
