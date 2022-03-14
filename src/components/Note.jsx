import React from "react";

//Challenge:
//1. Implement the "add note" functionality
//- create a constant that keeps track of the title and content
//- Pass the new note back to the App
//- Add new note to an array
//- Take array and render separate Note components for each line

//2. Implement the delete note functionality
//- Callback from the Note component to trigger a delete function
//- Use the filter function to filter out the item that needs deletion
//- Pass an id over to the Note component, then
//pass it back to the App when deleting

//This is the end result you're aiming for:
//https://pogqj.csb.app/

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button>DELETE</button>
    </div>
  );
}

export default Note;
