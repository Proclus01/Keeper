import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// The Purpose of This Component:
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//
// (1.) Accept object {title, content} inputs from child function: CreateArea
// (2.) Store object inside of array and update array via event handler
// (3.) Accept state updates from CreateArea and update array via event handler
// (4.) Render Note component via map, using the array
// (5.) Accept state updates from Note and use the value to delete object from array via handler
//
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function App() {
  // Declare empty array to store objects comprising of {title, content}
  // You can also pre-set an empty object as such: {title: "", content: ""}
  const [notes, setNotes] = useState([]);

  // Create event handler for the CreateArea component's button onAdd event
  function areaHandler(event) {
    // Capture state from onAdd
    const { title, content } = event;

    // Update notes array with an object comprising of {title, content}
    setNotes(
      (prevItems) => {
        return [...prevItems, {title, content}];
      }
    );
  }

  // Create event handler for delete button on individual note instances
  // The handler captures the id value passed upwards from Note's onDelete event
  function deleteHandler(id) {
    setNotes(
      (prevItems) => {
        // Filter out every value except the Note id of the button clicked
        // and then update the entire notes array accordingly
        return prevItems.filter(
          (item, index) => {
            return index != id;
          }
        );
      }
    );
  }

  return (
    <div>
      <Header />
      {/* Capture new note object and pass to notes array via areaHandler */}
      <CreateArea onAdd={areaHandler} />

      {
        // Map over the notes array and pass props down into child components
        notes.map(
          (note, index) => (
            <Note
              onDelete={deleteHandler}
              key={index}
              id={index}
              title={note.title}
              content={note.content} />
          )
        )
      }

      <Footer />
    </div>
  );
}

export default App;
