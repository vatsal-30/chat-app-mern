import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup } from '@chakra-ui/button';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import ChatPage from './Pages/ChatPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Homepage />}></Route>
        <Route path='/chats' element={<ChatPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
