import './App.css';
import { RadioGroup, RadioOption } from "./Radio";
import { useState } from "react";
import ScrolletRender from './Scroller_render';
import FeedbackForm from './FeedbackForm';

function App() {
  const [selected, setSelected] = useState("");

  // for FeedbackForm.js
  // the parameter is an object containing the score and comment value
  const handleSubmit = (object) => {
    console.log("Form submitted!");
    console.log("Score: ", object.score);
    console.log("Comment: ", object.comment);
  };

  return (
    <div className="App">
      <h2>How did you hear about Little Lemon?</h2>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Submit</button>
      
      <ScrolletRender />

      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
