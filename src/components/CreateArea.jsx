import React, { useState } from "react";

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// The Purpose of This Component:
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//
// (1.) To capture two separate inputs into a single object {title, content},
// (2.) And then store this object as state
// (3.) And pass this state upwards to the App component
//
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function CreateArea(props) {
  // Define a state
  // State is a pair of strings, the note Title and the note Content
  const [noteState, setNoteState] = useState({
    title: "",
    content: ""
  });

  // Declare event handler for events from <input> and <textarea>
  function handleInput(event) {
    // Prevent refresh
    event.preventDefault();

    // Select events from components
    const {name, value} = event.target;

    // Update state with components
    setNoteState( (prevItems) => {
      return {...prevItems,
              [name]: value}
      }
    );
  }

  return (
    <div>
      <form>
        <input onChange={handleInput} value={noteState.title} name="title" placeholder="Title" />
        <textarea onChange={handleInput} value={noteState.content} name="content" placeholder="Take a note..." rows="3" />
        <button
          onClick= {
            // Call function to pass state upwards
            // Event handler of parent component will catch this state and store in an array
            (event) => {
              // Prevent refresh
              event.preventDefault();

              // Take props from CreateArea and pass noteState upwards to parent
              props.onAdd(noteState);

              // Reset input text when button is clicked
              setNoteState(
                {
                  title: "",
                  content: ""
                }
              );
            }
          }
          >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
