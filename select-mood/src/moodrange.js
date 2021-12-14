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
            <p class="mood mood-3">Hypomania</p>
            <p class="mood mood-4">Obsessive Compulsions</p>
            <p class="mood mood-5">Dissociation</p>
            <p class="mood mood-6">Executive Dysfunction</p>
            <p class="mood mood-7">Social Isolation</p>
            <p class="mood mood-8">Overstimulation</p>
            <p class="mood mood-9">Disordered Eating</p>
            <p class="mood mood-10">Hyper-Activity</p>
            <p class="mood mood-11">Intrusive Thoughts</p>
            <p class="mood mood-12">Impulsivity</p>
            <p class="mood mood-13">Emotional Dysregulation </p>
            <p class="mood mood-14">Nightmares/Night Terrors</p>
            <p class="mood mood-15">Physical Manifestations (e.g. Headache)</p>
            <p class="mood mood-16">Baseline Symptoms (or None) </p>
            <button onClick={this.MoodConfirmed}>Select</button>
            </div>
            </div>
            </div>
        );
    }
}
 
export default MoodRange;