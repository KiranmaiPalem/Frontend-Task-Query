import React from 'react';
import Paper from '@material-ui/core/Paper';
import './Editor.css'
function Editor() {
    const DATE_OPTIONS = {  month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric',minute:'numeric' ,hour12: true   };
  return (
    <React.Fragment>
      <Paper className="editor">
          <p className="dateText">{(new Date()).toLocaleDateString('en-US', DATE_OPTIONS)}</p>
          <textarea className="custom-textarea" autofocus="autofocus"/>
      </Paper>
    </React.Fragment>
  );
}

export default Editor;
