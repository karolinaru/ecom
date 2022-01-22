import './App.scss';
import ProductList from 'components/ProductList/ProductList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductDetail from 'components/ProductDetail/ProductDetail';

const App = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/:id' element={<ProductDetail />}/>
        </Routes>
      </>
    </Router>
  );
}

export default App;
