import React, { useState } from 'react'


const Statistics=({good,neutral,bad})=>(
 good !=0 || bad!=0 ||neutral!=0? <div>
 <p>good {good}</p>
 <p>neutral {neutral}</p>
 <p>bad {bad}</p>
 <p>average {(good*1+neutral*0+bad*(-1))/(good+neutral+bad)}</p>
 <p>positive {100*good/(good+neutral+bad)}%</p>
</div> : <div>Nothing to display</div>
)
const App = () => {
  // save clicks of each button to its own state
  let [good, setGood] = useState(0)
  let [neutral, setNeutral] = useState(0)
  let [bad, setBad] = useState(0)

  return (
    <div>
<h1> give feedback</h1>
<button onClick={()=>setGood(good++)}>good</button>
<button onClick={()=>setNeutral(neutral++)}>neutral</button>
<button onClick={()=>setBad(bad++)}>bad</button>
    <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App