import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetailsPage() {
    const params = useParams();
    const navigate = useNavigate();
    
    return (
        <>
        <button
                onClick={() => {
                    navigate("/products");
                }}
            >
                Back
            </button>
            <h1>Product Details of {params.id}</h1>
        </>
    );
}
