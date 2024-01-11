import { useSelector } from 'react-redux';
import Cart from '../assets/cart.svg'
import { selectCartTotalItems } from '../features/cart/cartSlice';

const Header = ({handleOpenCart}) => {
    const cartTotalItems = useSelector(selectCartTotalItems);
    return(
        <header className="bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <h1 className="text-3xl font-bold text-blue-500">Simple E-commerce</h1>
                    <button 
                        type="button"
                        className="relative rounded-full bg-blue-500 p-4 text-gray-100"
                        onClick={handleOpenCart}>
                        <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full
                        bg-red-500 text-white text-sm flex justify-center">
                            {cartTotalItems}
                        </span>
                        <img src={Cart} alt="cart" className="w-5 h-5 flex justify-center" />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;