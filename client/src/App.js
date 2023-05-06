import './App.css';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import ContactBook from './components/ContactBook';
import EditUser from './components/EditUser';
import NavBar from './components/NavBar';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
        <Routes>
          <Route path='/' element ={<ContactBook/>} />
          <Route path='/all' element ={<AllUsers/>} />
          <Route path='/add' element ={<AddUser/>} />
          <Route path='/edit/:id' element ={<EditUser/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
