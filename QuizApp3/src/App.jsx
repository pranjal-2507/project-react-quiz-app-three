import './App.css';
import HomeComponent from '../src/Components/HomeComponent.jsx'
 import QuizComponent from '../src/Components/QuizComponent.jsx'
 import ResultComponent from '../src/Components/Result.Component.jsx'
 import { BrowserRouter } from 'react-router-dom';
 import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomeComponent/>}></Route>
      <Route path='/quiz' element={<QuizComponent/>}></Route>
      <Route path='/result' element={<ResultComponent/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App;
