import "./App.css"
import WarningSign from "./components/WarningSign"
import MyBadge from "./components/MyBadge"
import books from "./data/books.json"
import BookList from "./components/BookList"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <WarningSign message="Hey This is a Warning"></WarningSign>

      <h2>
        <MyBadge color="warning" message="Scifi "></MyBadge>
      </h2>

      <BookList books={books} />
    </div>
  )
}

export default App
