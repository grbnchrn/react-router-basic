import { Link } from "react-router-dom";

const PRODUCT_LIST=[
    {id : 1, price: 5},
    {id : 2, price: 10},
    {id : 3, price: 6},
    {id : 4, price: 8}
];

export default function Products() {
    return (
        <>          
            <h1>My Products Page</h1>
            <ul>
                {PRODUCT_LIST.map(product =>{
                    return (
                        <li key ={product.id}>
                            <Link to = {`/products/${product.id}`} relative="route">Product {product.id} </Link>
                            {/*  Relative not slash before, it will be automatically added
                            <Link to = {product.id} relative="path">Product {product.id}</Link> */}
                        </li>
                    )
                })}
            </ul>
        </>
    );
}
