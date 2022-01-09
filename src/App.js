import './App.css';
// import Calculator from './Components/Calculator/Calculator';
// import SearchTable from './Components/search/Filtersearch';
import Formik from './Components/FormikValidation/Formik';
import { yupToFormErrors } from 'formik';
import Pagination from './Components/pagination/Pagination';
import Calculator from './Components/Calculator/Calculator';
import CheckBox from './Components/CheckBox/Checkbox';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Todo from './Components/Todo/Todo';
import SearchTable from './Components/search/Filtersearch';
 
function App() {
  return (
    <div className="App_container">
      <Router>
        <div className='Total_container' >
      <div className='link_container' >
        <div className='link_subcontainer'>
          <div>          
            <Link className='link' to="/">Formik</Link>
          </div>
          <div>          
            <Link className='link' to="/pagination">Pagination</Link>
          </div>
          <div>          
            <Link className='link' to="/calculator">Calculator</Link>
          </div>
          <div>          
            <Link className='link' to="/checkbox">Checkbox</Link>
          </div>
          <div>          
            <Link className='link' to="/todo">Todo</Link>
          </div>
          <div>          
            <Link className='link' to="/search">SearchTable</Link>
          </div>

          </div>

      </div>
      <div className='routes_container' >
        <Routes>
        <Route path="/" element={<Formik/>} ></Route>
        <Route path="/pagination" element={<Pagination/>} ></Route>
        <Route path="/calculator" element={<Calculator/>} ></Route>
        <Route path="/checkbox" element={<CheckBox/>} ></Route>
        <Route path="/todo" element={<Todo/>} ></Route>
        <Route path="/search" element={<SearchTable/>} ></Route>
        </Routes>

      </div>
      </div>
      </Router>
    </div>
  );
}  

export default App;
