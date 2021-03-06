import React from 'react';
import SuperSimple from "./react-range";


class MoodRange extends React.Component{
     constructor(props) {
        super(props);
        this.mood = -1;
        this.MoodPicked = this.MoodPicked.bind(this);
        this.MoodConfirmed = this.MoodConfirmed.bind(this);
    }
    
    MoodPicked = (moodValue) =>{
        console.log('Your mood is: ' + moodValue);
        this.mood = moodValue;
    }

    MoodConfirmed = () => {
        this.props.setPickedMood(this.mood);
    }

    render()
    {   
        return ( 
            <div class="container container-fluid moodFrame">
            <h1>What is your most prominent symptom today?</h1>
            <div class="container grid-container moodsAndSlider">
            <SuperSimple MoodPicked = {this.MoodPicked} />
            <div class="moodList">
            <p class="mood mood-0">Depression</p>
            <p class="mood mood-1">Anxiety or Panic Attacks</p>
            <p class="mood mood-2">Flashbacks</p>
            <p class="mood mood-3">Mania</p>
            <p class="mood mood-4">Hypomania</p>
            <p class="mood mood-5">Obsessive Compulsions</p>
            <p class="mood mood-6">Dissociation</p>
            <p class="mood mood-7">Executive Dysfunction</p>
            <p class="mood mood-8">Social Isolation</p>
            <p class="mood mood-9">Overstimulation</p>
            <p class="mood mood-10">Disordered Eating</p>
            <p class="mood mood-11">Hyper-Activity</p>
            <p class="mood mood-12">Intrusive Thoughts</p>
            <p class="mood mood-13">Impulsivity</p>
            <p class="mood mood-14">Emotional Dysregulation </p>
            <p class="mood mood-15">Nightmares/Night Terrors</p>
            <p class="mood mood-16">Physical Manifestations (e.g. Headache)</p>
            <p class="mood mood-17">Baseline Symptoms (or None) </p>
            <button onClick={this.MoodConfirmed}>Select</button>
            </div>
            </div>
            </div>
        );
    }
}
 
export default MoodRange;