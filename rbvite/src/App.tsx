import { useState } from 'react';
import './App.css';

function App() {
  // public은 static
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>rbvite</h1>
      <div>
        <Hello />
      </div>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
