import Product from "./product.jsx";

function ProductTab() {
    let styles = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    }
    return (
        <div style={styles}>
            <Product title="Product 1" idx={0}/>
            <Product title="Product 2" idx={1}/>
            <Product title="Product 3" idx={2}/>
            <Product title="Product 4" idx={3}/>
        </div>

    );}

export default ProductTab;