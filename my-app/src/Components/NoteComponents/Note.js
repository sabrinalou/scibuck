function Note({ id, text, deleteNote }) {
    return (
      <div className="note">
        <div className="note__body">{text}</div>
      </div>
    );
  }
  export default Note;