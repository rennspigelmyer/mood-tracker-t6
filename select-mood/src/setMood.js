import MyMood from './myMood';
import { useState, useEffect } from 'react';

const userEntry = [
  'Depression',
  'Anxiety or Panic Attacks',
  'Flashbacks',
  'Mania',
  'Hypomania',
  'Obsessive Compulsions',
  'Dissociation',
  'Executive Dysfunction',
  'Social Isolation',
  'Overstimulation',
  'Disordered Eating',
  'Hyper-Activity',
  'Intrusive Thoughts',
  'Impulsivity',
  'Emotional Dysregulation',
  'Nightmares/Night Terrors',
  'Physical Manifestations (e.g. Headache)',
  'Baseline Symptoms (or None)'
];

function SetMood() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    alert("Your mood has displayed");
  }, [num]);
  function newNum() {
    if (num < userEntry.length - 1) {
      setNum(num + 1);
    } else {
      setNum(0);
    }
  }

  return (
    <div>
      <h1>Mood Tracker</h1>
      <MyMood userEntry={newNum} />
      <h1>Your answer indicates that you feel {userEntry[num]}.</h1>
    </div>
  );
}

export default SetMood;