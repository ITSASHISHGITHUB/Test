import React, { useState } from 'react'
import './App.css'
function App() {

  const [input , setInput] = useState('');
  const [history , setHistory] = useState([]);
  const [prevInput,setPrevInput] = useState('');


  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try{
      const result = eval(input);
      setHistory([...history, {input:input , result:result}]);
      setInput(result.toString());
      setPrevInput(input);}
      catch (error) {
        setInput('Error');
      }
      
      
    };
  const handleUndo = () => {
    setInput(prevInput);
    setPrevInput('');
  };

  return (
    <div className='calculator'>
      <div className='header'>
        <button onClick={handleUndo} disabled={!prevInput}>
        Undo
        </button>
        <div className='line'>

        </div>
      </div>

      <div className='input'>
        {input}
      </div>
      <div className="history">
        history
      {history.map((item , index)=>(
      <div key={index}>
        {index.input}={item.result}

      </div>
      ))}
      </div>

      <div className="buttons">
        <button onClick={() => handleClick('1')}>
          1
        </button>
        <button onClick={() => handleClick('2')}>
          2
        </button>
        <button onClick={() => handleClick('3')}>
          3
        </button>
        <button onClick={() => handleClick('4')}>
          4
        </button>
        <button onClick={() => handleClick('5')}>
          5
        </button>
        <button onClick={() => handleClick('6')}>
          6
        </button>
        <button onClick={() => handleClick('7')}>
          7
        </button>
        <button onClick={() => handleClick('8')}>
          8
        </button>
        <button onClick={() => handleClick('9')}>
          9
        </button>
        <button onClick={() => handleClick('0')}>
          0
        </button>
        <button onClick={() => handleClick('+')}>
          +
        </button>
        <button onClick={() => handleClick('-')}>
          -
        </button>
        <button onClick={() => handleClick('*')}>
          *
        </button>
        <button onClick={() => handleClick('/')}>
          /
        </button>

        <button onClick={handleClear}>
        C
        </button>

        <button onClick={handleCalculate}>=</button>
      </div>
      
      </div>
  );
}


export default App;