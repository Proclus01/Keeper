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
      <div>
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
      </div>
      <Footer />
    </div>
  );
}

export default App;

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
