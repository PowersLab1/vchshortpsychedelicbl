import React, { Component } from 'react';
import './Continue.css';
import { Redirect } from "react-router-dom";

class Continue extends Component {

    constructor(props) {
        super(props);
      this.state = {
        continue: false,
      }
    }

    keyFunction = (event) => {
    if(event.keyCode === 81) {
      this.setState((state, props) => ({
        continue: true
      }));
    }
  }

   componentDidMount(){
    document.addEventListener("keydown", this.keyFunction, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.keyFunction, false);
  }


      render() {

        if(this.state.continue === true){
      return <Redirect to="/Trial_P_rating" />
    }

        return (
          <div className="Continue">
            <header className="Continue-header">
            <div className="text-container">
              <p className="Continue-text">
                Great!
                <br /><br /> First practice session complete! Onto the next one.
                <br /><br /> Again, you will press the Q/Yes button when you see the stripes, and the E/No button when you do not.
                <br /><br /> However, you will also now hold down the buttons to say how confident you are in your choice.
                <br /><br /> You will see a rating screen following each trial, press
                <br /><br /> and then hold the <b> "Q"/YES </b> button or <b> "E"/NO </b> button to indicate rating.
                <br /><br /> The longer you hold it down, the more certain you are of your choice.
                <br /><br /> If you hold <b> "Q"/YES </b>  button down for a long time, you are very certain that you  <b> DO </b> see the stripes.
                <br /><br /> If you hold <b> "E"/NO </b>  button down for a long time, you are very certain that you <b> DO NOT </b> see the stripes.
                <br /><br /> Press <b> "Q"/YES </b> if you <b> DO </b> see the stripes.
                <br /><br /> Press <b> "E"/NO </b> if you <b> DO NOT </b> see the stripes.
                <br /><br /> As before, you should give a response every time you hear the tone.
                <br /><br /> Please respond as <b> QUICKLY </b> and as <b> ACCURATELY </b> as you <b> POSSIBLY CAN </b>
                <br /><br /><br /> PRESS "Q"/YES WHEN READY TO CONTINUE.
              </p>
            </div>
            </header>
          </div>
        );
      }
    }

export default Continue;
