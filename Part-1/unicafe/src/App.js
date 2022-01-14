import React, { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
  const StatisticLine = ({ text, value }) => (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
  return good !== 0 || bad !== 0 || neutral !== 0 ? (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine
          text="average"
          value={(good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)}
        />
        <StatisticLine
          text="positive"
          value={(100 * good) / (good + neutral + bad) + "%"}
        />
      </tbody>
    </table>
  ) : (
    <div>Nothing to Display</div>
  );
};

const StatisticLine = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
);

const Button = ({ text, setFeedback }) => (
  <button onClick={setFeedback}>{text}</button>
);

const App = () => {
  // save clicks of each button to its own state
  let [good, setGood] = useState(0);
  let [neutral, setNeutral] = useState(0);
  let [bad, setBad] = useState(0);

  return (
    <div>
      <h1> give feedback</h1>
      <Button setFeedback={() => setGood((good += 1))} text="good" />
      <Button setFeedback={() => setNeutral((neutral += 1))} text="neutral" />
      <Button setFeedback={() => setBad((bad += 1))} text="bad" />
      <br/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;