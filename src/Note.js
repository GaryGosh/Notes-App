import React, { Component } from "react";

class Note extends Component {

    state = {
        title: '',
        text: '',
    }

  render() {
    return (
        <div className="note">
            <div className="noteTitle">{this.state.title}</div>
            <div className="notetext">{this.state.text}</div>

        </div>
    );
  }
}

export default Note;
