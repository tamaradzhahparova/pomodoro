import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Guide from "./components/Guide/Guide";
import Todos from "./components/Todos/Todos";
import Timer from "./components/Timer/Timer";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="left">
          <Guide />
          <Todos />
        </div>
        {/*<Timer />*/}
      </main>
    </div>
  );
}

export default App;
