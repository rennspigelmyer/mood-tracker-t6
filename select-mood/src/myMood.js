import React from 'react';
// import Style from './App.css'

class MyMood extends React.Component{

    constructor(props) {
        super(props);
        this.mood = -1;
        //this.RenderMood = this.RenderMood.bind(this);
    }

    /*
      RenderMood = () => 
      {
            if( this.props.moodValue == 0 )
                return <MoodOptimistic />
            else if( this.props.moodValue == 1 )
                return </MoodHappy />
            else
                return </NoMoodPicked />
      }
    */

      render()
      {
          return ( 
            
            <div class="moodFrame"> 
                <span>{this.props.name} your most prominent symptom was {this.props.moods[this.props.moodValue]}.</span>
            </div>
        );
      }
  } 
export default MyMood; 