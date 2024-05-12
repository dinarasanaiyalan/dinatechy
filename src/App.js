import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './layout/Header';
import Home from './layout/Home';
import Projects from './layout/Projects';

function App() {
  return (
    <div className='parent-style'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={ <Home /> } ></Route>
          <Route path='/projects' element={ <Projects /> } ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
