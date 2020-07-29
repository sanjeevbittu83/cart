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

    handleIncreaseQuantity=(product)=>{
        const{products}=this.state;
        const index = products.indexOf(product);
        products[index].qty+=1;
        this.setState({
            products
        })
    }

    handleDecreaseQuantity=(product)=>{
        const{products}=this.state;
        const index = products.indexOf(product);

        if(products[index].qty===0){
            return;
        }
        products[index].qty-=1;
        this.setState({
            products
        })
    }


    handleDeleteQuantity=(id)=>{
        const{products}=this.state;
        const items=products.filter((item)=> item.id!==id);
        this.setState({
            products:items
        })
    }
    render(){
        const{products}=this.state;
    return(
        <div className="Cart"> 
      {
          products.map((product)=>{
          return(
            <CartItem
             product={product}
            key={product.id}
            onIncreaseQuanatity={this.handleIncreaseQuantity}
            onDecreaseQuanatity={this.handleDecreaseQuantity}
            onDeleteQuantity={this.handleDeleteQuantity}
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