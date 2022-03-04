import React from 'react';
import notes from "../notes";
import Card from "./Card";

//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.

//Challenge. Render all the notes inside notes.js as a seperate Note
//component.

function Note() {
    return (
      <div>
        {notes.map( (noteTerm) => (
          <Card
            key={noteTerm.id}
            title={noteTerm.title}
            content={noteTerm.content}
          />
        ))}
      </div>
    );
}

export default Note;
