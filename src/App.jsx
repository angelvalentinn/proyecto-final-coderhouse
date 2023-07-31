import './styles/app.scss';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cart from './components/Cart';

function App() {

  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/cart" element={ <Cart /> } />
          <Route path="/" element={ <ItemListContainer /> } />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
  )

}

export default App;
