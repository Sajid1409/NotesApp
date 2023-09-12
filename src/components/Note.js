import { MdDeleteForever } from "react-icons/md";
const Note = ({ id, content, time, handleDelete }) => {
  return (
    <div className="note">
      <span className="note-content">{content}</span>
      <div className="note-footer">
        <small className="note-date">{time}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.3em"
          onClick={() => handleDelete(id)}
        />
      </div>
    </div>
  );
};

export default Note;
