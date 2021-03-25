import React from 'react'
import './index.css'
import axios from 'axios'
function MainPage(){
     const [products,setProducts] = React.useState([]);
     React.useEffect(function(){
        axios.get('https://dec1ca52-2d31-476e-993d-eb4038a2d1a1.mock.pstmn.io/products')
        .then(function(result){
            console.log('result :', result)
            const products = result.data.products;
            setProducts(products);
        }).catch(function(error){
            console.log('error :',error);
        })
    
     },[])

    return(
        <div>
            <div id="header">
                <div id="header-area">
                    <img src="images/icons/logo.png" alt="logo" />
                </div>
            </div>
            <div id="body">
                <div id="banner">
                    <img src="images/banners/banner1.png" alt=" banner1" />
                </div>
                <h1>판매되는 상품들</h1>
                <div id="product-list">
                    {
                        products.map(function(product,index){
                            return(
                                <div className ="product-card">
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
                                    <div className="product-seller">
                                        <img className="product-avatar" src="images/icons/avatar.png" />
                                        <span>{product.seller}</span>
                                    </div>
                                </div>
                            </div>
                        )
                        })
                    }
                </div>

            </div>
            <div id="footer"></div>
        </div>
    )
}

export default MainPage;