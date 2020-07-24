import React from 'react';
import CartItem from './CartItem';


class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
           products:[{
            price: 999,
            title: 'Phone',
            qty: 1,
            img: '',
            id:1
           },
           {
            price: 99,
            title: 'watch',
            qty: 1,
            img: '',
            id:2
           },
           {
            price: 9999,
            title: 'Laptop',
            qty: 1,
            img: '',
            id:3
           },
           {
            price: 550,
            title: 'Book',
            qty: 1,
            img: '',
            id:4
           },

        
        ]
        }
    }
    render(){
        const{products}=this.state;
    return(
        <div className="Cart"> 
      {
          products.map((product)=>{
          return(
            <CartItem product={product}
            key={product.id}
            />
          )
          }
          )
      }
        
        </div>
    );
    }
}
export default Cart;