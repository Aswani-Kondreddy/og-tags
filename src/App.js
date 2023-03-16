import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from './components/homepage';
import Detailpage from './components/detailpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Homepage} exact/>
          <Route path='/details' Component={Detailpage}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
