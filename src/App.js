import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaTtoTwsPy2lwKnlD6S3oGIP9BepLZPTqx67vDGkddPM5ynGarPVTZsTtpD1xDR0nMD1oykl4&usqp=CAc',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile',
          qty: 1,
          img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS2XjeldSeUOCEOfMeZei0AY7xPLdXbdixVhwOQ9N-v_8DunnBRcwbpf2h65kqXs1o3PfDponwkUFg&usqp=CAc',
          id: 2
        },
        {
          price: 139999,
          title: 'Laptop',
          qty: 1,
          img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS1AfhchuZhxT2k_9MFi8ta9CGiHSExFWfgub4THJiLohcjFtJ7LAR9dcYh-cE6Ks3D2CXplgpO6yU&usqp=CAc',
          id: 3
        }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    })
  }
  handleDecreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products
    })
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id); // [{}]

    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
    })

    return cartTotal;
  }
  render () {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
