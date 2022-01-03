import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const ProductDetail = (props) => {
    const params = useParams();
    return <h1>Product : ${params.productId}</h1>;
}

export default ProductDetail;

