import NotesList from "./components/NotesList";
import "./styles.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";
const App = () => {
  const date = new Date();
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("noteapp")) || []
  );
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);
  const handleAddNote = (text) => {
    if (text.trim().length > 0) {
      const newList = [...notes];
      newList.push({
        ...notes,
        id: nanoid(),
        content: text,
        time: date.toLocaleDateString()
      });
      setNotes(newList);
      localStorage.setItem("noteapp", JSON.stringify(newList));
    }
  };
  const handleDelete = (id) => {
    const filteredList = notes.filter((note) => note.id !== id);
    setNotes(filteredList);
  };
  return (
    <div className={`${toggle && "dark-mode"}`}>
      <div className="App">
        <Header toggle={toggle} setToggle={setToggle} />
        <Search search={search} setSearch={setSearch} />
        <NotesList
          notes={notes.filter((note) =>
            note.content.toLowerCase().includes(search.toLowerCase())
          )}
          handleAddNote={handleAddNote}
          handleDelete={handleDelete}
          search={search}
        />
      </div>
    </div>
  );
};

export default App;
