import React from 'react';
import './index.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

function MainPage(){
     const [products,setProducts] = React.useState([]);
     React.useEffect(function(){
        axios.get('http://localhost:8080/products')
        .then(function(result){
            console.log('result :', result);
            const products = result.data.products;
            setProducts(products);
        }).catch(function(error){
            console.log('error :',error);
        })
    
     },[])

    return(
        <div>
                <div id="banner">
                    <img src="images/banners/banner1.png" alt=" banner1" />
                </div>
                <h1>판매되는 상품들</h1>
                <div id="product-list">
                    {
                        products.map(function(product,index){
                            return(
                                <div className ="product-card">
                                    <Link className="product-link" to={`/products/${product.id}`}> 
                                    <div>
                                        <img className="product-img" src={product.imageUrl} />
                                    </div>
                                    <div className="product-contetns">
                                        <span className ="product-name">
                                            {product.name}
                                        </span>
                                        <span className="product-price">
                                        {product.price}원
                                        </span>    
                                        <div className="product-footer">
                                            <div className="product-seller">
                                                <img className="product-avatar" src="images/icons/avatar.png" />
                                                <span>{product.seller}</span>
                                            </div>
                                            <div className="product-date">{dayjs(product.createdAt).fromNow()}</div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                        )
                        })
                    }
                </div>

        </div>
    )
}

export default MainPage;