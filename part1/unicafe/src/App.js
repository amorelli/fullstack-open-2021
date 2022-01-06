import React, { useState } from 'react'
import './App.css';

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  );

  const StatisticLine = props => ( 
  <tr>
		<td>{props.text}</td>
		<td>{props.statistic}</td>
	</tr> );

  const Statistics = (props) => {
    const { good, neutral, bad, average, totalCount} = props;
    return (<table>
    <thead>
      <tr>
        <th>Statistic</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
        <StatisticLine text="Good" statistic={good} />
        <StatisticLine text="Neutral" statistic={neutral} />
        <StatisticLine text="Bad" statistic={bad} />
        <StatisticLine text="Average" statistic={average} />
        <StatisticLine text="Positive" statistic={good/totalCount} />
      </tbody>
    </table>)
      
      
  }

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleSetGood = () => setGood(good + 1);
  const handleSetNeutral = () => setNeutral(neutral + 1);
  const handleSetBad = () => setBad(bad + 1);

  const totalCount = good + neutral + bad;
  const getAverage = () => (good-bad)/totalCount;

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleSetGood} text="Good" />
      <Button handleClick={handleSetNeutral} text="Neutral" />
      <Button handleClick={handleSetBad} text="Bad" />
      <h1>Statistics</h1>
     { (good || neutral || bad) ? <Statistics good={good} neutral={neutral} bad={bad} average={getAverage()} totalCount={totalCount} /> : <p>No feedback given.</p>}
    </div>
  )
}

export default App