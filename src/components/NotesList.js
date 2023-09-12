import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = ({ notes, handleAddNote, handleDelete }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          content={note.content}
          time={note.time}
          id={note.id}
          handleDelete={handleDelete}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
