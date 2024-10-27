/* eslint-disable react/prop-types */
const ProductCard = ({ product, handleAddToCart }) => {

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product?.name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <p className="font-bold">Price: {product?.price}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(product)} className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;