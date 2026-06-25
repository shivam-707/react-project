import Price from "./price.jsx";
import './Product.css';

function Product({title, idx}) {
    let oldPrice = ["12,495", "11,900", "1,599", "599"];
    let newPrice = ["11,495", "10,900", "1,299", "499"];
    let description = ["Description 1", "Description 2", "Description 3", "Description 4"];
    return (
        <div className="product">
            <h4>{title}</h4>
            <p>{description[idx]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    )
}

export default Product