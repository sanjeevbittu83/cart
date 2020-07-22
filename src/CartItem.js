import React from 'react';

class CartItem extends
    React.Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
    }
    increaseQuantity=()=>{

        //this.state.qty+=1;
        console.log('this',this.state);
        this.setState({
            qty:this.state.qty+1
        });
    }
    
    decreaseQuantity=()=>{
        const{qty}=this.state;
        if(qty==0){
            return;
        }

        this.setState({
            qty:this.state.qty-1
        });
    }

    deleteQuantity=()=>{
        this.setState({
            qty:0
        });
    }

    render() {
        const { price, title, qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{ fontSize: 25}}>Rs {price}</div>
                    <div style={{ fontSize: 25 }}>Qty:{qty}</div>
                     <div className="cart-item-actions">
                        { /* button*/}
                        <img alt="increase"
                            className="action-icon"
                            src="https://image.flaticon.com/icons/svg/992/992651.svg"
                            onClick={this.increaseQuantity} />
                        <img alt="decrease" className="action-icon" 
                        src="https://image.flaticon.com/icons/svg/2716/2716405.svg"
                        onClick={
                            this.decreaseQuantity
                        }
                         />
                        <img alt="delete" className="action-icon" 
                        src="https://image.flaticon.com/icons/svg/3159/3159145.svg" 
                        onClick={this.deleteQuantity}
                        />


                    </div>
                </div>

            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;