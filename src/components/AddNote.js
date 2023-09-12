import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleSubmit = () => {
    handleAddNote(noteText);
    setNoteText("");
  };
  return (
    <div className="note new">
      <textarea
        row="8"
        column="10"
        placeholder="Type Here..."
        value={noteText}
        onChange={(e) => handleChange(e)}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Characters remaining</small>
        <button className="save" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
