import React from 'react';

//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.

//Challenge. Render all the notes inside notes.js as a seperate Note
//component.

function Card(props) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}

export default Card;
