import React from 'react';
import STORE from './store';
import List from './List';
import './App.css';

function App() {
  const list = STORE.lists.map((list, index) => {
    return <List header={list.header} cards={list.cardIds} key={index}/>
  })
  return (
    <div className="App">
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <main className='App-list'>
        {list}
      </main>
    </div>
  );
}

export default App;
