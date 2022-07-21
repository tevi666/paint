import React from 'react';
import Canvas from './components/Canvas';
import SettingBar from './components/SettingBar';
import ToolBar from './components/ToolBar';
import './styles/App.scss'
function App() {
  return (
    <div>
      <ToolBar/>
      <SettingBar/>
      <Canvas/>
    </div>
  );
}

export default App;
