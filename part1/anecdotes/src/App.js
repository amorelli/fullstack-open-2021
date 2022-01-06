import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ].map(anecdote => ({
    text: anecdote, score: 0
  }));
   
  const [selected, setSelected] = useState(0);
  const [anecdoteData, setAnecdoteData] = useState(anecdotes);

  const handleNextAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length));
  const handleVote = () => {
    setAnecdoteData(anecdoteData.map((anecdote, index) => (index === selected ? {text: anecdote.text, score: anecdote.score += 1} : anecdote )));
  }

  return (
    <div>
      <p>{anecdoteData[selected].text}</p>
      <p>Score: {anecdoteData[selected].score}</p>
      <button onClick={handleVote}>
        Vote
      </button>
      <button onClick={handleNextAnecdote}>
        Next anecdote
      </button>
    </div>
  )
}

export default App