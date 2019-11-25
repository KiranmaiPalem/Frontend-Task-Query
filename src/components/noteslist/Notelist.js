import React from 'react';
import Paper from '@material-ui/core/Paper';
import './Notelist.css';
import HttpService from '../services/httpServices';

const options = {
  hour:  "2-digit",
  minute: "2-digit",
  hour12 : true
}

class NoteList extends React.Component {
    constructor(props)
    {
      super(props)
      this.state={notes:[]}
    }
    componentDidMount(){
      let result = HttpService.getNotes();
      result.then(res=>{
        this.setState({notes:res}, ()=>{console.log(this.state.notes)});
      })
    }
    showData = (e) => {
      e.preventDefault();
      console.log('The link was clicked.');
    }
  render(){
  return (
    <React.Fragment>
      {this.state.notes.map((note,id)=>(
        <Paper key={id} onClick={this.showData.bind(this)}>
        <p>{note.text}</p>
        <p>{note.time}</p>
        </Paper> 
      ))}
          
    </React.Fragment>
  );
  }
}

export default NoteList;
