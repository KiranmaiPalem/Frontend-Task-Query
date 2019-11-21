import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Editor from './editor/Editor';
import Notelist from './noteslist/Notelist';
import Titlebar from './titlebar/Titlebar';

function MainPage() {
  return (
    <React.Fragment>
        <Grid container>
          <Grid item xs={12}>
                <Titlebar/>
          </Grid>
        <Grid item xs={4}>
                <Notelist/>
        </Grid>
        <Grid item xs={8}>
                <Editor/>
        </Grid>
        </Grid>
    </React.Fragment>
  );
}

export default MainPage;
