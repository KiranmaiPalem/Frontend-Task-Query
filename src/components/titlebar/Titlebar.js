import React from 'react';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import './Titlebar.css';

class Titlebar extends React.Component {

    constructor(props)
    {
        super(props);
    }

    deleteNote =()=>{
        console.log("Deleted");
    }

    render()
    {
    return (
        <React.Fragment>
        <Paper className="titlebar">
            <DeleteIcon className="custom-tag" onClick={this.deleteNote.bind(this)}/>
        </Paper>
        </React.Fragment>
    );
    }
}

export default Titlebar;
