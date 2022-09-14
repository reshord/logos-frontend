import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import DeliveryPage from './components/Delivery/DeliveryPage';
import ProdInfo from './components/ProdInfo/ProdInfo';
import AuthModal from './components/modals/AuthModal';

const rootStyle = document.querySelector('body') as HTMLElement
rootStyle.style.margin = '0px'
rootStyle.style.overflowX = 'hidden'
rootStyle.style.background = 'linear-gradient(360deg, #211F20 0%, #44403F 100%)'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
  
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<App />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/infoProduct/:id' element={<ProdInfo />}/>
          <Route path='/auth' element={<AuthModal />}/>
          <Route path='/delivery' element={<DeliveryPage />}></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
