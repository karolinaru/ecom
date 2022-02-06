import './App.scss';
import ProductList from 'components/ProductList/ProductList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductDetail from 'components/ProductDetail/ProductDetail';
import ErrorProvider from 'components/ErrorContext/ErrorContext'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import Navbar from 'components/Navbar/Navbar';

const App = () => {
  return (
    <>
    <Navbar />
    <ErrorProvider>
      <ErrorMessage />
      <Router basename={process.env.PUBLIC_URL}>
        <>
          <Routes>
            <Route path='/' element={<ProductList />} />
            <Route path='/:id' element={<ProductDetail />}/>
          </Routes>
        </>
      </Router>
    </ErrorProvider>
    </>
  );
}

export default App;