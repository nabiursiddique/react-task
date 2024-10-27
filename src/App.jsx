import { useState } from "react";
import ProductCard from "./ProductCard/ProductCard";

function App() {
  const [cartProducts, setCartProducts] = useState([]);

  const products = [
    { id: 1, name: "Product A", price: 10 },

    { id: 2, name: "Product B", price: 15 },

    { id: 3, name: "Product C", price: 20 },
  ];

  const handleAddToCart = (productInfo) => {
    setCartProducts([...cartProducts, productInfo])
  }

  return (
    <div className="flex gap-5 my-5">
      <div className="grid grid-cols-2 gap-3">
        {
          products.map((product) => <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart} />)
        }
      </div>
      <div className="ml-5">
        <h1 className="text-2xl font-bold">Cart</h1>
        {/* cart card */}
        {
          cartProducts?.map((product) => {
            return (
              <div key={product.id} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{product?.name}</h2>
                  <p>Price: 100</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary"> + </button>
                    <button className="btn btn-primary"> - </button>
                  </div>
                </div>
              </div>
            )
          })

        }
      </div>
    </div>
  )
}

export default App
