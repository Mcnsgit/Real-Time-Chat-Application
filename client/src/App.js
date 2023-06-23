import './App.css';
import React from 'react';
import ChatRoom from './components/ChatRoom';
import './components/ChatRoom.css'


function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Chat Application</h1>
      </header>
      
      <main className="app-main">
        <ChatRoom />
      </main>
      <footer className="app-footer">
        <p>&copy; 2023 Chat App. All rights reserved.</p>
      </footer>
    </div>
  );
}



export default App;
