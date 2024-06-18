import Link from "next/link"
import Image from "next/image"
import ProductImage from "@/assets/images/productImage.png"

const AccountProductCard = () => {
  return (
    <div className="col-sm-4 mb-5 product-card">
        <Link href="/shop/1">
            <div className="card p-2 bg-gray">            
                <div className="badge bg-danger text-white position-absolute category">E-commerce</div>
                <Image className="card-Image-top rounded shadow img-fluid" src={ProductImage} width={450} height={300} alt="..." />
            </div>
            <div className="row p-1">
                <div className="col">
                    <h5 className="fw-bolder">Blue Jay</h5>
                </div>
                <div className="col">
                    <button className="btn btn-outline-primary float-end">Download</button>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default AccountProductCard