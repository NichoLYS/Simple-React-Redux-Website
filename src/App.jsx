
import './App.css'
import ProductList from './features/productList/ProductList'
import Header from './components/Header'
import { useState } from 'react'
import CartModal from './features/cart/CartModal';

function App() {
  const [isOpenModalCart, setIsOpenModalCart] = useState(false);

  const handleOpenCart = () => {
    setIsOpenModalCart(true);
  }

  const handleHideCart = () => {
    setIsOpenModalCart(false)
  }

  return (
    <>
    {isOpenModalCart ? <CartModal handleHideCart={handleHideCart}/> : null }
    <Header handleOpenCart={handleOpenCart} />
    <main className='max-w-7xl mx-auto px-4'>
      <ProductList />
    </main>
    </>
  )
}

export default App
