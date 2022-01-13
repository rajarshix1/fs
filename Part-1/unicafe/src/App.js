import { useState } from "react";
import "./App.css";

const App = () => {
  let [click, setClick] = useState({
    left: 0,
    right: 0,
  });
  let [lorr, setLorr]=useState([])
  const handleLeftClick = () => {
    setClick({ ...click, left: click.left + 1 });
    setLorr(lorr.concat('L'))
  };
  const handleRightClick = () => {
    setClick({ ...click, right: click.right + 1 });
    setLorr(lorr.concat('R'))

  };

  return (
    <div className="App">
      <h3>{lorr.join('-')}</h3>
      <span>
        <h4>
          {click.left} {click.right} 
        </h4>
      </span>
      <hr />
      <button onClick={() => handleLeftClick()}>Left</button>
      <button onClick={() => handleRightClick()}>Right</button>
      {/* <button onClick={()=>setClick(click.right++)}>Right</button> */}
    </div>
  );
};

export default App;
