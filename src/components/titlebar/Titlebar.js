import React from 'react';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import UpdateIcon from '@material-ui/icons/Update';
import SaveIcon from '@material-ui/icons/Save';
import Tooltip from '@material-ui/core/Tooltip';
import './Titlebar.css';

class Titlebar extends React.Component {

    constructor(props)
    {
        super(props);
    }

    deleteNote =()=>{
        console.log("Deleted");
    }

    updateNote =()=>{
        console.log("Deleted");
    }

    createNote =()=>{
        console.log("Deleted");
    }

    saveNote = () =>{
        console.log("Deleted"); 
    }

    render()
    {
    return (
        <React.Fragment>
        <Paper className="titlebar">
            <Tooltip title="Create Note!">
                <CreateIcon className="custom-tag" onClick={this.createNote.bind(this)} />
            </Tooltip>
            <Tooltip title="Update Note!">
                <UpdateIcon className="custom-tag" onClick={this.updateNote.bind(this)} />
            </Tooltip>
            <Tooltip title="Save Note!">
                <SaveIcon className="custom-tag" onClick={this.saveNote.bind(this)} />
            </Tooltip>
            <Tooltip title="Delete Note!">
                <DeleteIcon className="custom-tag" onClick={this.deleteNote.bind(this)} />
            </Tooltip>
        </Paper>
        </React.Fragment>
    );
    }
}

export default Titlebar;
