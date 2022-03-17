import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Zoom } from '@mui/material';

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

  // Create state for Zoom component's 'in' prop
  // Default value is false to hide component
  const [inProp, setInProp] = useState(false);

  // Manage Zoom component's in prop state
  // OnClick will set 'in' to true to reveal compnoent
  function inTransition() {
    setInProp(true);
  }

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

  // Call function to pass state upwards
  // Event handler of parent component will catch this state and store in an array
  function handleClick(event) {
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



  return (
    <div>
      <form className="create-note">
        {inProp && (
          <input  onChange={handleInput} value={noteState.title} name="title" placeholder="Title"/>
        )}
        <textarea onClick={inTransition} onChange={handleInput} value={noteState.content} name="content" placeholder="Take a note..." rows={(inProp) ? "3" : "1"} />

        <Zoom in={inProp}>
          <Fab onClick= {handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
