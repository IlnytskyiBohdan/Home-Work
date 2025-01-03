import { useRef } from 'react'

function App() {
  const inputEl = useRef(null);

  const handleClick = () => {
    console.log('inputEl', inputEl);
    inputEl.current.focus();
  }

  return (
    <>
      <input type="text" ref={inputEl} />
      <button onClick={handleClick}>Set focus</button>
    </>
  )
}

export default App
