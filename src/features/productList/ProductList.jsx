import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../cart/cartSlice';


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchApi = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchApi();
    }, [])

    const handleButton = (product) => {
        dispatch(addItemToCart(product))
    };

  return (
    <div className='w-full h-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 py-4'>
        {products.map((product) => {
            return (
                <div key={product.id} className='bg-white rounded-xl border shadow p-4 w-full'>
                <div className='group relative w-[80%] h-[250px] mx-auto overflow-hidden'>
                    <img 
                    src={product.image}
                    alt={product.title}
                    className='w-full h-full object-contain group-hover:scale-110 transition-scale duration-500 ease-in-out'/>
                </div>
                <div className='flex flex-col gap-4 mt-8'>
                    <button 
                    onClick={() => {handleButton(product)}}
                    className="bg-blue-500 text-white rounded-full py-3 font-bold text-sm hover:bg-blue-800">BUY NOW</button>
                    <h3 className='font-bold'>{product.title}</h3>
                    <h3>{product.description}</h3>
                </div>
            </div>
            )
        })}
    </div>
  )
}

export default ProductList