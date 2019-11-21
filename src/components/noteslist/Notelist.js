import React from 'react';
import Paper from '@material-ui/core/Paper';
import './Notelist.css'

function NoteList() {
    const options = {
        hour:  "2-digit",
        minute: "2-digit",
        hour12 : true
     }
  return (
    <React.Fragment>
        <Paper>
        <p>Hello! Welcome!!?</p>
        <p>{new Date().toLocaleTimeString("en-us", options)}</p>
        </Paper>
    </React.Fragment>
  );
}

export default NoteList;
