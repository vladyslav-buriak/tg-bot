
import { useEffect } from 'react';
import './App.css';

function App() {
  const { onToggleButton, tg } = useTelegram();


  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <button onClick={onToggleButton}>закрити</button>
    </div>
  );
}

export default App;
