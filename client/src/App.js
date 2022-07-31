import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Store from './pages/store/Store';

function App() {
  return (
    <div>
      <BrowserRouter>
       <NavBar />

        <Routes>
           <Route path='/store' element={<Store />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
