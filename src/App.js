
import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Form from './components/Form';
function App() {
  const { tg } = useTelegram();


  useEffect(() => {
    tg.ready();
  })

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route>
          <Route index element={<Form />}></Route>
        </Route>

      </Routes>

    </div>
  );
}

export default App;
