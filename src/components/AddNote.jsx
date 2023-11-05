import React, { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChangeTitle = (event) => {
    setNoteTitle(event.target.value);
  };

  const handleChangeText = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteTitle, noteText);
    }
    setNoteTitle("");
    setNoteText("");
  };

  return (
    <div className="note new">
      <input
        placeholder="Add a title"
        value={noteTitle}
        onChange={handleChangeTitle}
        className="text-xl font-semibold outline-none bg-transparent"
      />
      <textarea
        rows="7"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChangeText}
        className="mt-4 border-none bg-transparent outline-none text-sm resize-none"
      />
      <div className="note-footer">
        <small>{characterLimit - noteText.length} remaining</small>
        <button className="save-btn" onClick={handleClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
