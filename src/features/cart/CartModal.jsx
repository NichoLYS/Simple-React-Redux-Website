import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/Modal"
import { selectCartItems, selectCartTotalPrice, selectCartTotalItems, removeItemFromCart} from "./cartSlice";
const CartModal = ({handleHideCart}) => {
    const cartItems = useSelector(selectCartItems);
    const totalItems = useSelector(selectCartTotalItems);
    const totalPrice = useSelector(selectCartTotalPrice)
    const dispatch = useDispatch();

    const handleButton = (product) => {
        dispatch(removeItemFromCart(product));
    }   
    return (
        <Modal>
            <div className="flex flex-col gap-6 p-1 sm:p-2 w-full lg:w-[900px]">
                <div className="flex flex-col gap-6 max-h-[500px] overflow-auto">
                    {cartItems.map((product) => {
                        return (
                            <div
                                key={product.id}
                                className="w-full border-b-4 border-blue-200 pb-2">
                                <div className="flex items-center w-full">
                                <div className="w-[120px] h-auto overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover" />
                                </div>
                                <div className="ml-10 w-[75%]">
                                    <h3 className="capitalize mt-3 text-lg">{product.title}</h3>
                                    <div className="flex items-center gap-2">
                                        <h4 className="text-sm">{product.price}</h4>
                                        <h3 className="text-lg font-bold">{product.totalPrice}</h3>
                                    </div>
                                    <div className="flex items-center gap-4 mt-4 ml-auto">
                                        <button
                                            type="button"
                                            className="rounded-full bg-blue-400 w-5 h-5 text-white flex items-center justify-center">
                                            -
                                        </button>
                                        <h3 >{product.totalItems}</h3>
                                        <button
                                            type="button"
                                            className="rounded-full bg-blue-400 w-5 h-5 text-white flex items-center justify-center">
                                            +
                                        </button>
                                        <button 
                                            type="button"
                                            onClick={() => {handleButton(product)}}>
                                            <img 
                                            src="/src/assets/trash.png"
                                            className="w-6 h-6 object-cover"/>
                                        </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <h3 className="text-lg font-bold">Total: {totalItems}</h3>
                    <h3 className="text-lg font-bold">Total Items: {totalPrice}</h3>
                </div>
                <div className="flex items-center justify-between">
                    <button
                    type="button"
                    className="bg-slate-600 hover:bg-slate-800 text-white px-8 py-3 rounded-xl text-sm"
                    onClick={handleHideCart}
                    >
                        Close
                    </button>
                    <button
                    type="button"
                    className="bg-green-500 hover:bg-slate-800 text-white font-bold px-8 py-3 rounded-xl text-sm">
                        Checkout (whatsapp)
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default CartModal;