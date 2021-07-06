import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating}) {
    const[{ basket }, dispatch] = useStateValue();
    // console.log(id);

    // console.log(id, title, image,price,rating);

    const removeFromBasket = () => {
        //remove item form basket...
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };

    return (
        <div className="checkoutProduct">
             <img className="checkoutProduct__image"src={image} alt="" />
             <div class="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                
                <p class="checkoutProduct__price">
                    <small>&pound;</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))
                }   
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
             </div>
        </div>
    );
}

 export default CheckoutProduct;
