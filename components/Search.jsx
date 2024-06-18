import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="input-group mb-3 input-group-lg">
        <input type="text" className="form-control" placeholder="e.g. ecommerce" aria-label="product search" aria-describedby="search" />
        <button className="btn btn-primary btn-primary-glow" type="button" id="search"><CiSearch className="text-white fs-3" /></button>
    </div>
  )
}

export default Search