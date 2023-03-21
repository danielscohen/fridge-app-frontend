import Product from './Product';
import { useState, useEffect } from 'react'

const url = "http://localhost:5000/api/v1/admin/products";

const Home = () => {

    const [productList, setProductList] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [areProductsVisible, setAreProductsVisible] = useState(true);

    const removeProduct = (id) => {
        setProductList(productList => {
            return [...productList].filter(p => p._id !== id);
        })
    }

    const removeAllProducts = () => {
        setProductList([]);
    }

    const fetchProducts = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setIsLoading(false);
            setProductList(data.products);
        } catch (error) {
            setIsError(true);
            setErrorMsg(error);
        }
    }


    useEffect(() => {
        fetchProducts();
    }, [])


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