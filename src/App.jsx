import { useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const products = [
    { id: 1, name: "Product A", price: 10 },

    { id: 2, name: "Product B", price: 15 },

    { id: 3, name: "Product C", price: 20 },
  ];

  const handleAddToCart = (productInfo) => {
    const existingProduct = cartProducts.find((item) => item.id === productInfo.id);

    if (existingProduct) {
      setCartProducts(
        cartProducts.map((item) => item.id === productInfo.id ? { ...item, quantity: item.quantity + 1 } : item)
      )
    } else {
      setCartProducts([...cartProducts, { ...productInfo, quantity: 1 }])
    }
  }

  const increaseQuantity = (id) => {
    setCartProducts(
      cartProducts.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };


  const decreaseQuantity = (id) => {
    setCartProducts(
      cartProducts
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };


  useEffect(() => {
    let total = 0;
    for (let i = 0; i < cartProducts.length; i++) {
      total = total + cartProducts[i].price * cartProducts[i].quantity;
    }
    setTotalCost(total);
  }, [cartProducts]);

  return (
    <div className="lg:flex gap-5 my-5 mx-3">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
        {
          products.map((product) => <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart} />)
        }
      </div>
      <div className="ml-5">
        <h1 className="text-3xl font-bold text-center">Cart</h1>
        {/* cart card */}
        {
          cartProducts?.map((product) => {
            return (
              <div key={product.id} className="card w-96 bg-base-100 shadow-xl mb-2">
                <div className="card-body">
                  <h2 className="card-title">{product?.name}</h2>
                  <p>Price: {product?.price}</p>
                  {
                    product?.quantity && <p>Quantity: {product?.quantity}</p>
                  }
                  <div className="card-actions justify-end">
                    <button onClick={() => increaseQuantity(product.id)} className="btn btn-primary"> + </button>
                    <button onClick={() => decreaseQuantity(product.id)} className="btn btn-primary"> - </button>
                  </div>
                </div>
              </div>
            )
          })
        }
        <h1 className="text-xl font-bold mt-4">Total Cost: {totalCost}</h1>
      </div>
    </div>
  )
}

export default App;
