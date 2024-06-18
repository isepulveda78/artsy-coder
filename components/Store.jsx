import Link from "next/link"
import ProductCard from "./ProductCard"

const HomeStore = () => {
  return (
    <section className="bg-light">
        <div className="container p-5">
            <h2 className="mb-4 fs-1 text-center negative-margin-title varelaRound">Browse Around</h2>
            <div className="row ">
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
             <div className="d-grid gap-2 col-6 mx-auto">
                <Link className="btn btn-lg btn-outline-primary" type="button" href={'/'}>View More</Link>
             </div>
        </div>
</section>
  )
}

export default HomeStore