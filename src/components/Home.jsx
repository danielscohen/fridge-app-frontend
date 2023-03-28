import Product from './Product';
import { useState, useEffect } from 'react'
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {

    const [productList, setProductList] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [areProductsVisible, setAreProductsVisible] = useState(true);
    const axiosPrivate = useAxiosPrivate();
    const location = useLocation();
    const navigate = useNavigate();

    const removeProduct = (id) => {
        setProductList(productList => {
            return [...productList].filter(p => p._id !== id);
        })
    }

    const removeAllProducts = () => {
        setProductList([]);
    }


    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getProducts = async () => {
            try {
                const response = await axiosPrivate.get('/api/v1/products', {
                    signal: controller.signal
                });
                console.log("got response");
                isMounted && setProductList(response.data.products);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setErrorMsg(error.response?.data?.msg);
                setIsError(true);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }

        getProducts();

        return () => {
            console.log("unmounting...");
            isMounted = false;
            controller.abort();
        }

    }, [location])

    if (isError) {
        return <h3>{errorMsg}</h3>
    }
    if (isLoading) {
        return <h3>Loading...</h3>
    }

    return (
        <>
            <h1>What's In My Fridge?</h1>
            <section className='product-list'>
                {productList.map(item => <Product {...item} key={item._id} clickHandler={() => removeProduct(item._id)} />)}
            </section>
        </>
    )
}

export default Home;