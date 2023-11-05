import React from "react";
import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, title, date, handleDeleteNote }) => {
  return (
    <div className="note" key={id}>
      <div>
        <p className="text-xl font-semibold">{title}</p>
        <p className="mt-4 text-sm tracking-wide">{text}</p>
      </div>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => {
            handleDeleteNote(id);
          }}
          className="cursor-pointer hover:text-red-500 transition-colors duration-300"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
