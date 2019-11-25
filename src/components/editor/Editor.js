import React from 'react';
import Paper from '@material-ui/core/Paper';
import './Editor.css';

const DATE_OPTIONS = {  month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric',minute:'numeric' ,hour12: true   };

class Editor extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={date:null }
  }
  componentDidMount() {
    setInterval( () => {
      this.setState({
        date : new Date().toLocaleDateString('en-US', DATE_OPTIONS)
      })
    },1000)
  }

  render(){
  return (
    <React.Fragment>
      <Paper className="editor">
          <p className="dateText">{this.state.date}</p>
          <textarea className="custom-textarea" autoFocus="autofocus"/>
      </Paper>
    </React.Fragment>
  );}

}


export default Editor;
