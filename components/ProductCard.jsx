import Link from "next/link"
import Image from "next/image"
import ProductImage from "@/assets/images/productImage.png"

const ProductCard = () => {
  return (
    <div className="col-lg-4 col-md-4 col-xs-12 mb-5 product-card">
        <Link href="/shop/1">
            <div className="card p-2">            
                <div className="badge bg-danger text-white position-absolute category">E-commerce</div>
                <Image className="card-Image-top rounded shadow  img-fluid" src={ProductImage} width={450} height={300} alt="..." />
            </div>
            <div className="row p-1">
                <div className="col">
                    <h5 className="fw-bolder">Blue Jay</h5>
                </div>
                <div className="col">
                    <span className="float-end">$20.00</span>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default ProductCard