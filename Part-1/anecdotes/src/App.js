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
  ]

  let [selected, setSelected] = useState(0)
  let randomQuote=()=>setSelected(Math.floor(Math.random() * (anecdotes.length)))

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
 
  const voteForAnecdote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };
  console.log(votes);
  const highestVotes=Math.max(...votes)
  const highestAnecdote=anecdotes[votes.indexOf(highestVotes)]

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={voteForAnecdote}>vote</button>
      <button onClick={randomQuote}>change</button>
      <h1>Anecdote with most votes</h1>
      <p>{highestAnecdote}</p>
      {console.log(selected)}
    </div>
  )
}

export default App