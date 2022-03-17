import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// The Purpose of This Component:
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//
// (1.) To take as input and render objects passed to this component
// (2.) And send upwards a callback function to parent component
// (3.) The callback function is to delete from the parent component
//      the object whose values were passed as props into this child component
//
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



function Note(props) {

  // Call function to pass state change upwards
  function handleDeleteClick(event) {
    // Prevent refresh
    event.preventDefault();

    // Pass id upwards to parent's deleteHandler function
    props.onDelete(
      props.id
    );
  }

  return (
    <div className="note">
      <h1>{(props.title !== "") ? props.title : "Note Title"}</h1>
      <p>{(props.content !== "") ? props.content : "Note Content"}</p>
      <button onClick= {handleDeleteClick} >
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
