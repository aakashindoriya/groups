import React from 'react';
import GroupManager from './components/GroupManager';
import ShowStatus from './components/ShowStatus';

const App = () => {
  return (
    <div className="App">
      <h1>To-Do List Manager</h1>
      <GroupManager />
      <ShowStatus />
    </div>
  );
};

export default App;
